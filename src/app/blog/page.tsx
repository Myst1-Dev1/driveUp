"use server";

import { AllPosts } from "@/components/blog/home/allPosts";
import { Intro } from "@/components/blog/home/intro";
import { RecentPosts } from "@/components/blog/home/recentPosts";
import { getPosts } from "@/services/getPosts";

export default async function Home() {
    const posts = await getPosts();

    return (
        <>
            <Intro />
            <RecentPosts />
            <AllPosts posts = {posts?.data} />
        </>
    )
}