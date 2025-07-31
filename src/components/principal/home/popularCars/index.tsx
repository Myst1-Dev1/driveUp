import Image from "next/image";
import { FaGasPump, FaHeart, FaLifeRing, FaUsers } from "react-icons/fa";

export function PopularCars() {
    return (
        <>
            <div className="container -mt-10">
                <div className="flex justify-between items-center flex-col lg:flex-row gap-5 lg:gap-0">
                    <h2 className="font-bold text-xl">Nossos Carros Populares</h2>
                    <p className="font-light text-[#848484] text-xs max-w-80 w-full">Aproveite ofertas exclusivas e os melhores preços para pacotes de viagem incríveis. Oferecemos o melhor custo-benefício para cada aventura.</p>
                </div>
                <div className="mt-12 m-auto place-items-center grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-3">
                    <div className="max-w-96 w-full p-3 rounded-lg bg-[#DFE5F6] flex flex-col gap-3">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold">Koenigsegg</h3>
                                <h4 className="text-[#848484] font-light text-sm">Sport</h4>
                            </div>
                            <FaHeart className="text-gray-500 transition-all duration-500 cursor-pointer hover:text-blue-600" />
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
                    </div>
                    <div className="max-w-96 w-full p-3 rounded-lg bg-[#DFE5F6] flex flex-col gap-3">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold">Koenigsegg</h3>
                                <h4 className="text-[#848484] font-light text-sm">Sport</h4>
                            </div>
                            <FaHeart className="text-gray-500 transition-all duration-500 cursor-pointer hover:text-blue-600" />
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
                    </div>
                    <div className="max-w-96 w-full p-3 rounded-lg bg-[#DFE5F6] flex flex-col gap-3">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold">Koenigsegg</h3>
                                <h4 className="text-[#848484] font-light text-sm">Sport</h4>
                            </div>
                            <FaHeart className="text-gray-500 transition-all duration-500 cursor-pointer hover:text-blue-600" />
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
                    </div>
                </div>
            </div>
        </>
    )
}