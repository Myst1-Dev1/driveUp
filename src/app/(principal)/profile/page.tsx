'use client';

import { UserCards } from "@/components/principal/profile/userCards";
import { UserData } from "@/components/principal/profile/userData";
import Image from "next/image";
import { useState } from "react";
import { FaDollyFlatbed, FaEnvelopeOpen, FaStar, FaUserCog } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";

export default function Profile() {
    const [activeMenu, setActiveMenu] = useState("data");

    return (
        <>
            <div className="container py-12 mt-20 grid grid-cols-1 lg:grid-cols-3 lg:gap-0">
                <div className="mb-12 lg:mb-0 lg:max-w-60 w-full rounded-xl border border-gray-300">
                    <Image className="my-4 w-24 h-24 block mx-auto object-cover aspect-square rounded-full" src="/images/user.jpg" width={200} height={200} alt="foto do usuário" />
                    <h2 className="text-xl text-center font-bold">Jane Doe</h2>
                    <div className="mt-4 mb-2 flex flex-col gap-1">
                        <div onClick={() => setActiveMenu("data")} className={`cursor-pointer p-2 text-sm flex items-center gap-3 transition-all duration-500 ${activeMenu === 'data'? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white`}>
                            <FaUserCog className={`text-xl ${activeMenu === 'data' ? 'text-white' : 'text-blue-500'}`} />
                            Meus Dados
                        </div>
                        <div onClick={() => setActiveMenu("card")} className={`cursor-pointer p-2 text-sm flex items-center gap-3 transition-all duration-500 ${activeMenu === 'card'? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white`}>
                            <FaCreditCard className={`text-xl ${activeMenu === 'card' ? 'text-white' : 'text-blue-500'}`} />
                            Meus Cartões
                        </div>
                        <div onClick={() => setActiveMenu("transaction")} className={`cursor-pointer p-2 text-sm flex items-center gap-3 transition-all duration-500 ${activeMenu === 'transaction'? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white`}>
                            <FaDollyFlatbed className={`text-xl ${activeMenu === 'transaction' ? 'text-white' : 'text-blue-500'}`} />
                            Minhas Transações
                        </div>
                        <div onClick={() => setActiveMenu("reserve")} className={`cursor-pointer p-2 text-sm flex items-center gap-3 transition-all duration-500 ${activeMenu === 'reserve'? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white`}>
                            <FaEnvelopeOpen className={`text-xl ${activeMenu === 'reserve' ? 'text-white' : 'text-blue-500'}`} />
                            Minha Reservas
                        </div>
                        <div onClick={() => setActiveMenu("favorite")} className={`cursor-pointer p-2 text-sm flex items-center gap-3 transition-all duration-500 ${activeMenu === 'favorite'? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white`}>
                            <FaStar className={`text-xl ${activeMenu === 'favorite' ? 'text-white' : 'text-blue-500'}`} />
                            Meus Favoritos
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    {activeMenu === 'data' && <UserData />}
                    {activeMenu === 'card' && <UserCards />}
                </div>
            </div>
        </>
    )
}