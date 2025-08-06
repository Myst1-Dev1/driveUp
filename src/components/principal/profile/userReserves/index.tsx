import Image from "next/image";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";

export function UserReserves() {
    return (
        <>
            <div className="grid grid-cols-1 overflow-y-auto h-full scrollDontShow lg:h-[420px] 2xl:grid-cols-2 gap-5">
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
                        <div className="flex gap-5 w-full mt-3">
                            <button className="lg:max-w-28 w-full h-10 rounded-lg bg-black text-white flex items-center gap-3 p-2 cursor-pointer transition-all duration-500 hover:bg-blue-400">Contato <FaPhoneAlt /></button>
                            <button className="lg:max-w-60 w-full h-10 rounded-lg bg-red-600 text-white flex items-center gap-3 p-2 cursor-pointer transition-all duration-500 hover:bg-blue-400">Cancelar <FaTimes /></button>
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
                        <div className="flex gap-5 w-full mt-3">
                            <button className="lg:max-w-28 w-full h-10 rounded-lg bg-black text-white flex items-center gap-3 p-2 cursor-pointer transition-all duration-500 hover:bg-blue-400">Contato <FaPhoneAlt /></button>
                            <button className="lg:max-w-60 w-full h-10 rounded-lg bg-red-600 text-white flex items-center gap-3 p-2 cursor-pointer transition-all duration-500 hover:bg-blue-400">Cancelar <FaTimes /></button>
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
                        <div className="flex gap-5 w-full mt-3">
                            <button className="lg:max-w-28 w-full h-10 rounded-lg bg-black text-white flex items-center gap-3 p-2 cursor-pointer transition-all duration-500 hover:bg-blue-400">Contato <FaPhoneAlt /></button>
                            <button className="lg:max-w-60 w-full h-10 rounded-lg bg-red-600 text-white flex items-center gap-3 p-2 cursor-pointer transition-all duration-500 hover:bg-blue-400">Cancelar <FaTimes /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}