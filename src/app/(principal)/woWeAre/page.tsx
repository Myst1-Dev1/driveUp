import Image from "next/image";
import { FaCogs } from "react-icons/fa";
import { FaBullseye, FaHandshake } from "react-icons/fa6";

export default function WoWeAre() {
    return (
        <>
            <div className="container py-12 mt-20">
                <div className="grid grid-cols-1 gap-10 lg:gap-0 place-items-center m-auto lg:grid-cols-2">
                    <div className="flex flex-col gap-3 lg:max-w-md w-full">
                        <h2 className="text-2xl font-bold">Quem é a Drive Up?</h2>
                        <p className="font-light text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className="font-light text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="flex justify-between">
                            <span className="text-4xl font-bold flex gap-2 items-center">3 <span className="text-gray-500 text-sm font-normal">Anos de <br /> Experiência</span></span>
                            <span className="text-4xl font-bold flex gap-2 items-center">600+ <span className="text-gray-500 text-sm font-normal">Clientes <br /> Satisfeitos</span></span>
                        </div>
                    </div>
                    <Image className="max-w-96 h-60 w-full rounded-lg object-cover" src="/images/woWeAreImg.webp" width={500} height={500} alt="foto da chave de um carro sendo entregue" />
                </div>
                <div className="mt-16 grid grid-cols-1 place-items-center gap-8 lg:gap-0 lg:grid-cols-3">
                    <div className="flex justify-center items-center flex-col gap-3 max-w-80 w-full">
                        <FaBullseye className="text-[#1E4AA8]" />
                        <h3 className="font-bold text-xl">Missão</h3>
                        <p className="font-normal text-gray-500 text-center">
                            Nossa missão é garantir que cada viagem seja confortável e sem preocupações, com uma frota diversificada e serviços personalizados que atendem às necessidades de todos.
                        </p>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-3 max-w-80 w-full">
                        <FaHandshake className="text-[#1E4AA8]" />
                        <h3 className="font-bold text-xl">Valores</h3>
                        <p className="font-normal text-gray-500 text-center">
                            Acreditamos na importância de oferecer veículos bem mantidos, um atendimento personalizado e soluções rápidas, sempre com o foco na satisfação e segurança de nossos clientes.
                        </p>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-3 max-w-80 w-full">
                        <FaCogs className="text-[#1E4AA8]" />
                        <h3 className="font-bold text-xl">Diferenciais</h3>
                        <p className="font-normal text-gray-500 text-center">
                            Nosso processo de reserva é rápido e simples, com opções de entrega e retirada no local de sua preferência, além de suporte completo durante todo o período de locação.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}