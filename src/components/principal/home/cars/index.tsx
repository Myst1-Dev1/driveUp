import Image from "next/image";
import Link from "next/link";
import { FaGasPump, FaLifeRing, FaRegHeart, FaUsers } from "react-icons/fa";

export function Cars() {
    return (
        <>
            <div className="container py-8 mt-20">
                <h2 className="text-center text-xl font-bold">Os Melhores Carros para Alugar</h2>
                <div className="mt-16 grid place-items-center m-auto grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-0">
                    <Link href="/car/1" className="max-w-72 w-full p-3 rounded-lg bg-[#fff] flex flex-col gap-3">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold">Koenigsegg</h3>
                                <h4 className="text-[#848484] font-light text-sm">Sport</h4>
                            </div>
                            <FaRegHeart className="text-gray-500 transition-all duration-500 cursor-pointer hover:text-blue-600" />
                        </div>
                        <Image className="max-w-80 m-auto w-full object-cover" src="/images/car.png" width={300} height={100} alt="foto do carro" />
                        <div className="w-full flex justify-between">
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaGasPump /> <span className="text-sm">90L</span>
                            </div>
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaLifeRing /> <span className="text-sm">Manual</span>
                            </div>
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaUsers /> <span className="text-sm">5 Assentos</span>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <h5 className="font-bold text-[18px]">R$:250,00/ <span className="text-[#848484] font-light text-sm">Diária</span></h5>
                            <button className="bg-[#3E5EF0] text-white rounded-full max-w-20 w-full px-1 py-2 cursor-pointer transition-all duration-500 hover:bg-blue-700">Alugar</button>
                        </div>
                    </Link>
                    <Link href="/car/1" className="max-w-72 w-full p-3 rounded-lg bg-[#fff] flex flex-col gap-3">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold">Koenigsegg</h3>
                                <h4 className="text-[#848484] font-light text-sm">Sport</h4>
                            </div>
                            <FaRegHeart className="text-gray-500 transition-all duration-500 cursor-pointer hover:text-blue-600" />
                        </div>
                        <Image className="max-w-80 m-auto w-full object-cover" src="/images/car.png" width={300} height={100} alt="foto do carro" />
                        <div className="w-full flex justify-between">
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaGasPump /> <span className="text-sm">90L</span>
                            </div>
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaLifeRing /> <span className="text-sm">Manual</span>
                            </div>
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaUsers /> <span className="text-sm">5 Assentos</span>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <h5 className="font-bold text-[18px]">R$:250,00/ <span className="text-[#848484] font-light text-sm">Diária</span></h5>
                            <button className="bg-[#3E5EF0] text-white rounded-full max-w-20 w-full px-1 py-2 cursor-pointer transition-all duration-500 hover:bg-blue-700">Alugar</button>
                        </div>
                    </Link>
                    <Link href="/car/1" className="max-w-72 w-full p-3 rounded-lg bg-[#fff] flex flex-col gap-3">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold">Koenigsegg</h3>
                                <h4 className="text-[#848484] font-light text-sm">Sport</h4>
                            </div>
                            <FaRegHeart className="text-gray-500 transition-all duration-500 cursor-pointer hover:text-blue-600" />
                        </div>
                        <Image className="max-w-80 m-auto w-full object-cover" src="/images/car.png" width={300} height={100} alt="foto do carro" />
                        <div className="w-full flex justify-between">
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaGasPump /> <span className="text-sm">90L</span>
                            </div>
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaLifeRing /> <span className="text-sm">Manual</span>
                            </div>
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaUsers /> <span className="text-sm">5 Assentos</span>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <h5 className="font-bold text-[18px]">R$:250,00/ <span className="text-[#848484] font-light text-sm">Diária</span></h5>
                            <button className="bg-[#3E5EF0] text-white rounded-full max-w-20 w-full px-1 py-2 cursor-pointer transition-all duration-500 hover:bg-blue-700">Alugar</button>
                        </div>
                    </Link>
                    <Link href="/car/1" className="max-w-72 w-full p-3 rounded-lg bg-[#fff] flex flex-col gap-3">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold">Koenigsegg</h3>
                                <h4 className="text-[#848484] font-light text-sm">Sport</h4>
                            </div>
                            <FaRegHeart className="text-gray-500 transition-all duration-500 cursor-pointer hover:text-blue-600" />
                        </div>
                        <Image className="max-w-80 m-auto w-full object-cover" src="/images/car.png" width={300} height={100} alt="foto do carro" />
                        <div className="w-full flex justify-between">
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaGasPump /> <span className="text-sm">90L</span>
                            </div>
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaLifeRing /> <span className="text-sm">Manual</span>
                            </div>
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaUsers /> <span className="text-sm">5 Assentos</span>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <h5 className="font-bold text-[18px]">R$:250,00/ <span className="text-[#848484] font-light text-sm">Diária</span></h5>
                            <button className="bg-[#3E5EF0] text-white rounded-full max-w-20 w-full px-1 py-2 cursor-pointer transition-all duration-500 hover:bg-blue-700">Alugar</button>
                        </div>
                    </Link>
                </div>
                <button className="mt-8 block mx-auto cursor-pointer max-w-40 bg-black text-white rounded-2xl font-semibold p-3 transition-all duration-500 hover:bg-blue-600">Ver mais</button>
            </div>
        </>
    )
}