'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="container py-6 flex justify-between w-full absolute top-0 left-0 right-0">
                <Image className="w-40 h-10 object-cover" src="/images/logo-dark.png" width={200} height={200} alt="logo" />
                <div className={`flex flex-col lg:flex-row gap-5 items-center transition-all duration-500 lg:max-w-md w-full lg:relative lg:bg-transparent justify-center lg:justify-normal z-20 bg-white fixed top-0 lg:left-0 ${isMobileMenuOpen ? 'left-0' : '-left-full'} right-0 h-full`}>
                    <nav className="flex justify-center items-center flex-col lg:flex-row gap-4 w-full">
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="font-medium transition-all duration-500 hover:text-blue-600" href="">Home</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="font-medium transition-all duration-500 hover:text-blue-600" href="">Quem somos</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="font-medium transition-all duration-500 hover:text-blue-600" href="">Serviços</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="font-medium transition-all duration-500 hover:text-blue-600" href="">Contato</Link>
                    </nav>
                    <button className="bg-zinc-800 text-white rounded-xl max-w-20 w-full p-2 cursor-pointer transition-all duration-500 hover:bg-blue-600">Login</button>
                    <div onClick={() => setIsMobileMenuOpen(false)}  className="w-6 h-6 rounded-full bg-zinc-600 text-white lg:hidden absolute top-5 right-6 cursor-pointer transition-all duration-500 grid place-items-center hover:bg-blue-700">
                        <FaTimes className="text-xs" />
                    </div>
                </div>
                <FaBars onClick={() => setIsMobileMenuOpen(true)} className="block lg:hidden cursor-pointer transition-all duration-500 hover:text-blue-600" />
            </header>
        </>
    )
}