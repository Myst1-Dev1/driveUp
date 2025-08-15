'use server';

import { ProfileContent } from "@/components/principal/profile";
import { getProfileData } from "@/services/getProfileData";

export default async function Profile() {
    const profileData = await getProfileData();

    return (
        <>
            <ProfileContent data = {profileData.data} />
        </>
    )
}