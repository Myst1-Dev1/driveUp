"use server";

import { api } from "@/services/axios";
import { cookies } from "next/headers";
import { UpdateResult } from "./profileActions";
import { revalidatePath } from "next/cache";

export async function createCarAction(
  _prev: UpdateResult,
  formData: FormData
): Promise<UpdateResult> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("user-token")?.value;

    if (!token) {
      return { success: false, message: "Token de autenticação não encontrado." };
    }

    const name = formData.get("name")?.toString() ?? "";
    const carModel = formData.get("car_model")?.toString() ?? "";
    const year = formData.get("year")?.toString() ?? "";
    const passengers = formData.get("passengers")?.toString() ?? "";
    const transmission = formData.get("transmission")?.toString() ?? "";
    const fuel = formData.get("fuel")?.toString() ?? "";
    const fuelCapacity = formData.get("fuel_capacity")?.toString() ?? "";
    const pricePerHour = formData.get("price_per_hour")?.toString() ?? "";
    const pricePerDay = formData.get("price_per_day")?.toString() ?? "";
    const pricePerWeek = formData.get("price_per_week")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";
    
    // Lidando com o arquivo da imagem principal
    const image = formData.get("image_url") as File | null;
    const thumbnailImages = formData.getAll("thumbnail_urls") as File[];

    const body = new FormData();
    body.append("name", name);
    body.append("car_model", carModel);
    body.append("year", year);
    body.append("passengers", passengers);
    body.append("transmission", transmission);
    body.append("fuel", fuel);
    body.append("fuel_capacity", fuelCapacity);
    body.append("price_per_hour", pricePerHour);
    body.append("price_per_day", pricePerDay);
    body.append("price_per_week", pricePerWeek);
    body.append("description", description);

    if (image) {
      body.append("image_url", image, image.name);
    }

    thumbnailImages.forEach((file, index) => {
      body.append("thumbnail_urls", file, file.name);
    });

    console.log(body);

    await api.post("/car/createCar", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { success: true, message: "Carro criado com sucesso" };
  } catch (error: any) {
    return { success: false, message: error?.message ?? "Erro ao criar carro." };
  }
}

const isValidImage = (f: File | null | undefined) =>
  !!f && f.size > 0 && /^image\//i.test(f.type || '');

export async function updateCarAction(
  _prev: UpdateResult,
  formData: FormData,
  id: number
): Promise<UpdateResult> {
  try {
    const token = (await cookies()).get('user-token')?.value;
    if (!token) return { success: false, message: 'Token de autenticação não encontrado.' };

    const body = new FormData();
    // campos textuais
    body.append('name', formData.get('name')?.toString() ?? '');
    body.append('car_model', formData.get('car_model')?.toString() ?? '');
    body.append('year', formData.get('year')?.toString() ?? '');
    body.append('passengers', formData.get('passengers')?.toString() ?? '');
    body.append('transmission', formData.get('transmission')?.toString() ?? '');
    body.append('fuel', formData.get('fuel')?.toString() ?? '');
    body.append('fuel_capacity', formData.get('fuel_capacity')?.toString() ?? '');
    body.append('price_per_hour', formData.get('price_per_hour')?.toString() ?? '');
    body.append('price_per_day', formData.get('price_per_day')?.toString() ?? '');
    body.append('price_per_week', formData.get('price_per_week')?.toString() ?? '');
    body.append('description', formData.get('description')?.toString() ?? '');

    // (opcional) preservar imagens atuais
    const existingImageUrl = formData.get('existing_image_url')?.toString() ?? '';
    const existingThumbs = formData.get('existing_thumbnail_urls')?.toString() ?? '';
    if (existingImageUrl) body.append('existing_image_url', existingImageUrl);
    if (existingThumbs)   body.append('existing_thumbnail_urls', existingThumbs);

    // capa (somente se arquivo válido)
    const image = formData.get('image_url') as File | null;
    if (isValidImage(image)) {
      body.append('image_url', image!, image!.name || 'cover.jpg');
    }

    // thumbs (apenas válidas, até 5)
    (formData.getAll('thumbnail_urls') as File[])
      .filter(isValidImage)
      .slice(0, 5)
      .forEach((f) => body.append('thumbnail_urls', f, f.name || 'thumb.jpg'));

    // axios: NÃO defina 'Content-Type' manualmente
    await api.put(`/car/updateCar/${id}`, body, {
      headers: { Authorization: `Bearer ${token}` },
      maxBodyLength: Infinity, // evita problemas com arquivos maiores
    });

    return { success: true, message: 'Carro atualizado com sucesso' };
  } catch (error: any) {
    const msg = error?.response?.data?.message || error?.message || 'Erro ao atualizar carro.';
    return { success: false, message: msg };
  }
}

export async function createCarReview(
  _prev: UpdateResult,
  formData: FormData,
  id:number
): Promise<UpdateResult> {

    const cookieStore = await cookies();
    const token = cookieStore.get("user-token")?.value;

    if (!token) {
      return { success: false, message: "Token de autenticação não encontrado." };
    }

    const evaluatorName = formData.get("evaluatorName")?.toString() ?? "";
    const evaluatorUrl = formData.get("evaluatorUrl")?.toString() ?? "";
    const comment = formData.get("comment")?.toString() ?? "";

    console.log(evaluatorUrl, evaluatorName, comment);

    try {
      
      await api.post("/car/createCarReview/" + id, { evaluatorUrl, evaluatorName , comment }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      revalidatePath(`/car/${id}`);
      
      return { success: true, message: "Avaliação criada com sucesso" };
    } catch (error:any) {
      return { success: false, message: error?.message ?? "Erro ao criar avaliação." };
    }
}

export async function deleteCar(id:number) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("user-token")?.value;

    if (!token) {
      return { success: false, message: "Token de autenticação não encontrado." };
    }

    await api.delete("/car/deleteCar/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  } catch (error) {
    console.log('Tivemos um erro ao deletar o carro', error)
  }

  revalidatePath("/admin/carsAdmin");
}

export async function favoriteACar(carId: number, userProfileId: number) {

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("user-token")?.value;

    if (!token) {
      return { success: false, message: "Token de autenticação não encontrado." };
    }

    await api.post("/car/favorite", { carId, userProfileId }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log('Tivemos um erro ao favoritar o carro', error)
  }

  revalidatePath("/");
}

export async function deleteFavorite(carId: number, userProfileId: number) {

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("user-token")?.value;

    if (!token) {
      return { success: false, message: "Token de autenticação não encontrado." };
    }

    await api.delete("car/deleteFavorite", {
      data: { carId, userProfileId },
      headers: { Authorization: `Bearer ${token}` },
    });

  } catch (error) {
    console.log('Tivemos um erro ao remover o favorito', error)
  }

  revalidatePath("/");
}