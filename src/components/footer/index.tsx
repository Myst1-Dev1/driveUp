import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaPhone, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaMapLocationDot } from "react-icons/fa6";

export function Footer() {
    return (
        <>
            <footer className="bg-[#15191F] w-full mt-20">
                <div className="container py-8 flex justify-center lg:justify-between items-center gap-8 lg:gap-0 flex-col lg:flex-row">
                    <div className="flex flex-col max-w-80 w-full">
                        <Image className="w-full max-w-32 h-16 object-cover m-auto" src="/images/logo-white.png" width={200} height={100} alt="versão branca da logo" />
                        <p className="text-[#fafafb] font-normal text-sm text-center">Somos uma locadora de veículos comprometida com sua mobilidade. Alugue de forma rápida, prática e com total confiança.</p>
                        <div className="flex gap-4 justify-center mt-4">
                            <div className="w-10 h-10 text-white border border-white rounded-full grid place-items-center">
                                <FaFacebookF />
                            </div>
                            <div className="w-10 h-10 text-white border border-white rounded-full grid place-items-center">
                                <FaInstagram />
                            </div>
                            <div className="w-10 h-10 text-white border border-white rounded-full grid place-items-center">
                                <FaTwitter />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 max-w-80 w-full lg:text-left items-center lg:items-start">
                        <Link href="" className="text-[#DBEAFE] text-sm transition-all duration-500 hover:text-blue-400">Politica de privacidade</Link>
                        <Link href="" className="text-[#DBEAFE] text-sm transition-all duration-500 hover:text-blue-400">Política de Devolução</Link>
                        <Link href="" className="text-[#DBEAFE] text-sm transition-all duration-500 hover:text-blue-400">Termos e Condições de Uso</Link>
                        <Link href="" className="text-[#DBEAFE] text-sm transition-all duration-500 hover:text-blue-400">Formas de pagamento</Link>
                        <Link href="" className="text-[#DBEAFE] text-sm transition-all duration-500 hover:text-blue-400">Segurança e proteção de dados</Link>
                    </div>
                    <div className="max-w-80 w-full">
                        <h4 className="text-white font-semibold">Contato</h4>
                        <div className="flex flex-col gap-3 mt-3">
                            <div className="text-[#DBEAFE] flex items-center gap-3 text-sm">
                                <FaPhone className="text-white" />
                                +55 021 40028922
                            </div>
                            <div className="text-[#DBEAFE] flex items-center gap-3 text-sm">
                                <FaEnvelope className="text-white" />
                                driveUp@business.com.br
                            </div>
                            <div className="text-[#DBEAFE] flex items-center gap-3 text-sm">
                                <FaMapLocationDot className="text-white" />
                                Av São Loren, 129, Rua do Porto John
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container w-full py-6 flex justify-center gap-4 lg:gap-0 lg:justify-between flex-col lg:flex-row">
                    <p className="text-[#DFE5F6] font-semibold">@2025 DriveUp, todos os direitos reservados</p>
                    <div className="text-white flex gap-4 flex-col lg:flex-row">
                        <Link href="/" className="font-medium text-sm transition-all duration-500 hover:text-blue-400">Home</Link>
                        <Link href="/woWeAre" className="font-medium text-sm transition-all duration-500 hover:text-blue-400">Quem Somos</Link>
                        <Link href="/services" className="font-medium text-sm transition-all duration-500 hover:text-blue-400">Serviços</Link>
                        <Link href="contact" className="font-medium text-sm transition-all duration-500 hover:text-blue-400">Contato</Link>
                    </div>
                </div>
                <div className="border border-t-blue-100 py-6">
                    <p className="text-white text-center font-medium">Desenvolvido com ❤️ por <Link href="https://www.mystdev.com.br/" target="_blank" rel="noopener noreferrer" className="text-blue-200">Myst1 Dev</Link></p>
                </div>
            </footer>
        </>
    )
}