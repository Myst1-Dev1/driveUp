import { AllPosts } from "@/components/blog/home/allPosts";
import { Intro } from "@/components/blog/home/intro";
import { RecentPosts } from "@/components/blog/home/recentPosts";

export default function Home() {
    return (
        <>
            <Intro />
            <RecentPosts />
            <AllPosts />
        </>
    )
}