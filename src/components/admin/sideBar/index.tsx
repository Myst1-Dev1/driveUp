import Image from "next/image";
import Link from "next/link";
import { FaChartLine, FaSignOutAlt } from "react-icons/fa";
import { FaBook, FaCar, FaUsers } from "react-icons/fa6";

export function SideBar() {
    return (
        <div className="w-60">
            <div className="fixed top-0 left-0 right-0 max-w-60 w-full bg-[#242424] min-h-screen flex flex-col justify-between py-3">
                <Image src="/images/logo-white.png" className="max-w-32 h-10 w-full object-cover" width={200} height={200} alt="logo" />
                <nav className="flex flex-col gap-3 text-white">
                    <Link href="" className="flex items-center gap-3 p-3 font-semibold text-sm transition-all duration-500 w-20 hover:bg-blue-600 hover:w-full"><FaChartLine className="text-blue-300 text-xl shrink-0" />Painel</Link>
                    <Link href="" className="flex items-center gap-3 p-3 font-semibold text-sm transition-all duration-500 w-20 hover:bg-blue-600 hover:w-full"><FaCar className="text-blue-300 text-xl shrink-0" />Carros</Link>
                    <Link href="" className="flex items-center gap-3 p-3 font-semibold text-sm transition-all duration-500 w-20 hover:bg-blue-600 hover:w-full"><FaBook className="text-blue-300 text-xl shrink-0" />Blog</Link>
                    <Link href="" className="flex items-center gap-3 p-3 font-semibold text-sm transition-all duration-500 w-20 hover:bg-blue-600 hover:w-full"><FaUsers className="text-blue-300 text-xl shrink-0" />Usuários</Link>
                </nav>
                <div className="flex items-center gap-3 p-3 font-semibold text-sm transition-all duration-500 hover:bg-blue-600 w-20 hover:w-full text-white cursor-pointer"><FaSignOutAlt className="text-blue-300 text-xl shrink-0" />Sair</div>
            </div>
        </div>
    )
}