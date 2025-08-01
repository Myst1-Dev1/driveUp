import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

export default function Car() {
    return (
        <>
            <div className="container py-12 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
                <div className="max-w-xl w-full">
                    <Image className="w-full h-96 object-cover" src="/images/car-img.jpg" width={500} height={500} alt="foto do carro" />
                    <div className="mt-7 max-w-xl w-full overflow-hidden flex justify-between gap-4 lg:gap-0">
                        <Image className="max-w-32 h-24 w-full object-cover" src="/images/car-img.jpg" width={500} height={500} alt="foto do carro" />
                        <Image className="max-w-32 h-24 w-full object-cover" src="/images/car-img.jpg" width={500} height={500} alt="foto do carro" />
                        <Image className="max-w-32 h-24 w-full object-cover" src="/images/car-img.jpg" width={500} height={500} alt="foto do carro" />
                        <Image className="max-w-32 h-24 w-full object-cover" src="/images/car-img.jpg" width={500} height={500} alt="foto do carro" />
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl font-bold">Koenigsegg</h2>
                        <span className="font-light text-xs text-gray-500">Sport</span>
                        <p className="font-medium text-sm">O KoenigSegg Sport é um carro esportivo de alto desempenho, ideal para quem busca potência e sofisticação. Com motor de 250 cv e uma aceleração impressionante de 0 a 100 km/h em apenas 6 segundos, ele garante uma experiência única de condução. A suspensão independente e os freios a disco ventilado proporcionam estabilidade e segurança em qualquer terreno. O design moderno, combinado com o conforto dos 5 assentos, faz dele a escolha perfeita para quem quer combinar emoção e elegância.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Ano do Carro: 2024</h6>
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Número de passageiros: 5</h6>
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Combustível: Gasolina</h6>
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Capacidade do Combustível: 50L</h6>
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Transmissão: Automática</h6>
                    </div>
                    <div>
                        <h5 className="font-bold">Preço do aluguel</h5>
                        <div className="flex mt-3 border p-4 border-gray-300 rounded-xl w-fit transition-all duration-500 group hover:bg-blue-400">
                            <div className="flex flex-col gap-2 pr-4 border-r border-gray-300">
                                <h6 className="text-sm text-gray-600 group-hover:text-white">Hora</h6>
                                <h6 className="text-sm text-gray-600 group-hover:text-white">Dia</h6>
                                <h6 className="text-sm text-gray-600 group-hover:text-white">Semana</h6>
                            </div>
                            <div className="flex flex-col gap-2 pl-4">
                                <h6 className="text-sm text-gray-600 group-hover:text-white">R$ 100,00</h6>
                                <h6 className="text-sm text-gray-600 group-hover:text-white">R$ 300,00</h6>
                                <h6 className="text-sm text-gray-600 group-hover:text-white">R$ 2000,00</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container mt-20">
                <h2 className="font-bold text-xl text-center">Avaliações de clientes</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center mt-10">
                    <div className="bg-[#F3F5F7] p-3 rounded-xl flex flex-col gap-4">
                        <FaQuoteLeft className="text-blue-500 text-xl" />
                        <p className="font-medium text-sm">Aluguei o KoenigSegg Sport para um final de semana e fiquei impressionado! O carro tem uma potência incrível e a direção é super responsiva, o que tornou minha experiência de dirigir realmente divertida. Além disso, o conforto é excepcional, mesmo em viagens longas. A aceleração é impressionante e o design do carro é simplesmente lindo. O atendimento da equipe de locação foi ótimo.</p>
                        <div className="flex items-center gap-3">
                            <Image className="w-10 h-10 rounded-full object-cover" src="/images/user.jpg" width={200} height={200} alt="foto do usuário que avaliou o carro" />
                            <h6 className="font-semibold">Jane Doe</h6>
                        </div>
                    </div>
                    <div className="bg-[#F3F5F7] p-3 rounded-xl flex flex-col gap-4">
                        <FaQuoteLeft className="text-blue-500 text-xl" />
                        <p className="font-medium text-sm">Aluguei o KoenigSegg Sport para um final de semana e fiquei impressionado! O carro tem uma potência incrível e a direção é super responsiva, o que tornou minha experiência de dirigir realmente divertida. Além disso, o conforto é excepcional, mesmo em viagens longas. A aceleração é impressionante e o design do carro é simplesmente lindo. O atendimento da equipe de locação foi ótimo.</p>
                        <div className="flex items-center gap-3">
                            <Image className="w-10 h-10 rounded-full object-cover" src="/images/user.jpg" width={200} height={200} alt="foto do usuário que avaliou o carro" />
                            <h6 className="font-semibold">Jane Doe</h6>
                        </div>
                    </div>
                    <div className="bg-[#F3F5F7] p-3 rounded-xl flex flex-col gap-4">
                        <FaQuoteLeft className="text-blue-500 text-xl" />
                        <p className="font-medium text-sm">Aluguei o KoenigSegg Sport para um final de semana e fiquei impressionado! O carro tem uma potência incrível e a direção é super responsiva, o que tornou minha experiência de dirigir realmente divertida. Além disso, o conforto é excepcional, mesmo em viagens longas. A aceleração é impressionante e o design do carro é simplesmente lindo. O atendimento da equipe de locação foi ótimo.</p>
                        <div className="flex items-center gap-3">
                            <Image className="w-10 h-10 rounded-full object-cover" src="/images/user.jpg" width={200} height={200} alt="foto do usuário que avaliou o carro" />
                            <h6 className="font-semibold">Jane Doe</h6>
                        </div>
                    </div>
                </div>
            </div>
            <button className="bg-black text-white block mx-auto p-3 max-w-40 w-full font-semibold mt-12 cursor-pointer rounded-lg transition-all duration-500 hover:bg-blue-500">Reserve Agora</button>
        </>
    )
}