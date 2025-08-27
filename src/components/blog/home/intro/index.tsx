import Image from "next/image";

export function Intro() {
    return (
        <>
            <div className="flex lg:flex-row flex-col">
                <div className="lg:mt-0 mt-16 min-h-96 lg:min-h-screen w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
                    <Image src="/images/blog-logo.png" className="absolute top-2 left-2 w-36 object-cover" width={200} height={200} alt="logo do blog" />
                    <div className="max-w-md w-full flex gap-3 flex-col px-5">
                        <h1 className="text-xl lg:text-3xl font-semibold">As últimas novidades e avaliações sobre carros</h1>
                        <p className="text-sm font-light text-gray-600">Fique por dentro das últimas noticias dos melhores carros da atualidade</p>
                        <button className="font-semibold max-w-36 w-full rounded-md text-white cursor-pointer px-3 py-2 bg-rose-500 transition-all duration-500 hover:brightness-90">Saiba Mais</button>
                    </div>
                </div>
                <div className="lg:mt-0 -mt-20 px-4 lg:px-0 relative lg:absolute lg:top-1/2 top-0 left-0 lg:left-1/2 translate-x-0 lg:-translate-x-1/2 translate-y-0 lg:-translate-y-1/2">
                    <Image
                    src="/images/intro-img.webp"
                    width={500}
                    height={500}
                    alt="foto de um carro"
                    className="max-w-48 block mx-auto lg:max-w-96 w-full object-cover lg:rotate-0 rotate-90"
                    />
                </div>
                <div className="min-h-96 lg:min-h-screen w-full lg:w-1/2 bg-[url('/images/bg-blog-intro.webp')] bg-cover flex justify-center items-center">
                    <p className="ml-0 px-4 lg:px-0 lg:ml-10 text-white font-semibold text-xl lg:text-2xl max-w-md w-full">Descubra o futuro dos automóveis. Explore as inovações mais recentes e as avaliações especializadas dos modelos mais esperados.</p>
                </div>
            </div>
        </>
    )
}