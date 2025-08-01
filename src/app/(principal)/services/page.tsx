import Image from "next/image";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCar, FaUserTie } from "react-icons/fa6";


export default function Services() {
    return (
        <>
            <div className="container py-12 mt-20">
                <h2 className="text-center text-xl font-bold">Nossos serviços</h2>
                <p className="mt-2 font-normal text-gray-500 text-center block mx-auto">Tudo de melhor para seu conforto em sua viagem</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-16 lg:gap-0 mt-20">
                    <div className="bg-white h-full p-3 rounded-lg max-w-80 w-full flex flex-col gap-3 justify-center items-center">
                        <div className="-mt-10 w-16 h-16 rounded-full grid place-items-center bg-[#fafafb] border border-[#DFE5F6]">
                            <FaCar className="text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold">Aluguel de Carros</h3>
                        <p className="font-normal text-gray-500 text-sm">
                            Escolha entre nossa frota de veículos modernos, desde carros econômicos até modelos de luxo, com aluguel diário ou por longo prazo.
                        </p>
                    </div>
                    <div className="bg-white h-full p-3 rounded-lg max-w-80 w-full flex flex-col gap-3 justify-center items-center">
                        <div className="-mt-10 w-16 h-16 rounded-full grid place-items-center bg-[#fafafb] border border-[#DFE5F6]">
                            <FaUserTie className="text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold">Locação de Carros com Chauffeur</h3>
                        <p className="font-normal text-gray-500 text-sm">
                            Ofereça um toque de sofisticação ao seu evento ou viagem com nosso serviço de motorista particular.
                        </p>
                    </div>
                    <div className="bg-white h-full p-3 rounded-lg max-w-80 w-full flex flex-col gap-3 justify-center items-center">
                        <div className="-mt-10 w-16 h-16 rounded-full grid place-items-center bg-[#fafafb] border border-[#DFE5F6]">
                            <FaCalendarCheck className="text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold">Aluguel para Longo Prazo</h3>
                        <p className="font-normal text-gray-500 text-sm">
                            Para quem precisa de um carro por um período mais longo, oferecemos planos especiais e flexíveis.
                        </p>
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 place-items-center m-auto">
                    <div className="max-w-80 w-full flex flex-col gap-5">
                        <h2 className="text-xl font-bold">Conheça os Beneficios em Alugar Com Nossa Empresa</h2>
                        <ol className="list-decimal list-inside text-base text-gray-900 font-normal pl-5 space-y-2">
                            <li>Frota diversificada com modelos de carros para todos os gostos e necessidades</li>
                            <li>Atendimento 24 horas e suporte ao cliente sempre que disponível</li>
                            <li>Processos de aluguel rápidos e sem burocracia, com locação facil e transparente</li>
                            <li>Planos flexíveis, com aluguel diário, semanal ou mensal</li>
                        </ol>
                        <button className="bg-black text-white p-3 rounded-xl max-w-40 w-full font-semibold cursor-pointer block mx-auto transition-all duration-500 hover:bg-blue-400">Reserve agora</button>
                    </div>
                    <Image className="max-w-md rounded-lg w-full object-cover" src="/images/rental-service.webp" width={500} height={500} alt="foto do serviço de aluguel" />
                </div>
            </div>
        </>
    )
}