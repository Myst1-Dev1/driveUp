import Image from "next/image";

export default function Contact() {
    return (
        <>
            <div className="container pt-12 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 place-items-center">
                <Image className="max-w-md w-full object-cover rounded-lg" src="/images/contact-img.webp" width={500} height={500} alt="foto da página de contato" />
                <div>
                    <h2 className="text-xl text-center mb-2 font-bold">Entre em Contato e Alugue um Carro</h2>
                    <p className="font-normal text-gray-500 text-sm text-center block px-auto">
                        O melhor com o maior conforto para sua viagem
                    </p>
                    <form action="" className="flex flex-col gap-4 mt-8">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <input type="text" className="input" placeholder="Nome" />
                            <input type="email" className="input" placeholder="Email" />
                        </div>
                        <input type="text" className="input" placeholder="Assunto" />
                        <textarea className="input h-32 resize-none" placeholder="Mensagem" />
                        <button className="mt-3 bg-black text-white block mx-auto max-w-40 w-full rounded-xl p-3 cursor-pointer font-semibold transition-all duration-500 hover:bg-blue-400">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}