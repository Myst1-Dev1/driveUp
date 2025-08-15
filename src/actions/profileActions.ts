"use server";

import { api } from "@/services/axios";
import { cookies } from "next/headers";

export interface UpdateResult {
  success: boolean;
  message?: string;
}

export async function updateProfileAction(
  _prev: UpdateResult,
  formData: FormData
): Promise<UpdateResult> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("user-token")?.value;
    if (!token) {
      return { success: false, message: "Sem token de autenticação." };
    }

    const fullName = formData.get("fullName")?.toString() ?? "";
    const cpfCnpj = formData.get("cpfCnpj")?.toString() ?? "";
    const address = formData.get("address")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const birthDate = formData.get("birthDate")?.toString() ?? "";
    const avatar = formData.get("avatarUrl") as File | null;

    const body = new FormData();
    body.append("fullName", fullName);
    body.append("cpfCnpj", cpfCnpj);
    body.append("address", address);
    body.append("phone", phone);
    if (birthDate) body.append("birthDate", new Date(birthDate).toISOString());
    if (avatar && avatar.size > 0) {
      body.append("avatar", avatar, avatar.name);
    }

    await api.put("/user/updateProfile", body, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    return { success: true, message:"Atualizado com sucesso!" };
  } catch (e: any) {
    return { success: false, message: e?.message ?? "Erro ao atualizar perfil." };
  }
}