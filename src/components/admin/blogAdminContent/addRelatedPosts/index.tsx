import { Posts } from "@/@types/Posts"
import { Modal } from "@/components/modal";
import Image from "next/image";
import { useState } from "react";
import { FaCalendarAlt, FaPlus, FaTimes } from "react-icons/fa";

interface AddRelatedPostsProps {
    postData: Posts[];
    relatedPost:any;
    handleDeleteRelatedPost:any;
    handleAddARelatedPostToPost:any;
}

export function AddRelatedPosts({ postData, relatedPost, handleDeleteRelatedPost, handleAddARelatedPostToPost }:AddRelatedPostsProps) {
    const [relatedPostsModal, setRelatedPostsModal] = useState(false);

    return (
        <>
            <div className="flex flex-col gap-3 mb-4">
                <label htmlFor="relative-articles" className="font-semibold">Artigos relacionados</label>
                <div onClick={() => setRelatedPostsModal(true)} className="bg-zinc-200 grid place-items-center rounded-md w-12 h-12 cursor-pointer">
                    <FaPlus className="text-2xl" />
                </div>
                <div className="flex gap-5 flex-wrap">
                    {relatedPost?.map((rlPost:any) => (
                    <div key={rlPost.id} className="relative bg-white p-3 rounded-md max-w-48 w-full flex flex-col">
                        <Image src={rlPost.post_image_url || "/images/car-img.jpg"} className="w-full h-32 object-cover rounded-md" width={200} height={200} alt="foto do artigo relacionado" />
                        <h5 className="mt-3 line-clamp-1">{rlPost.post_title}</h5>
                        <p className="text-gray-500 font-light text-sm line-clamp-1">{rlPost.post_description}</p>
                        <span className="text-xs font-light mt-3 text-blue-400">
                            {new Date(rlPost.createdAt).toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })}
                        </span>
                        <div onClick={() => handleDeleteRelatedPost(rlPost.id)} className="w-7 h-7 rounded-full bg-white text-red-600 grid place-items-center absolute top-2 -right-2 cursor-pointer transition-all duration-500 hover:brightness-90">
                            <FaTimes className="text-sm" />
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <Modal maxWidth="max-w-md" isOpenModal={relatedPostsModal} setIsOpenModal={setRelatedPostsModal}>
                <h3 className="py-4 text-center font-semibold text-xl">Adicione artigos relacionados</h3>
                <div className="flex flex-col gap-5 overflow-y-auto h-80 scrollDontShow">
                    {postData?.map(post => (
                        <div onClick={() => handleAddARelatedPostToPost(post.id)} key={post.id} className="relative flex flex-col p-3 border border-gray-300 rounded-md w-full transition-all duration-500 cursor-pointer group hover:bg-blue-400">
                            <h3 className="text-blue-600 font-semibold group-hover:text-white">{post.post_title}</h3>
                            <p className="text-gray-400 font-light text-sm group-hover:text-white line-clamp-1">{post.post_description}</p>
                            <span className="mt-3 flex items-center gap-2 text-gray-400 text-xs group-hover:text-white font-light">
                                <FaCalendarAlt className="text-sm" />
                                {new Date(post.createdAt).toLocaleDateString("pt-BR", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                })}
                            </span>
                        </div>
                    ))}
                </div>
            </Modal>
        </>
    )
}