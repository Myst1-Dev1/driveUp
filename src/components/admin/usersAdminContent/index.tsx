'use client';

import { Profile } from "@/@types/Profile";
import { AdminHeader } from "@/components/admin/adminHeader";
import { SideBar } from "@/components/admin/sideBar";
import { Pagination } from "@/components/pagination";
import Image from "next/image";
import Link from "next/link";
import { FaRetweet, FaTimes } from "react-icons/fa";
import { FaCheck, FaEye } from "react-icons/fa6";

interface usersAdminContentProps {
    profileData: Profile[];
}

export function UsersAdminContent({ profileData }:usersAdminContentProps) {
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <AdminHeader />
                    <div className="py-8 px-8">
                        <h2 className="font-bold text-xl">Usuários</h2>
                            <Pagination 
                                data={profileData}
                                itemsPerPage={6}
                                renderItem={(profile) => (
                                    <div key={profile.id} className="relative p-3 border border-gray-300 max-w-80 w-full rounded-md">
                                        <Link href={`/admin/usersAdmin/${profile.id}`} className="absolute top-2 right-2 rounded-full aspect-square cursor-pointer transition-all duration-500 hover:bg-blue-400 bg-black w-7 h-7 text-white grid place-items-center">
                                            <FaEye />
                                        </Link>
                                        <div className="flex items-center gap-3">
                                            <Image src={profile.avatarUrl || "/images/user.jpg"} className="w-10 h-10 object-cover rounded-full aspect-square" width={200} height={200} alt="foto do usuário" />
                                            <h4 className="font-semibold">{profile.fullName}</h4>
                                        </div>
                                        <div className="mt-8 flex flex-col gap-3">
                                            <h5 className="font-bold">Alugueis:</h5>
                                            <div className="flex items-center gap-2 ml-3">
                                                <span className="text-green-500 flex items-center">
                                                    <div className="mr-2 h-5 w-5 rounded-full bg-green-500 grid place-items-center text-white">
                                                        <FaCheck />
                                                    </div>
                                                    Ativos
                                                <span className="text-black">:</span></span>
                                                1
                                            </div>
                                            <div className="flex items-center gap-2 ml-3">
                                                <span className="text-blue-500 flex items-center">
                                                    <div className="mr-2 h-5 w-5 rounded-full bg-blue-500 grid place-items-center text-white">
                                                        <FaRetweet />
                                                    </div>
                                                    Retornos
                                                <span className="text-black">:</span></span>
                                                1
                                            </div>
                                            <div className="flex items-center gap-2 ml-3">
                                                <span className="text-red-600 flex items-center">
                                                    <div className="mr-2 h-5 w-5 rounded-full bg-red-600 grid place-items-center text-white">
                                                        <FaTimes />
                                                    </div>
                                                    Cancelados
                                                <span className="text-black">:</span></span>
                                                1
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                    </div>
                </div>
            </div>
        </>
    )
}