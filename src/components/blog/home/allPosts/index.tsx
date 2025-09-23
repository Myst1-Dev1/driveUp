'use client';

import { Posts } from "@/@types/Posts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface AllPostsProps {
    posts: Posts[];
}

export function AllPosts({ posts }:AllPostsProps) {
    const [counterPosts, setCounterPosts] = useState(6);

    return (
        <>
            <div className="container py-16">
                <h2 className="font-semibold text-xl">Todos os posts</h2>
                <div className="mt-10 grid grid-cols-1 gap-5 lg:gap-0 place-items-center lg:grid-cols-3 2xl:grid-cols-4">
                    {posts?.slice(0, counterPosts)?.map(post => (
                        <div key={post.id} className="max-w-96 h-full flex flex-col justify-between w-full">
                            <Image className="w-full h-60 rounded-lg object-cover mb-2" src={post.post_image_url || "/images/car-img.jpg"} width={400} height={400} alt="foto do post" />
                            <span className="text-blue-400 text-[14px]">
                                 {new Date(post.createdAt).toLocaleDateString("pt-BR", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                })}
                            </span>
                            <h3 className="text-2xl font-bold mb-3">{post.post_title}</h3>
                            <p className="font-light text-gray-500 text-sm mb-4 line-clamp-1">{post.post_description}</p>
                            <div className="flex flex-wrap gap-4 mb-3">
                                {post.post_categories.map((categorie, index:number) => (
                                    <span key={index} className="bg-gray-200 p-2 rounded-xl font-light text-[10px] lg:text-xs">{categorie}</span>
                                ))}
                            </div>
                            <Link href={`/blog/post/${post.id}`} className="w-fit cursor-pointer mb-5 flex gap-5 items-center font-semibold text-blue-500 py-3 transition-all duration-500 hover:px-3 hover:bg-blue-300 hover:text-white">Saiba Mais <FaLongArrowAltRight className="text-xl" /></Link>
                        </div>
                    ))}
                </div>
                {posts?.length === 6 ? '' : <button onClick={() => setCounterPosts(counterPosts + 3)} className="block mx-auto max-w-32 cursor-pointer w-full p-3 rounded-full bg-black text-white font-semibold transition-all duration-500 hover:bg-blue-400 mt-6">Ver mais</button>}
            </div>
        </>
    )
}