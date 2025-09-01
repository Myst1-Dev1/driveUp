"use server";

import { Posts } from "@/@types/Posts";
import { PostCommentForm } from "@/components/blog/postCommentForm";
import { getPostById } from "@/services/getPostById";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
            <div className="container py-16 mt-10 flex flex-wrap gap-10 lg:gap-0 justify-between">
                <div className="lg:max-w-2xl w-full">
                    <Image src={postData?.post_image_url || "/images/car-img.jpg"} className="w-full h-80 rounded-md object-cover mb-4" width={400} height={400} alt="foto do post" />
                    <span className="text-blue-400 text-[14px]">
                        {new Date(postData?.createdAt).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        })}
                    </span>
                    <h3 className="text-2xl font-semibold py-3">{postData?.post_title}</h3>
                    <p className="font-light text-gray-500 text-sm mb-4"> {postData?.post_description}</p>
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
                            <h5 className="text-xl font-semibold">Artigos Relacionados</h5>
                            <div className="mt-6 flex justify-between gap-6 lg:gap-0 w-full flex-wrap">
                                <div className="flex gap-4 items-center">
                                    <Image src="/images/car-img.jpg" className="max-w-28 rounded-md w-full h-28" width={200} height={200} alt="foto do post" />
                                    <h6 className="max-w-52 font-semibold">A potência dos carros hibridos e seu impacto</h6>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Image src="/images/car-img.jpg" className="max-w-28 rounded-md w-full h-28" width={200} height={200} alt="foto do post" />
                                    <h6 className="max-w-52 font-semibold">A potência dos carros hibridos e seu impacto</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:max-w-80 w-full flex flex-col gap-20">
                    {/* <div className="bg-white rounded-md p-3 flex flex-col gap-6">
                        <h3 className="text-xl font-semibold">Artigos Populares</h3>
                        <div className="flex gap-4 items-center">
                            <Image src="/images/car-img.jpg" className="max-w-28 rounded-md w-full h-28" width={200} height={200} alt="foto do post" />
                            <h6 className="font-semibold">A potência dos carros hibridos e seu impacto</h6>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Image src="/images/car-img.jpg" className="max-w-28 rounded-md w-full h-28" width={200} height={200} alt="foto do post" />
                            <h6 className="font-semibold">A potência dos carros hibridos e seu impacto</h6>
                        </div>
                    </div> */}
                    <div className="bg-white rounded-md p-3">
                        <h5 className="text-xl font-semibold mb-5">Categorias</h5>
                        <div className="lg:max-w-64 w-full block mx-auto">
                            <Image src="/images/car-img.jpg" className="w-full h-38 object-cover rounded-md" width={400} height={400} alt="foto da categoria" />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h6>Carros elétricos</h6>
                                    <span className="text-sm text-gray-400">9 Artigos</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="cursor-pointer w-8 h-8 rounded-full bg-rose-500 text-white grid place-items-center transition-all duration-500 hover:brightness-90"><FaArrowLeft /></span>
                                    <span className="cursor-pointer w-8 h-8 rounded-full bg-rose-500 text-white grid place-items-center transition-all duration-500 hover:brightness-90"><FaArrowRight /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}