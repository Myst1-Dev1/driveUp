'use server';

import { CarAdminContent } from "@/components/admin/carAdminContent";
import { getCars } from "@/services/getCars";

export default async function CarsAdmin() {
    const data = await getCars();

    return (
        <>
            <CarAdminContent cars = {data?.data} />
        </>
    )
}