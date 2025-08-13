'use client';

import { AdminHeader } from "@/components/admin/adminHeader";
import { SideBar } from "@/components/admin/sideBar";
import { useState } from "react";
import { FaCalendarAlt, FaCloudUploadAlt, FaPlus } from "react-icons/fa";

export default function BlogAdmin() {
    const [editArticle, setEditArticle] = useState("view");

    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <AdminHeader />
                    <div className="py-8 px-8">
                        <div className="flex justify-between items-center w-full">
                            <h2 className="font-bold text-xl">Artigos</h2>
                            <button className="bg-blue-500 text-white p-3 rounded-lg max-w-40 w-full font-semibold cursor-pointer transition-all duration-500 hover:brightness-90">Criar Artigo</button>
                        </div>
                        {editArticle === "view" &&
                        <div>
                            <div className="mt-10 flex flex-col gap-4">
                                <div className="flex flex-col p-3 border border-gray-300 rounded-md w-full transition-all duration-500 cursor-pointer group hover:bg-blue-400">
                                    <h3 className="text-blue-600 font-semibold group-hover:text-white">Uma nova geração de carros</h3>
                                    <p className="text-gray-400 font-light text-sm group-hover:text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, atque voluptatem. Quisquam veritatis sequi facere nesciunt inventore labore quia culpa pariatur, delectus repellat eveniet molestias. Corrupti aspernatur in ab at?</p>
                                    <span className="mt-3 flex items-center gap-2 text-gray-400 text-xs group-hover:text-white font-light"><FaCalendarAlt className="text-sm" /> 07/08/2024</span>
                                </div>
                                <div className="flex flex-col p-3 border border-gray-300 rounded-md w-full transition-all duration-500 cursor-pointer group hover:bg-blue-400">
                                    <h3 className="text-blue-600 font-semibold group-hover:text-white">Uma nova geração de carros</h3>
                                    <p className="text-gray-400 font-light text-sm group-hover:text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, atque voluptatem. Quisquam veritatis sequi facere nesciunt inventore labore quia culpa pariatur, delectus repellat eveniet molestias. Corrupti aspernatur in ab at?</p>
                                    <span className="mt-3 flex items-center gap-2 text-gray-400 text-xs group-hover:text-white font-light"><FaCalendarAlt className="text-sm" /> 07/08/2024</span>
                                </div>
                                <div className="flex flex-col p-3 border border-gray-300 rounded-md w-full transition-all duration-500 cursor-pointer group hover:bg-blue-400">
                                    <h3 className="text-blue-600 font-semibold group-hover:text-white">Uma nova geração de carros</h3>
                                    <p className="text-gray-400 font-light text-sm group-hover:text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, atque voluptatem. Quisquam veritatis sequi facere nesciunt inventore labore quia culpa pariatur, delectus repellat eveniet molestias. Corrupti aspernatur in ab at?</p>
                                    <span className="mt-3 flex items-center gap-2 text-gray-400 text-xs group-hover:text-white font-light"><FaCalendarAlt className="text-sm" /> 07/08/2024</span>
                                </div>
                                <div className="flex flex-col p-3 border border-gray-300 rounded-md w-full transition-all duration-500 cursor-pointer group hover:bg-blue-400">
                                    <h3 className="text-blue-600 font-semibold group-hover:text-white">Uma nova geração de carros</h3>
                                    <p className="text-gray-400 font-light text-sm group-hover:text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, atque voluptatem. Quisquam veritatis sequi facere nesciunt inventore labore quia culpa pariatur, delectus repellat eveniet molestias. Corrupti aspernatur in ab at?</p>
                                    <span className="mt-3 flex items-center gap-2 text-gray-400 text-xs group-hover:text-white font-light"><FaCalendarAlt className="text-sm" /> 07/08/2024</span>
                                </div>
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
                               <form action="" className="max-w-md w-full flex flex-col gap-4">
                                    <div className="bg-zinc-200 rounded-md h-40 grid place-items-center w-full">
                                        <label htmlFor="uploadImg"><FaCloudUploadAlt className="text-3xl cursor-pointer" /></label>
                                        <input type="file" id="uploadImg" className="hidden" />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label htmlFor="title" className="font-semibold">Titulo do artigo</label>
                                        <input type="text" className="input" placeholder="Um incrivel carro voador" />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label htmlFor="title" className="font-semibold">Categorias do artigo</label>
                                        <select className="input text-gray-400">
                                            <option value="Inovação">Inovação</option>
                                            <option value="Técnologia">Técnologia</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label htmlFor="description" className="font-semibold">Descrição do artigo</label>
                                        <textarea className="input h-40 resize-none" id="description" placeholder="Um incrivel carro voador muito bom" />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label htmlFor="relative-articles" className="font-semibold">Artigos relacionados</label>
                                        <div className="bg-zinc-200 grid place-items-center rounded-md w-12 h-12 cursor-pointer">
                                            <FaPlus className="text-2xl" />
                                        </div>
                                    </div>
                                    <button className="block mx-auto bg-blue-500 p-3 max-w-48 w-full font-semibold rounded-lg text-white transition-all duration-500 cursor-pointer hover:brightness-75">Enviar</button>
                               </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}