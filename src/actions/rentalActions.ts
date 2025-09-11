'use server';

import { cookies } from "next/headers";
import { UpdateResult } from "./profileActions";
import { api } from "@/services/axios";

export async function createRental( _prev: UpdateResult,
  formData: FormData,
  userId: number,
  carId: number
): Promise<UpdateResult> {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("user-token")?.value;
    
        if (!token) {
            return { success: false, message: "Token de autenticação não encontrado." };
        }

        const startDate = formData.get("startDate")?.toString() ?? "";
        const endDate = formData.get("endDate")?.toString() ?? "";
        const pickupLocation = formData.get("pickupLocation")?.toString() ?? "";
        const dropoffLocation = formData.get("dropoffLocation")?.toString() ?? "";

        console.log(startDate, endDate, pickupLocation, dropoffLocation);

        await api.post("/rental/createRental", {userId, carId, startDate, endDate, pickupLocation, dropoffLocation}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

         return { success: true, message: "Aluguel criado com sucesso" };
    } catch (error) {
         return { success: false, message: "Erro ao criar o aluguel" };
    }
}

export async function returnRental(id: number) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("user-token")?.value;

        if (!token) {
            return { success: false, message: "Token de autenticação não encontrado." };
        }

        await api.post(
            `/rental/${id}/return`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log('Aluguel devolvido com sucesso!');
    } catch (error) {
        console.log('Tivemos um erro ao devolver o carro', error);
    }
}

export async function cancelRental(id: number) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("user-token")?.value;

        if (!token) {
            return { success: false, message: "Token de autenticação não encontrado." };
        }

        await api.post(
            `/rental/${id}/cancel`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log('Aluguel cancelado com sucesso!');
    } catch (error) {
        console.log('Tivemos um erro ao cancelar o carro', error);
    }
}