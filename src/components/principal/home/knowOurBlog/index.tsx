import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export function KnowOurBlog() {
    return (
        <>
            <div className="container mt-20 py-8">
                <div>
                    <h2 className="text-xl font-bold text-center">Embarque em uma Jornada de Alta Performance</h2>
                    <p className="font-light text-gray-500 max-w-xl mt-2 text-center block mx-auto">Explore conteúdos exclusivos sobre inovação, mobilidade e dicas para tirar o máximo proveito da sua experiência ao volante. Tudo o que você precisa para acelerar sua jornada com estilo e eficiência.</p>
                </div>
                <div className="mt-12 grid place-items-center m-auto grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0">
                    <div className="max-w-80 w-full relative overflow-hidden rounded-xl">
                        <Image className="w-full object-cover" src="/images/blogImg.jpg" width={300} height={200} alt="foto do artigo do blog" />
                        <div className="bg-white w-full p-3 flex flex-col gap-3">
                            <span className="text-xs font-semibold text-[#3E5EF0]">10 de Abril de 2025</span>
                            <h3 className="text-xl font-bold">Revelando as últimas maravilhas automotivas</h3>
                            <p className="text-sm text-gray-500 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Link href="" className="flex items-center gap-3 text-[#3E5EF0] font-semibold transition-all duration-500 hover:text-blue-950">Saiba mais <FaLongArrowAltRight className="text-xl" /></Link>
                        </div>
                    </div>
                    <div className="max-w-80 w-full relative overflow-hidden rounded-xl">
                        <Image className="w-full object-cover" src="/images/blogImg.jpg" width={300} height={200} alt="foto do artigo do blog" />
                        <div className="bg-white w-full p-3 flex flex-col gap-3">
                            <span className="text-xs font-semibold text-[#3E5EF0]">10 de Abril de 2025</span>
                            <h3 className="text-xl font-bold">Revelando as últimas maravilhas automotivas</h3>
                            <p className="text-sm text-gray-500 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Link href="" className="flex items-center gap-3 text-[#3E5EF0] font-semibold transition-all duration-500 hover:text-blue-950">Saiba mais <FaLongArrowAltRight className="text-xl" /></Link>
                        </div>
                    </div>
                    <div className="max-w-80 w-full relative overflow-hidden rounded-xl">
                        <Image className="w-full object-cover" src="/images/blogImg.jpg" width={300} height={200} alt="foto do artigo do blog" />
                        <div className="bg-white w-full p-3 flex flex-col gap-3">
                            <span className="text-xs font-semibold text-[#3E5EF0]">10 de Abril de 2025</span>
                            <h3 className="text-xl font-bold">Revelando as últimas maravilhas automotivas</h3>
                            <p className="text-sm text-gray-500 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Link href="" className="flex items-center gap-3 text-[#3E5EF0] font-semibold transition-all duration-500 hover:text-blue-950">Saiba mais <FaLongArrowAltRight className="text-xl" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}