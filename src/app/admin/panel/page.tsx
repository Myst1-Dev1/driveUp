import { AdminHeader } from "@/components/admin/adminHeader";
import { SideBar } from "@/components/admin/sideBar";
import { FaCarSide, FaSignal } from "react-icons/fa";
import { FaDollarSign, FaUser } from "react-icons/fa6";

export default function Panel() {
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <AdminHeader />

                    <div className="py-8 px-5">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0">
                            <div className="bg-white p-3 max-w-60 w-full rounded-md flex items-center gap-5 transition-all duration-500 hover:bg-blue-500 hover:text-white">
                                <FaCarSide className="text-blue-700 text-4xl shrink-0" />
                                <div className="font-semibold m-auto flex justify-end items-end text-end flex-col gap-5">
                                    Aluguéis em andamento
                                    <span className="font-bold text-3xl">10</span>
                                </div>
                            </div>
                            <div className="bg-white p-3 max-w-60 w-full rounded-md flex items-center gap-5 transition-all duration-500 hover:bg-blue-500 hover:text-white">
                                <FaUser className="text-blue-700 text-4xl shrink-0" />
                                <div className="font-semibold m-auto flex justify-end items-end text-end flex-col gap-5">
                                    Usuários Cadastrados
                                    <span className="font-bold text-3xl">50</span>
                                </div>
                            </div>
                            <div className="bg-white p-3 max-w-60 w-full rounded-md flex items-center gap-5 transition-all duration-500 hover:bg-blue-500 hover:text-white">
                                <FaSignal className="text-blue-700 text-4xl shrink-0" />
                                <div className="font-semibold m-auto flex justify-end items-end text-end flex-col gap-5">
                                    Alugados Hoje
                                    <span className="font-bold text-3xl">10</span>
                                </div>
                            </div>
                            <div className="bg-white p-3 max-w-60 w-full rounded-md flex items-center gap-5 transition-all duration-500 hover:bg-blue-500 hover:text-white">
                                <FaDollarSign className="text-blue-700 text-4xl shrink-0" />
                                <div className="font-semibold m-auto flex justify-end items-end text-end flex-col gap-5">
                                    Lucro Total
                                    <span className="font-bold text-3xl">R$:42,000</span>
                                </div>
                            </div>
                        </div>
                        {/* Aqui abaixo o gráfico de vendas */}
                        
                    </div>
                </div>
            </div>
        </>
    )
}