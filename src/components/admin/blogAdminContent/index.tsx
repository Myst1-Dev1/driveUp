'use client';

import { AdminHeader } from "@/components/admin/adminHeader";
import { SideBar } from "@/components/admin/sideBar";
import { useState } from "react";
import { FaCalendarAlt, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { deletePostAction } from "@/actions/blogActions";
import { Posts } from "@/@types/Posts";
import { UpdatePost } from "./updatePost";
import { CreatePost } from "./createPost";

interface BlogAdminContentProps {
    postsData: Posts[];
}

export function BlogAdminContent({ postsData }:BlogAdminContentProps) {
    const [editArticle, setEditArticle] = useState("view");
    const [postId, setPostId] = useState(0);

    console.log(editArticle);

    console.log(postsData);

    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <AdminHeader />
                    <div className="py-8 px-8">
                        <div className="flex justify-between items-center w-full">
                            <h2 className="font-bold text-xl">Artigos</h2>
                            {editArticle === "view" && <button onClick={() => setEditArticle("edit")} className="bg-blue-500 text-white p-3 rounded-lg max-w-40 w-full font-semibold cursor-pointer transition-all duration-500 hover:brightness-90">Criar Artigo</button>}
                            {(editArticle === "edit" || editArticle === "update") && (
                                <button
                                    onClick={() => setEditArticle("view")}
                                    className="bg-blue-500 text-white p-3 rounded-lg max-w-40 w-full font-semibold cursor-pointer transition-all duration-500 hover:brightness-90"
                                >
                                    Voltar
                                </button>
                            )}
                        </div>
                        {editArticle === "view" &&
                        <div>
                            <div className="mt-10 flex flex-col gap-4">
                                {postsData?.map(post => (
                                    <div key={post.id} className="relative flex flex-col p-3 border border-gray-300 rounded-md w-full transition-all duration-500 cursor-pointer group hover:bg-blue-400">
                                        <h3 className="text-blue-600 font-semibold group-hover:text-white">{post.post_title}</h3>
                                        <p className="text-gray-400 font-light text-sm group-hover:text-white">{post.post_description}</p>
                                        <span className="mt-3 flex items-center gap-2 text-gray-400 text-xs group-hover:text-white font-light">
                                            <FaCalendarAlt className="text-sm" />
                                            {new Date(post.createdAt).toLocaleDateString("pt-BR", {
                                                day: "2-digit",
                                                month: "2-digit",
                                                year: "numeric",
                                            })}
                                        </span>
                                        <div className="flex gap-4 absolute bottom-2 right-2">
                                            <span onClick={() => { setPostId(post.id); setEditArticle("update") }} className="w-7 h-7 rounded-md bg-green-300 text-white cursor-pointer grid place-items-center transition-all duration-500 hover:bg-green-500"><FaPencilAlt /></span>
                                            <span onClick={() => deletePostAction(post.id)} className="w-7 h-7 rounded-md bg-red-300 text-white cursor-pointer grid place-items-center transition-all duration-500 hover:bg-red-500"><FaTrashAlt /></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end items-end w-full gap-4 mt-8">
                                <span className="cursor-pointer font-semibold transtion-all duration-500 hover:bg-blue-400 text-white w-8 h-8 grid place-items-center bg-gray-600 rounded-md">1</span>
                                <span className="cursor-pointer font-semibold transtion-all duration-500 hover:bg-blue-400 text-white w-8 h-8 grid place-items-center bg-gray-600 rounded-md">2</span>
                                <span className="cursor-pointer font-semibold transtion-all duration-500 hover:bg-blue-400 text-white w-8 h-8 grid place-items-center bg-gray-600 rounded-md">...</span>
                                <span className="cursor-pointer font-semibold transtion-all duration-500 hover:bg-blue-400 text-white w-8 h-8 grid place-items-center bg-gray-600 rounded-md">4</span>
                            </div>
                        </div>
                        }
                        {editArticle === "edit" && 
                            <div className="mt-10">
                               <CreatePost postData={postsData} />
                            </div>
                        }

                        {editArticle === "update" && 
                            <UpdatePost postId={postId} postData={postsData} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}