'use client';

import { AdminHeader } from "@/components/admin/adminHeader";
import { CarModal } from "@/components/admin/carModal";
import { SideBar } from "@/components/admin/sideBar";
import Image from "next/image";
import { useState } from "react";
import { FaGasPump, FaLifeRing, FaPencilAlt, FaSearch, FaTrashAlt, FaUsers } from "react-icons/fa";

export default function CarsAdmin() {
    const [isCarModalOpen, setIsCarModalOpen] = useState(false);
    
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <AdminHeader />
                    <div className="py-8 px-8">
                        <h2 className="font-bold text-xl">Carros</h2>
                        <div className="mt-8 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-end lg:items-center">
                            <div className="lg:max-w-52 w-full rounded-lg border border-gray-300 flex items-center justify-between">
                                <input type="text" className="outline-none p-3 w-full" placeholder="Buscar Carro" />
                                <FaSearch className="mr-2 text-gray-700" />
                            </div>
                            <button onClick={() => setIsCarModalOpen(true)} className="bg-blue-500 text-white p-3 rounded-lg max-w-48 w-full font-semibold cursor-pointer transition-all duration-500 hover:brightness-90">Adicionar Carro +</button>
                        </div>
                        <div className="py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center">
                            <div className="max-w-72 w-full p-3 rounded-lg bg-[#fff] flex flex-col gap-3">
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold">Koenigsegg</h3>
                                    <h4 className="text-[#848484] font-light text-sm">Sport</h4>
                                </div>   
                                <Image className="max-w-80 m-auto w-full object-cover" src="/images/car.png" width={300} height={100} alt="foto do carro" />
                                <div className="w-full flex justify-between">
                                    <div className="text-[#848484] flex items-center gap-2">
                                        <FaGasPump /> <span className="text-sm">90L</span>
                                    </div>
                                    <div className="text-[#848484] flex items-center gap-2">
                                        <FaLifeRing /> <span className="text-sm">Manual</span>
                                    </div>
                                    <div className="text-[#848484] flex items-center gap-2">
                                        <FaUsers /> <span className="text-sm">5 Assentos</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <h5 className="font-bold text-[18px]">R$:250,00/ <span className="text-[#848484] font-light text-sm">Diária</span></h5>
                                    <div className="flex gap-4">
                                        <span className="w-7 h-7 rounded-md grid place-items-center text-white bg-green-500 text-sm transition-all duration-500 hover:brightness-90"><FaPencilAlt /></span>
                                        <span className="w-7 h-7 rounded-md grid place-items-center text-white bg-red-600 text-sm transition-all duration-500 hover:brightness-90"><FaTrashAlt /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-72 w-full p-3 rounded-lg bg-[#fff] flex flex-col gap-3">
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold">Koenigsegg</h3>
                                    <h4 className="text-[#848484] font-light text-sm">Sport</h4>
                                </div>   
                                <Image className="max-w-80 m-auto w-full object-cover" src="/images/car.png" width={300} height={100} alt="foto do carro" />
                                <div className="w-full flex justify-between">
                                    <div className="text-[#848484] flex items-center gap-2">
                                        <FaGasPump /> <span className="text-sm">90L</span>
                                    </div>
                                    <div className="text-[#848484] flex items-center gap-2">
                                        <FaLifeRing /> <span className="text-sm">Manual</span>
                                    </div>
                                    <div className="text-[#848484] flex items-center gap-2">
                                        <FaUsers /> <span className="text-sm">5 Assentos</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <h5 className="font-bold text-[18px]">R$:250,00/ <span className="text-[#848484] font-light text-sm">Diária</span></h5>
                                    <div className="flex gap-4">
                                        <span className="w-7 h-7 rounded-md grid place-items-center text-white bg-green-500 text-sm transition-all duration-500 hover:brightness-90"><FaPencilAlt /></span>
                                        <span className="w-7 h-7 rounded-md grid place-items-center text-white bg-red-600 text-sm transition-all duration-500 hover:brightness-90"><FaTrashAlt /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-72 w-full p-3 rounded-lg bg-[#fff] flex flex-col gap-3">
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold">Koenigsegg</h3>
                                    <h4 className="text-[#848484] font-light text-sm">Sport</h4>
                                </div>   
                                <Image className="max-w-80 m-auto w-full object-cover" src="/images/car.png" width={300} height={100} alt="foto do carro" />
                                <div className="w-full flex justify-between">
                                    <div className="text-[#848484] flex items-center gap-2">
                                        <FaGasPump /> <span className="text-sm">90L</span>
                                    </div>
                                    <div className="text-[#848484] flex items-center gap-2">
                                        <FaLifeRing /> <span className="text-sm">Manual</span>
                                    </div>
                                    <div className="text-[#848484] flex items-center gap-2">
                                        <FaUsers /> <span className="text-sm">5 Assentos</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <h5 className="font-bold text-[18px]">R$:250,00/ <span className="text-[#848484] font-light text-sm">Diária</span></h5>
                                    <div className="flex gap-4">
                                        <span className="w-7 h-7 rounded-md grid place-items-center text-white bg-green-500 text-sm transition-all duration-500 hover:brightness-90"><FaPencilAlt /></span>
                                        <span className="w-7 h-7 rounded-md grid place-items-center text-white bg-red-600 text-sm transition-all duration-500 hover:brightness-90"><FaTrashAlt /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-72 w-full p-3 rounded-lg bg-[#fff] flex flex-col gap-3">
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold">Koenigsegg</h3>
                                    <h4 className="text-[#848484] font-light text-sm">Sport</h4>
                                </div>   
                                <Image className="max-w-80 m-auto w-full object-cover" src="/images/car.png" width={300} height={100} alt="foto do carro" />
                                <div className="w-full flex justify-between">
                                    <div className="text-[#848484] flex items-center gap-2">
                                        <FaGasPump /> <span className="text-sm">90L</span>
                                    </div>
                                    <div className="text-[#848484] flex items-center gap-2">
                                        <FaLifeRing /> <span className="text-sm">Manual</span>
                                    </div>
                                    <div className="text-[#848484] flex items-center gap-2">
                                        <FaUsers /> <span className="text-sm">5 Assentos</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <h5 className="font-bold text-[18px]">R$:250,00/ <span className="text-[#848484] font-light text-sm">Diária</span></h5>
                                    <div className="flex gap-4">
                                        <span className="w-7 h-7 rounded-md grid place-items-center text-white bg-green-500 text-sm transition-all duration-500 hover:brightness-90"><FaPencilAlt /></span>
                                        <span className="w-7 h-7 rounded-md grid place-items-center text-white bg-red-600 text-sm transition-all duration-500 hover:brightness-90"><FaTrashAlt /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-end w-full gap-4 mt-8">
                            <span className="cursor-pointer font-semibold transtion-all duration-500 hover:bg-blue-400 text-white w-8 h-8 grid place-items-center bg-gray-600 rounded-md">1</span>
                            <span className="cursor-pointer font-semibold transtion-all duration-500 hover:bg-blue-400 text-white w-8 h-8 grid place-items-center bg-gray-600 rounded-md">2</span>
                            <span className="cursor-pointer font-semibold transtion-all duration-500 hover:bg-blue-400 text-white w-8 h-8 grid place-items-center bg-gray-600 rounded-md">...</span>
                            <span className="cursor-pointer font-semibold transtion-all duration-500 hover:bg-blue-400 text-white w-8 h-8 grid place-items-center bg-gray-600 rounded-md">4</span>
                        </div>
                    </div>
                </div>
            </div>
            <CarModal isOpenModal={isCarModalOpen} setIsOpenModal={setIsCarModalOpen} />
        </>
    )
}