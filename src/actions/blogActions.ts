'use server';

import { cookies } from "next/headers";
import { UpdateResult } from "./profileActions";
import { api } from "@/services/axios";

export async function createPostAction(
  _prev: UpdateResult,
  formData: FormData
): Promise<UpdateResult> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("user-token")?.value;

    if (!token) {
      return { success: false, message: "Token de autenticação não encontrado." };
    }

    const post_image_url = formData.get("post_image_url") as File | null;
    const post_title = formData.get("post_title")?.toString() ?? "";
    const post_categories = formData.get("post_categories")?.toString() ?? "";
    const post_description = formData.get("post_description")?.toString() ?? "";

    const body = new FormData();

    if(post_image_url) {
      body.append("post_image_url", post_image_url, post_image_url.name);
    }

    body.append("post_title", post_title);
    body.append("post_categories", post_categories);
    body.append("post_description", post_description);

    console.log("dados:", body);

    await api.post("/blog/createPost", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { success: true, message: "Artigo criado com sucesso" };
  } catch (error: any) {
    return { success: false, message: error?.message ?? "Erro ao criar artigo." };
  }
}