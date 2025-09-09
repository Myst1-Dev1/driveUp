"use server";

import { Posts } from "@/@types/Posts";
import { PostCommentForm } from "@/components/blog/postCommentForm";
import { PostDescription } from "@/components/blog/postDescription";
import { getPostById } from "@/services/getPostById";
import Image from "next/image";
import Link from "next/link";
import { FaComments } from "react-icons/fa6";

export default async function Post({ params }:any) {
    const { id } = await params;

    const data = await getPostById(id);

    const postData:Posts = data.data[0];

    console.log(postData);

    return (
        <>
            <Link href="/blog">
                <Image src="/images/blog-logo.png" className="absolute top-2 left-2 w-36 object-cover" width={200} height={200} alt="logo do blog" />
            </Link>
            <div className="container py-16 mt-10">
                <div className="w-full">
                    <Image src={postData?.post_image_url || "/images/car-img.jpg"} className="w-full h-80 rounded-md object-cover mb-4" width={400} height={400} alt="foto do post" />
                    <span className="text-blue-400 text-[14px]">
                        {new Date(postData?.createdAt).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        })}
                    </span>
                    <h3 className="text-2xl font-semibold py-3">{postData?.post_title}</h3>
                    <PostDescription postData={postData?.post_description} />
                    <div className="flex flex-wrap gap-4 mb-3">
                        {postData?.post_categories?.map((categorie, index:number) => (
                            <span key={index} className="bg-gray-200 p-2 rounded-xl font-light text-[10px] lg:text-xs transition-all duration-500 hover:bg-rose-400">{categorie}</span>
                        ))}
                    </div>
                    
                    <div className="mt-10">
                        <div className="flex items-center gap-4 font-semibold">
                            <FaComments className="text-xl" /> Faça um comentário
                        </div>
                        <PostCommentForm postId={postData?.id} />
                        <div className="flex flex-col gap-6 mt-10">
                            {postData?.post_comments?.map((comment, index:number) => (
                                <div key={index} className="flex gap-4">
                                    <Image src={comment.avatarUrl || "/images/user.jpg"} className="w-12 h-12 rounded-full object-cover aspect-square" width={200} height={200} alt="foto do usuário" />
                                    <div>
                                        <span className="text-gray-400 font-light text-xs">
                                            {new Date(comment.createdAt).toLocaleDateString("pt-BR", {
                                                day: "2-digit",
                                                month: "2-digit",
                                                year: "numeric",
                                            })}
                                        </span>
                                        <h4 className="font-semibold text-xl">{comment.name}</h4>
                                        <p className="mt-4 w-full text-sm">{comment.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            {postData?.related_posts.length === 0 ? '' : <h5 className="text-xl font-semibold">Artigos Relacionados</h5>}
                            <div className="mt-6 flex justify-between gap-6 lg:gap-0 w-full flex-wrap">
                                {postData?.related_posts.length === 0 ? '' : postData?.related_posts.map(related => (
                                    <Link href={`/blog/post/${related.id}`} key={related.id} className="flex gap-4 items-center">
                                        <Image src={related.post_image_url || "/images/car-img.jpg"} className="max-w-28 rounded-md w-full h-28" width={200} height={200} alt="foto do post" />
                                        <h6 className="max-w-52 font-semibold">{related.post_title}</h6>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}