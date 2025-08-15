import { Modal } from "@/components/modal";
import React from "react";
import { FaCloudUploadAlt, FaPlus } from "react-icons/fa";

interface CarModalProps {
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CarModal({ isOpenModal, setIsOpenModal }:CarModalProps) {
    return (
        <>
            <Modal maxWidth="max-w-[720px] overflow-y-auto scrollDontShow h-[500px] z-50" isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                <form action="">
                    <div>
                        <label htmlFor="carImage" className="cursor-pointer h-40 w-full grid place-items-center bg-gray-200">
                            <FaCloudUploadAlt className="text-3xl" />
                        </label>
                        <input type="file" name="image_url" id="carImage" className="hidden" />
                    </div>
                    <div className="mt-5 flex w-full justify-between">
                        <label htmlFor="carImages">
                            <div className="cursor-pointer w-14 h-14 lg:w-24 lg:h-24 grid place-items-center bg-gray-200"><FaPlus className="text-xl lg:text-3xl" /></div>
                        </label>
                        <div className="w-14 h-14 lg:w-24 lg:h-24 bg-gray-200"/>
                        <div className="w-14 h-14 lg:w-24 lg:h-24 bg-gray-200"/>
                        <div className="w-14 h-14 lg:w-24 lg:h-24 bg-gray-200"/>
                        <div className="w-14 h-14 lg:w-24 lg:h-24 bg-gray-200"/>
                    
                        <input type="file" name="thumbnail_urls" id="carImages" className="hidden" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                        <input type="text" className="input" name="name" placeholder="Nome do carro" />
                        <input type="text" className="input" name="car_model" placeholder="Modelo do carro" />
                        <input type="text" className="input" name="year" placeholder="Ano do carro" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                        <input type="text" className="input" name="color" placeholder="Cor do carro" />
                        <input type="text" className="input" name="passengers" placeholder="Número de passageiros" />
                        <input type="text" className="input" name="transmission" placeholder="Transmissão" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                        <input type="text" className="input" name="fuel" placeholder="Combustível" />
                        <input type="text" className="input" name="fuel_capacity" placeholder="Capacidade do tanque" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                        <input type="tel" className="input" name="price_per_hour" placeholder="Preço por horá" />
                        <input type="tel" className="input" name="price_per_day" placeholder="Preço por dia" />
                        <input type="tel" className="input" name="price_per_week" placeholder="Preço por semana" />
                    </div>
                    <textarea placeholder="Descrição do carro" className="input mt-5 h-28 resize-none"/>
                    <button className="mt-6 bg-blue-500 text-white font-semibold cursor-pointer rounded-md block mx-auto max-w-60 w-full p-3 transition-all duration-500 hover:brightness-90">Criar Carro</button>
                </form> 
            </Modal>
        </>
    )
}