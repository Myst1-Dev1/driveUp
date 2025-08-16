"use server";

import { api } from "@/services/axios";
import { cookies } from "next/headers";
import { UpdateResult } from "./profileActions";

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
    const color = formData.get("color")?.toString() ?? "";
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
    body.append("color", color);
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
