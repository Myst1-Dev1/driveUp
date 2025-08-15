'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChartLine, FaSignOutAlt } from "react-icons/fa";
import { FaBars, FaBook, FaCar, FaUsers } from "react-icons/fa6";

export function SideBar() {
    const [openSideBar, setOpenSideBar] = useState(false);

    return (
        <div className="w-0 lg:w-60">
            <div className="py-4 px-5 cursor-pointer z-50 relative" onClick={() => setOpenSideBar(true)}>
                <FaBars className={`${openSideBar ? 'hidden' : 'block'} lg:hidden cursor-pointer transition-all duration-500 hover:text-blue-500`} />
            </div>
            <div className={`fixed z-40 top-0 ${openSideBar ? 'left-0' : '-left-full'} lg:left-0 max-w-60 w-full bg-[#242424] min-h-screen flex flex-col justify-between py-3 transition-all duration-500`}>
                <Image src="/images/logo-white.png" className="max-w-32 h-10 w-full object-cover" width={200} height={200} alt="logo" />
                <nav className="flex flex-col gap-3 text-white">
                    <Link href="/admin/panel" className="flex items-center gap-3 p-3 font-semibold text-sm transition-all duration-500 w-20 hover:bg-blue-600 hover:w-full"><FaChartLine className="text-blue-300 text-xl shrink-0" />Painel</Link>
                    <Link href="/admin/carsAdmin" className="flex items-center gap-3 p-3 font-semibold text-sm transition-all duration-500 w-20 hover:bg-blue-600 hover:w-full"><FaCar className="text-blue-300 text-xl shrink-0" />Carros</Link>
                    <Link href="/admin/blogAdmin" className="flex items-center gap-3 p-3 font-semibold text-sm transition-all duration-500 w-20 hover:bg-blue-600 hover:w-full"><FaBook className="text-blue-300 text-xl shrink-0" />Blog</Link>
                    <Link href="/admin/usersAdmin" className="flex items-center gap-3 p-3 font-semibold text-sm transition-all duration-500 w-20 hover:bg-blue-600 hover:w-full"><FaUsers className="text-blue-300 text-xl shrink-0" />Usuários</Link>
                </nav>
                <div className="flex items-center gap-3 p-3 font-semibold text-sm transition-all duration-500 hover:bg-blue-600 w-20 hover:w-full text-white cursor-pointer"><FaSignOutAlt className="text-blue-300 text-xl shrink-0" />Sair</div>
            </div>
        </div>
    )
}