'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useActionState } from "react";
import { FaTimes, FaUserAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Modal } from "../modal";
import { signInAction } from "@/actions/signActions";
import { parseCookies } from "nookies";
import { UserBox } from "./userBox";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formType, setFormType] = useState("signIn");
    const [isUserBoxOpen, setIsUserBoxOpen] = useState(false);

    const [formState, formAction] = useActionState(signInAction, { success: false });

    const { "user-token": token } = parseCookies();

    console.log(token);

    return (
        <>
            <header className="container py-6 flex justify-between items-center w-full absolute top-0 left-0 right-0">
                <Image className="w-40 h-10 object-cover" src="/images/logo-dark.png" width={200} height={200} alt="logo" />
                <div className={`flex flex-col lg:flex-row gap-5 items-center transition-all duration-500 lg:max-w-md w-full lg:relative lg:bg-transparent justify-center lg:justify-normal z-20 bg-white fixed top-0 lg:left-0 ${isMobileMenuOpen ? 'left-0' : '-left-full'} right-0 h-full`}>
                    <nav className="flex justify-center lg:justify-normal items-center flex-col lg:flex-row gap-4 w-full">
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="font-medium transition-all duration-500 hover:text-blue-600" href="/">Home</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="font-medium transition-all duration-500 hover:text-blue-600" href="/woWeAre">Quem somos</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="font-medium transition-all duration-500 hover:text-blue-600" href="/services">Serviços</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="font-medium transition-all duration-500 hover:text-blue-600" href="/contact">Contato</Link>
                    </nav>
                    
                    <div onClick={() => setIsMobileMenuOpen(false)}  className="w-6 h-6 rounded-full bg-zinc-600 text-white lg:hidden absolute top-5 right-6 cursor-pointer transition-all duration-500 grid place-items-center hover:bg-blue-700">
                        <FaTimes className="text-xs" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {token
                    ?
                        <div onClick={() => setIsUserBoxOpen(!isUserBoxOpen)} className="cursor-pointer w-12 h-12 aspect-square bg-black text-white rounded-full grid place-items-center">
                            <FaUserAlt />
                        </div>
                    : <button onClick={() => { setIsModalOpen(true); setFormType("signIn") }} className="bg-zinc-800 text-white rounded-xl max-w-20 w-full p-2 cursor-pointer transition-all duration-500 hover:bg-blue-600">Login</button>
                    }
                    <FaBars onClick={() => setIsMobileMenuOpen(true)} className="block lg:hidden cursor-pointer transition-all duration-500 hover:text-blue-600" />
                </div>
            </header>
            <Modal maxWidth="max-w-md" isOpenModal={isModalOpen} setIsOpenModal={setIsModalOpen}>
                <div className="py-4">
                    <Image className="w-40 h-10 object-cover block mx-auto" src="/images/logo-dark.png" width={200} height={200} alt="logo" />
                    {formType === "signIn" ?
                    <div>
                        <h2 className="font-semibold text-center text-xl mt-5">Bem vindo</h2>
                        <form action={formAction} className="mt-5">
                            <input className="mb-5 input" name="email" type="email" placeholder="Email" />
                            <input className="input" name="password" type="password" placeholder="Senha" />
                            <span className="font-light text-center block text-sm mt-3">Não possui uma conta? <span onClick={() => setFormType("signUp")} className="text-blue-400 font-medium cursor-pointer transition-all duration-500 hover:text-blue-600">Cadastro</span></span>
                            {formState.message && (
                                <p className="text-red-500 text-sm text-center mt-2">{formState.message}</p>
                            )}
                            <button className="font-semibold p-3 w-full rounded-lg bg-black text-white cursor-pointer transition-all duration-500 mt-5 text-xl hover:bg-blue-400">Entrar</button>
                        </form>
                    </div>
                    :
                    <div>
                        <h2 className="font-semibold text-center text-xl mt-5">Criar conta</h2>
                        <form action="" className="mt-5">
                            <div className="flex flex-col lg:flex-row gap-4 mb-0 lg:mb-5">
                                <input className="input" type="text" placeholder="Nome" />
                                <input className="input mb-4 lg:mb-0" type="email" placeholder="Email" />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <input className="input" type="password" placeholder="Senha" />
                                <input className="input" type="password" placeholder="Confirme a senha" />
                            </div>
                            <span className="font-light text-center block text-sm mt-3">Já possui uma conta? <span onClick={() => setFormType("signIn")} className="text-blue-400 font-medium cursor-pointer transition-all duration-500 hover:text-blue-600">Entrar</span></span>
                            <button className="font-semibold p-3 w-full rounded-lg bg-black text-white cursor-pointer transition-all duration-500 mt-5 text-xl hover:bg-blue-400">Cadastrar</button>
                        </form>
                    </div>
                    }
                </div>
            </Modal>
            {isUserBoxOpen && <UserBox closeUserBox = { setIsUserBoxOpen } />}
        </>
    )
}