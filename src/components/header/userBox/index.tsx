'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaCog, FaSignOutAlt, FaTimes, FaUserCircle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/services/store/hooks";
import { signOut } from "@/services/store/userSlice";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface UserBoxProps {
    isUserBoxOpen: boolean;
    closeUserBox:React.Dispatch<React.SetStateAction<boolean>>;
}

export function UserBox({ isUserBoxOpen, closeUserBox }: UserBoxProps) {
    const dispatch = useAppDispatch();
    const { data: user, status } = useAppSelector(s => s.user);

    // if (status === 'loading') return <p>Carregando...</p>;
    if (!user) return <p>Sem usuário.</p>;

    console.log(user);

    useGSAP(() => {
        gsap.fromTo(".user-box-content", { height: 0, opacity: 0 }, { height: '269px', opacity: 1, duration: 0.2, ease: "power1.inOut" });
    }, [isUserBoxOpen]);

    return (
        <>
            <div className="user-box-content absolute top-20 z-30 shadow-md shadow-gray-500 right-5 bg-white max-w-48 w-full rounded-xl">
                <div onClick={() => closeUserBox(false)} className="absolute top-2 right-2 cursor-pointer w-8 h-8 bg-black rounded-full grid place-items-center text-white transition-all duration-500 hover:bg-blue-400">
                    <FaTimes />
                </div>
                <div className="p-3 flex justify-center items-center flex-col gap-2">
                    <Image className="w-12 h-12 object-cover aspect-square rounded-full" src={user?.data[0].avatarUrl || "/images/user.jpg"} width={200} height={200} alt="foto do usuário" />
                    <h3 className="font-bold">{user?.data[0].fullName}</h3>
                    {/* <span className="text-gray-500 text-sm font-light">janedoe@gmail.com</span> */}
                </div>
                <div className="flex flex-col gap-2 py-3">
                    <Link href="/profile" className="px-3 flex items-center gap-3 text-sm transition-all duration-500 hover:bg-blue-400 hover:text-white">
                        <FaUserCircle />
                        Perfil
                    </Link>
                    <Link href="" className="px-3 flex items-center gap-3 text-sm transition-all duration-500 hover:bg-blue-400 hover:text-white">
                        <FaClock />
                        Histórico de reservas
                    </Link>
                    <Link href="" className="px-3 flex items-center gap-3 text-sm transition-all duration-500 hover:bg-blue-400 hover:text-white">
                        <FaCog />
                        Configurações
                    </Link>
                </div>
                <div className="border-t border-gray-300 py-3">
                    <div onClick={() => {dispatch(signOut()); closeUserBox(false);}} className="cursor-pointer px-3 text-sm flex gap-3 items-center transition-all duration-500 hover:bg-blue-400 hover:text-white">
                        <FaSignOutAlt /> Sair
                    </div>
                </div>
            </div>
        </>
    )
}