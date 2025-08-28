import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export function RecentPosts() {
    return (
        <>
            <div className="container py-16">
                <h2 className="font-semibold text-xl">Postagens recentes</h2>
                <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="max-w-2xl w-full">
                        <Image className="w-full h-72 rounded-lg object-cover mb-2" src="/images/car-img.jpg" width={400} height={400} alt="foto do post" />
                        <span className="text-blue-400 text-[14px]">29 de janeiro, 2025</span>
                        <h3 className="text-2xl font-semibold py-3">Explorando os carros do futuro: Inovações que estão transformando a indústria automobilistica</h3>
                        <p className="font-light text-gray-500 text-sm mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ut perferendis reiciendis sapiente tempore, fugit quo aperiam animi nesciunt dolorum neque quos vitae cupiditate eos eligendi suscipit, recusandae id error!</p>
                        <div className="flex flex-wrap gap-4 mb-3">
                            <span className="bg-gray-200 p-2 rounded-xl font-light text-[10px] lg:text-xs">Técnologia Automobilistica</span>
                            <span className="bg-gray-200 p-2 rounded-xl font-light text-[10px] lg:text-xs">Técnologia Automobilistica</span>
                            <span className="bg-gray-200 p-2 rounded-xl font-light text-[10px] lg:text-xs">Técnologia Automobilistica</span>
                        </div>
                        <Link href="/post/1" className="w-fit cursor-pointer flex gap-5 items-center font-semibold text-blue-500 py-3 transition-all duration-500 hover:px-3 hover:bg-blue-300 hover:text-white">Saiba Mais <FaLongArrowAltRight className="text-xl" /></Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-full flex flex-col lg:flex-row gap-4">
                            <Image className="lg:max-w-60 w-full h-fit rounded-lg object-cover mb-2" src="/images/car-img.jpg" width={400} height={400} alt="foto do post" />
                            <div>
                                <span className="text-blue-400 text-xs">29 de janeiro, 2025</span>
                                <h3 className="text-xl font-semibold mt-2">Explorando os carros do futuro: Inovações que estão transformando a indústria...</h3>
                                <p className="font-light text-gray-500 text-xs mb-4"> Lorem ipsum dolor sit amet cons...</p>
                                <div className="flex flex-wrap gap-4 mb-3">
                                    <span className="bg-gray-200 p-2 rounded-xl font-light text-[10px]">Técnologia Automobilistica</span>
                                    <span className="bg-gray-200 p-2 rounded-xl font-light text-[10px]">Técnologia Automobilistica</span>
                                </div>
                                <Link href="/blog" className="w-fit cursor-pointer flex gap-5 items-center font-semibold text-blue-500 py-3 transition-all duration-500 hover:px-3 hover:bg-blue-300 hover:text-white">Saiba Mais <FaLongArrowAltRight className="text-xl" /></Link>
                            </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row gap-4">
                            <Image className="lg:max-w-60 w-full h-fit rounded-lg object-cover mb-2" src="/images/car-img.jpg" width={400} height={400} alt="foto do post" />
                            <div>
                                <span className="text-blue-400 text-xs">29 de janeiro, 2025</span>
                                <h3 className="text-xl font-semibold mt-2">Explorando os carros do futuro: Inovações que estão transformando a indústria...</h3>
                                <p className="font-light text-gray-500 text-xs mb-4"> Lorem ipsum dolor sit amet cons...</p>
                                <div className="flex flex-wrap gap-4 mb-3">
                                    <span className="bg-gray-200 p-2 rounded-xl font-light text-[10px]">Técnologia Automobilistica</span>
                                    <span className="bg-gray-200 p-2 rounded-xl font-light text-[10px]">Técnologia Automobilistica</span>
                                </div>
                                <Link href="/blog" className="w-fit cursor-pointer flex gap-5 items-center font-semibold text-blue-500 py-3 transition-all duration-500 hover:px-3 hover:bg-blue-300 hover:text-white">Saiba Mais <FaLongArrowAltRight className="text-xl" /></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}