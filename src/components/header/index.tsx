'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTimes, FaUserAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Modal } from "../modal";
import { parseCookies } from "nookies";
import { UserBox } from "./userBox";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formType, setFormType] = useState("signIn");
    const [isUserBoxOpen, setIsUserBoxOpen] = useState(false);

    const { "user-token": token } = parseCookies();

    useGSAP(() => {
        const tl = gsap.timeline({defaults: { duration: 0.7, stagger:0.3, ease: "power2.inOut" }});

        tl.fromTo(".logo", { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
        tl.fromTo(".nav-item", { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
        tl.fromTo(".user-box", { y: -100, opacity: 0 },{ y: 0, opacity: 1 });
        tl.fromTo(".bars", { y: -100, opacity: 0 },{ y: 0, opacity: 1 });
        tl.fromTo(".login-btn", { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
    }, []);

    useGSAP(() => {
        gsap.fromTo(".nav-item", {opacity: 0, x:-50 }, { opacity: 1, x:0, duration: 0.6, stagger: 0.3, ease: "power2.inOut" });
    },[isMobileMenuOpen]);

    return (
        <>
            <header className="container py-6 flex justify-between items-center w-full absolute top-0 left-0 right-0">
                <Image className="logo w-40 h-10 object-cover" src="/images/logo-dark.png" width={200} height={200} alt="logo" />
                <div className={`flex flex-col lg:flex-row gap-5 items-center transition-all duration-500 lg:max-w-md w-full lg:relative lg:bg-transparent justify-center lg:justify-normal z-50 bg-white fixed top-0 lg:left-0 ${isMobileMenuOpen ? 'left-0' : '-left-full'} right-0 h-full`}>
                    <nav className="flex justify-center lg:justify-normal items-center flex-col lg:flex-row gap-4 w-full">
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="nav-item font-medium transition-all duration-500 hover:text-blue-600" href="/">Home</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="nav-item font-medium transition-all duration-500 hover:text-blue-600" href="/woWeAre">Quem somos</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="nav-item font-medium transition-all duration-500 hover:text-blue-600" href="/services">Serviços</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="nav-item font-medium transition-all duration-500 hover:text-blue-600" href="/contact">Contato</Link>
                    </nav>
                    
                    <div onClick={() => setIsMobileMenuOpen(false)}  className="w-6 h-6 rounded-full bg-zinc-600 text-white lg:hidden absolute top-5 right-6 cursor-pointer transition-all duration-500 grid place-items-center hover:bg-blue-700">
                        <FaTimes className="text-xs" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FaBars onClick={() => setIsMobileMenuOpen(true)} className="bars block lg:hidden cursor-pointer transition-all duration-500 hover:text-blue-600" />
                    
                    {token
                    ?
                        <div onClick={() => setIsUserBoxOpen(!isUserBoxOpen)} className="user-box cursor-pointer w-12 h-12 aspect-square bg-black text-white rounded-full grid place-items-center">
                            <FaUserAlt />
                        </div>
                    : <button onClick={() => { setIsModalOpen(true); setFormType("signIn") }} className="login-btn bg-zinc-800 text-white rounded-xl max-w-24 w-full p-3 cursor-pointer transition-all duration-500 hover:bg-blue-600">Login</button>
                    }
                </div>
            </header>
            <Modal maxWidth="max-w-md" isOpenModal={isModalOpen} setIsOpenModal={setIsModalOpen}>
                <div className="py-4">
                    <Image className="w-40 h-10 object-cover block mx-auto" src="/images/logo-dark.png" width={200} height={200} alt="logo" />
                    {formType === "signIn" ?
                    <SignIn formType = {formType} setFormType = {setFormType} setIsModalOpen = {setIsModalOpen} />
                    :
                    <SignUp formType = {formType} setFormType = {setFormType} />
                    }
                </div>
            </Modal>
            {isUserBoxOpen && <UserBox isUserBoxOpen = {isUserBoxOpen} closeUserBox = { setIsUserBoxOpen } />}
        </>
    )
}