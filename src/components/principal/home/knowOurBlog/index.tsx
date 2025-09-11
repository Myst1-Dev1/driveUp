'use server';

import { Posts } from "@/@types/Posts";
import { getPosts } from "@/services/getPosts";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export async function KnowOurBlog() {
    const data: Posts[] | any = await getPosts();

    const blogData = data?.data?.slice(0,3);

    return (
        <>
            <div className="container mt-20 py-8">
                <div>
                    <h2 className="text-xl font-bold text-center">Embarque em uma Jornada de Alta Performance</h2>
                    <p className="font-light text-gray-500 max-w-xl mt-2 text-center block mx-auto">Explore conteúdos exclusivos sobre inovação, mobilidade e dicas para tirar o máximo proveito da sua experiência ao volante. Tudo o que você precisa para acelerar sua jornada com estilo e eficiência.</p>
                </div>
                <div className="mt-12 grid place-items-center m-auto grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0">
                    {blogData?.map((post: Posts) => (
                        <div key={post.id} className="max-w-80 w-full h-full relative overflow-hidden rounded-xl">
                            <Image className="w-full h-32 object-cover" src={post.post_image_url || "/images/blogImg.jpg"} width={300} height={200} alt="foto do artigo do blog" />
                            <div className="bg-white w-full p-3 flex flex-col gap-3">
                                <span className="text-xs font-semibold text-[#3E5EF0]">
                                    {new Date(post.createdAt).toLocaleDateString("pt-BR", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </span>
                                <h3 className="text-xl font-bold line-clamp-1">{post.post_title}</h3>
                                <p className="text-sm text-gray-500 font-light line-clamp-1">{post.post_description}</p>
                                <Link href={`/blog/post/${post.id}`} target="blank" rel="noreferrer" className="flex items-center gap-3 text-[#3E5EF0] font-semibold transition-all duration-500 hover:text-blue-950">Saiba mais <FaLongArrowAltRight className="text-xl" /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}