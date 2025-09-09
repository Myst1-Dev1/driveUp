import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export function Footer() {
    return (
        <>
            <footer className="w-full mt-20">
                <div className="container py-8 flex justify-center items-center flex-col">
                    <div className="flex flex-col max-w-80 w-full">
                        <Image className="w-full max-w-32 h-16 object-cover m-auto" src="/images/blog-logo.png" width={200} height={100} alt="versão branca da logo" />
                        <p className="font-normal text-sm text-center">Somos uma locadora de veículos comprometida com sua mobilidade. Alugue de forma rápida, prática e com total confiança.</p>
                        <div className="flex gap-4 justify-center mt-4">
                            <div className="w-10 h-10 border border-gray-200 transition-all duration-500 hover:border-transparent hover:bg-blue-400 cursor-pointer hover:text-white rounded-full grid place-items-center">
                                <FaFacebookF />
                            </div>
                            <div className="w-10 h-10 border border-gray-200 transition-all duration-500 hover:border-transparent hover:bg-blue-400 cursor-pointer hover:text-white rounded-full grid place-items-center">
                                <FaInstagram />
                            </div>
                            <div className="w-10 h-10 border border-gray-200 transition-all duration-500 hover:border-transparent hover:bg-blue-400 cursor-pointer hover:text-white rounded-full grid place-items-center">
                                <FaTwitter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-t-blue-100 py-6">
                    <p className="text-center font-medium">Desenvolvido com ❤️ por <Link href="https://www.mystdev.com.br/" target="_blank" rel="noopener noreferrer" className="text-blue-100">Myst1 Dev</Link></p>
                </div>
            </footer>
        </>
    )
}