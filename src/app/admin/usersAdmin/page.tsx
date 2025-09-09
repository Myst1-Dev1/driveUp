'use server';

import { UsersAdminContent } from "@/components/admin/usersAdminContent";
import { getProfiles } from "@/services/getProfiles";



export default async function UsersAdmin() {
    const profilesData = await getProfiles();

    return (
        <>
            <UsersAdminContent profileData={profilesData?.data} />
        </>
    )
}