import { Posts } from "@/@types/Posts";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

interface RecentPostsProps {
    posts: Posts[];
}

export function RecentPosts({ posts }:RecentPostsProps) {
    const latestPosts = [...posts]
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  .slice(0, 3);

    return (
        <>
            <div className="container py-16">
                <h2 className="font-semibold text-xl">Postagens recentes</h2>
                <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="max-w-2xl w-full">
                        <Image className="w-full h-72 rounded-lg object-cover mb-2" src={latestPosts[0]?.post_image_url || "/images/car-img.jpg"} width={400} height={400} alt="foto do post" />
                        <span className="text-blue-400 text-[14px]">
                            {new Date(latestPosts[0]?.createdAt).toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })}
                        </span>
                        <h3 className="text-2xl font-semibold py-3">{latestPosts[0]?.post_title}</h3>
                        <p className="font-light text-gray-500 text-sm mb-4 line-clamp-1">{latestPosts[0]?.post_description}</p>
                        <div className="flex flex-wrap gap-4 mb-3">
                            {latestPosts[0]?.post_categories?.map((categorie, index: number) => (
                                <span key={index} className="bg-gray-200 p-2 rounded-xl font-light text-[10px] lg:text-xs">{categorie}</span> 
                            ))}
                        </div>
                        <Link href={`/posts/${latestPosts[0]?.id}`} className="w-fit cursor-pointer flex gap-5 items-center font-semibold text-blue-500 py-3 transition-all duration-500 hover:px-3 hover:bg-blue-300 hover:text-white">Saiba Mais <FaLongArrowAltRight className="text-xl" /></Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        {latestPosts?.slice(1, 3)?.map((post) => (
                            <div
                                key={post.id}
                                className="w-full flex flex-col lg:flex-row gap-4"
                            >
                                <Image
                                    className="lg:max-w-60 w-full h-72 lg:h-52 rounded-lg object-cover mb-2"
                                    src={post.post_image_url || "/images/car-img.jpg"}
                                    width={400}
                                    height={400}
                                    alt={post.post_title}
                                />
                                <div className="h-full flex flex-col justify-between">
                                    <span className="text-blue-400 text-xs">
                                        {new Date(post.createdAt).toLocaleDateString("pt-BR", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                    <h3 className="text-xl font-semibold mt-2">
                                        {post.post_title}
                                    </h3>
                                    <p className="font-light text-gray-500 text-xs mb-4 line-clamp-2">
                                        {post.post_description}
                                    </p>
                                    <div className="flex flex-wrap gap-4 mb-3">
                                        {post.post_categories?.map((categorie, index: number) => (
                                            <span
                                            key={index}
                                            className="bg-gray-200 p-2 rounded-xl font-light text-[10px]"
                                            >
                                                {categorie}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href={`/post/${post.id}`}
                                        className="w-fit cursor-pointer flex gap-5 items-center font-semibold text-blue-500 py-3 transition-all duration-500 hover:px-3 hover:bg-blue-300 hover:text-white"
                                        >
                                        Saiba Mais <FaLongArrowAltRight className="text-xl" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}