'use server';

import { cookies } from "next/headers";
import { UpdateResult } from "./profileActions";
import { api } from "@/services/axios";
import { revalidatePath } from "next/cache";
import { Posts } from "@/@types/Posts";

export async function createPostAction(
  _prev: UpdateResult,
  formData: FormData,
  relative_posts_data: Posts[] | any
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

    // Converte o array de artigos relacionados para uma string JSON
    const relatedPosts = JSON.stringify(relative_posts_data);

    const body = new FormData();

    if (post_image_url) {
      body.append("post_image_url", post_image_url, post_image_url.name);
    }

    body.append("post_title", post_title);
    body.append("post_categories", post_categories);
    body.append("post_description", post_description);
    body.append("related_posts", relatedPosts); // Passa como string JSON


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

export async function updatePostAction(
  _prev: UpdateResult,
  formData: FormData,
  id: number,
  relative_posts_data: Posts[] | any
): Promise<UpdateResult> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('user-token')?.value;
    if (!token) return { success: false, message: 'Token de autenticação não encontrado.' };

    const postCategoriesRaw = formData.get('post_categories')?.toString();
    const postCategories = postCategoriesRaw ? JSON.parse(postCategoriesRaw) : [];

    const postImageUrl = formData.get('post_image_url') as File | null;
    const postTitle = formData.get('post_title')?.toString() ?? '';
    const postDescription = formData.get('post_description')?.toString() ?? '';
    const relatedPosts = JSON.stringify(relative_posts_data);

    const body = new FormData();

    if (postImageUrl instanceof File && postImageUrl.size > 0) {
      body.append('post_image_url', postImageUrl, postImageUrl.name);
    }

    body.append('post_title', postTitle);
    body.append('post_categories', JSON.stringify(postCategories));
    body.append('post_description', postDescription);
    body.append("related_posts", relatedPosts);

    await api.put(`/blog/updatePost/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { success: true, message: 'Artigo atualizado com sucesso' };
  } catch (error: any) {
    return { success: false, message: error?.message ?? 'Erro ao atualizar artigo.' };
  }
}

export async function createComment(_prev: UpdateResult,
  formData: FormData, id: number): Promise<UpdateResult> {

    try {
      const cookieStore = await cookies();
      const token = cookieStore.get('user-token')?.value;
      if (!token) return { success: false, message: 'Token de autenticação não encontrado.' };

      const name = formData.get('name')?.toString();
      const avatarUrl = formData.get('avatarUrl')?.toString();
      const comment = formData.get('comment')?.toString();

      await api.post(`/blog/createComment/${id}`, { name, avatarUrl, comment }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

      return { success: true, message:"Comentário criado com sucesso." };
    } catch (error:any) {
      return { success: false, message: error?.message ?? "Erro ao criar artigo." };
    }
}

export async function deletePostAction(id:number) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("user-token")?.value;

    if (!token) {
      return { success: false, message: "Token de autenticação não encontrado." };
    }

    await api.delete("/blog/deletePost/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Artigo deletado com sucesso!");

  } catch (error: any) {
    console.log('Tivemos um erro ao deletar o artigo', error)
  }

  revalidatePath("/admin/blogAdmin");
}