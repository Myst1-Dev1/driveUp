import Image from "next/image";
import Link from "next/link";

export function Intro() {
    return (
        <>
            <div className="flex justify-center flex-col gap-3 items-center w-full min-h-screen bg-gradient-to-b from-[#7EA4F6] to-[#304BA2] rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[500px] lg:rounded-br-[500px]">
                <h1 className="text-white text-center font-bold text-2xl lg:text-4xl">A Melhor Plataforma Para <br />Aluguel de Carros</h1>
                <p className="font-light text-sm text-white text-center max-w-80 w-full">Abrimos a porta para você explorar o mundo com comforto e estilo, sendo seu parceiro de viagem de confiança</p>
                <Link href="#carros" className="z-30 text-center block mx-auto max-w-32 w-full p-3 bg-black text-white rounded-full border-none cursor-pointer mt-4 font-semibold transition-all duration-500 hover:bg-blue-600">Ver Carros</Link>
            </div>
            <Image className="m-auto -mt-32 lg:-mt-[260px] max-w-3xl w-full" src="/images/car-intro.png" width={800} height={300} alt="carro da introdução" />
        </>
    )
}