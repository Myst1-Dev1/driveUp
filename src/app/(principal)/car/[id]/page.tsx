'use server';

import { CarType } from "@/@types/Car";
import { CarContent } from "@/components/principal/carContent";
import { getCarById } from "@/services/getCarById";

export default async function Car({ params }: any) {
    const { id } = await params;

    const carData = await getCarById(id);

    const data:CarType = carData?.data[0];

    return (
        <>
            <CarContent data={data} />
        </>
    )
}