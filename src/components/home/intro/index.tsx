import Image from "next/image";
import { FaCalendarAlt, FaFilter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export function Intro() {
    return (
        <>
            <div className="flex justify-center flex-col gap-3 items-center w-full min-h-screen bg-gradient-to-b from-[#7EA4F6] to-[#304BA2] rounded-bl-[500px] rounded-br-[500px]">
                <h1 className="text-white text-center font-bold text-4xl">A Melhor Plataforma Para <br />Aluguel de Carros</h1>
                <p className="font-light text-sm text-white text-center max-w-80 w-full">Abrimos a porta para você explorar o mundo com comforto e estilo, sendo seu parceiro de viagem de confiança</p>
                <div className="z-10 mt-4 bg-white px-3 py-5 rounded-full max-w-3xl w-full flex justify-between items-center">
                    <div className="flex w-full justify-between">
                            <div className="flex items-center gap-4 w-full">
                                <FaLocationDot className="shrink-0" />
                                <div className="flex flex-col gap-3 w-full">
                                    <label htmlFor="location" className="font-bold">Localização</label>
                                    <input className="outline-none max-w-40 w-full" id="location" type="text" placeholder="Cidade ou destino" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 w-full">
                                <FaCalendarAlt className="shrink-0" />
                                <div className="flex flex-col gap-3 w-full">
                                    <label htmlFor="pickup" className="font-bold">Data de retirada</label>
                                    <div className="flex gap-4">
                                        <input className="outline-none max-w-16 w-full" id="pickup" type="text" placeholder="Data" />
                                        <input className="outline-none max-w-16 w-full" id="pickup" type="text" placeholder="Hora" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 w-full">
                                <FaCalendarAlt className="shrink-0" />
                                <div className="flex flex-col gap-3 w-full">
                                    <label htmlFor="dropoff" className="font-bold">Data de devolução</label>
                                    <div className="flex gap-4">
                                        <input className="outline-none max-w-16 w-full" id="pickup" type="text" placeholder="Data" />
                                        <input className="outline-none max-w-16 w-full" id="pickup" type="text" placeholder="Hora" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 w-10 h-10 rounded-full bg-[#496CF9] text-white grid place-items-center cursor-pointer transition-all duration-500 hover:bg-blue-900">
                            <FaFilter />
                        </div>
                </div>
            </div>
            <Image className="m-auto -mt-[280px] max-w-4xl w-full" src="/images/car-intro.png" width={800} height={300} alt="carro da introdução" />
        </>
    )
}