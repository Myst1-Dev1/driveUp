import { AdminHeader } from "@/components/admin/adminHeader";
import { SideBar } from "@/components/admin/sideBar";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import { FaAddressCard, FaBuilding, FaCalendar, FaPhone } from "react-icons/fa6";

export default function AdminProfileUser() {
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <AdminHeader />
                    <div className="py-8 px-8">
                        <div className="flex items-center gap-10">
                            <Image src="/images/user.jpg" className="w-24 h-24 object-cover rounded-full aspect-square" width={200} height={200} alt="foto  do usuário" />
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Jane Doe</h3>
                                <div className="grid grid-cols-2 max-w-96 gap-3">
                                    <span className="flex items-center gap-3 text-gray-400 text-sm"><FaEnvelope /> jane@gmail.com</span>
                                    <span className="flex items-center gap-3 text-gray-400 text-sm"><FaAddressCard /> 123.445.789-00</span>
                                    <span className="flex items-center gap-3 text-gray-400 text-sm"><FaPhone /> 21 9 99444 8909</span>
                                    <span className="flex items-center gap-3 text-gray-400 text-sm"><FaBuilding /> Rua John Lorem</span>
                                    <span className="flex items-center gap-3 text-gray-400 text-sm"><FaCalendar /> 22/08/1990</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h2 className="font-bold text-xl">Alugado no momento</h2>
                            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 place-items-center">
                                <div className="flex flex-col lg:flex-row items-center gap-5 border border-gray-300 rounded-lg p-3 lg:max-w-[500px] w-full">
                                    <Image className="w-52 object-cover" src="/images/car.png" width={200} height={200} alt="foto do carro reservado" />
                                    <div className="flex flex-col">
                                        <h5 className="font-semibold text-xl">Koenigsegg</h5>
                                        <span className="font-light text-gray-500">Sport</span>
                                        <div className="flex gap-5 w-full mt-3">
                                            <div className="flex flex-col gap-2">
                                                <h6>Retirada</h6>
                                                <h6>23/09/2024</h6>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h6>Devolução</h6>
                                                <h6>29/09/2024</h6>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row items-center gap-5 border border-gray-300 rounded-lg p-3 lg:max-w-[500px] w-full">
                                    <Image className="w-52 object-cover" src="/images/car.png" width={200} height={200} alt="foto do carro reservado" />
                                    <div className="flex flex-col">
                                        <h5 className="font-semibold text-xl">Koenigsegg</h5>
                                        <span className="font-light text-gray-500">Sport</span>
                                        <div className="flex gap-5 w-full mt-3">
                                            <div className="flex flex-col gap-2">
                                                <h6>Retirada</h6>
                                                <h6>23/09/2024</h6>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h6>Devolução</h6>
                                                <h6>29/09/2024</h6>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h2 className="font-bold text-xl">Histórico de alugueis</h2>
                            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 place-items-center">
                                <div className="flex flex-col lg:flex-row items-center gap-5 border border-gray-300 rounded-lg p-3 lg:max-w-[400px] w-full">
                                    <Image className="w-52 object-cover" src="/images/car.png" width={200} height={200} alt="foto do carro reservado" />
                                    <div className="flex flex-col">
                                        <h5 className="font-semibold text-xl">Koenigsegg</h5>
                                        <span className="font-light text-gray-500">Sport</span>   
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row items-center gap-5 border border-gray-300 rounded-lg p-3 lg:max-w-[400px] w-full">
                                    <Image className="w-52 object-cover" src="/images/car.png" width={200} height={200} alt="foto do carro reservado" />
                                    <div className="flex flex-col">
                                        <h5 className="font-semibold text-xl">Koenigsegg</h5>
                                        <span className="font-light text-gray-500">Sport</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}