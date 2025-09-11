'use server';

import { ProfileContent } from "@/components/principal/profile";
import { getCars } from "@/services/getCars";
import { getProfileData } from "@/services/getProfileData";

export default async function Profile() {
    const profileData = await getProfileData();
    const carsData = await getCars();

    return (
        <>
            <ProfileContent data = {profileData?.data} carData = {carsData?.data} />
        </>
    )
}