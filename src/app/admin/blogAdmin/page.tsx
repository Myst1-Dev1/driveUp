'use server';

import { BlogAdminContent } from "@/components/admin/blogAdminContent";
import { getPosts } from "@/services/getPosts";

export default async function BlogAdmin() {
    const postsData = await getPosts();

    return (
        <>
            <BlogAdminContent postsData = { postsData?.data } />
        </>
    )
}