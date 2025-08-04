'use server'

import { api } from "@/services/axios";
import { cookies } from 'next/headers';

export interface SignInResult {
  success: boolean;
  message?: string;
}

export async function signInAction(_: SignInResult, formData: FormData): Promise<SignInResult> {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return { success: false, message: "Campos obrigatórios." };
  }

  try {
    const res = await api.post("/auth/login", { email, password });

    const token = res.data.token;

    const cookieStore = await cookies();
    cookieStore.set({
      name: "user-token",
      value: token,
      path: "/",
      maxAge: 60 * 60 * 24 * 7 // 7 dias
    });

    return { success: true };
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Erro inesperado ao fazer login";

    console.error("Erro ao fazer login:", message);
    return { success: false, message };
  }
}