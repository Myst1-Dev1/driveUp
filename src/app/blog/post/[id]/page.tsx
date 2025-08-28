import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

export default function Post() {
    return (
        <>
            <Link href="/blog">
                <Image src="/images/blog-logo.png" className="absolute top-2 left-2 w-36 object-cover" width={200} height={200} alt="logo do blog" />
            </Link>
            <div className="container py-16 mt-10 flex flex-wrap gap-10 lg:gap-0 justify-between">
                <div className="lg:max-w-2xl w-full">
                    <Image src="/images/car-img.jpg" className="w-full h-80 rounded-md object-cover mb-4" width={400} height={400} alt="foto do post" />
                    <span className="text-blue-400 text-[14px]">29 de janeiro, 2025</span>
                    <h3 className="text-2xl font-semibold py-3">Explorando os carros do futuro: Inovações que estão transformando a indústria automobilistica</h3>
                    <p className="font-light text-gray-500 text-sm mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ut perferendis reiciendis sapiente tempore, fugit quo aperiam animi nesciunt dolorum neque quos vitae cupiditate eos eligendi suscipit, recusandae id error!</p>
                    
                    <div className="mt-10">
                        <div className="flex items-center gap-4 font-semibold">
                            <FaComments className="text-xl" /> Faça um comentário
                        </div>
                        <form action="" className="mt-6 w-full flex justify-between flex-col lg:flex-row items-center gap-5 border border-gray-300 p-3 rounded-md transition-all duration-500 hover:bg-rose-200 hover:border-transparent">
                            <div className="flex items-center gap-4 flex-1 w-full">
                                <Image src="/images/uploadUserPhoto.png" className="w-12 h-12 rounded-full aspect-square object-cover" width={200} height={200} alt="foto do usuário logado" />
                                <textarea placeholder="Escreva um comentário" className="resize-none h-12 scrollDontShow w-full p-3 outline-none border-b border-gray-300" />
                            </div>
                            <button className="max-w-20 h-10 grid place-items-center cursor-pointer w-full rounded-full text-white bg-rose-500 font-semibold transition-all duration-500 hover:bg-rose-700">Enviar</button>
                        </form>
                        <div className="flex flex-col gap-6 mt-10">
                            <div className="flex gap-4">
                                <Image src="/images/user.jpg" className="w-12 h-12 rounded-full object-cover aspect-square" width={200} height={200} alt="foto do usuário" />
                                <div>
                                    <span className="text-gray-400 font-light text-xs">03/04/2025</span>
                                    <h4 className="font-semibold text-xl">Jane Doe</h4>
                                    <p className="mt-4 w-full text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nisi, sed dicta iusto doloremque, accusantium molestiae autem non, odio officia iure possimus. Mollitia fuga reiciendis facilis ut, accusantium repellendus odit.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Image src="/images/user.jpg" className="w-12 h-12 rounded-full object-cover aspect-square" width={200} height={200} alt="foto do usuário" />
                                <div>
                                    <span className="text-gray-400 font-light text-xs">03/04/2025</span>
                                    <h4 className="font-semibold text-xl">Jane Doe</h4>
                                    <p className="mt-4 w-full text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nisi, sed dicta iusto doloremque, accusantium molestiae autem non, odio officia iure possimus. Mollitia fuga reiciendis facilis ut, accusantium repellendus odit.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Image src="/images/user.jpg" className="w-12 h-12 rounded-full object-cover aspect-square" width={200} height={200} alt="foto do usuário" />
                                <div>
                                    <span className="text-gray-400 font-light text-xs">03/04/2025</span>
                                    <h4 className="font-semibold text-xl">Jane Doe</h4>
                                    <p className="mt-4 w-full text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nisi, sed dicta iusto doloremque, accusantium molestiae autem non, odio officia iure possimus. Mollitia fuga reiciendis facilis ut, accusantium repellendus odit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h5 className="text-xl font-semibold">Artigos Relacionados</h5>
                            <div className="mt-6 flex justify-between gap-6 lg:gap-0 w-full flex-wrap">
                                <div className="flex gap-4 items-center">
                                    <Image src="/images/car-img.jpg" className="max-w-28 rounded-md w-full h-28" width={200} height={200} alt="foto do post" />
                                    <h6 className="max-w-52 font-semibold">A potência dos carros hibridos e seu impacto</h6>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Image src="/images/car-img.jpg" className="max-w-28 rounded-md w-full h-28" width={200} height={200} alt="foto do post" />
                                    <h6 className="max-w-52 font-semibold">A potência dos carros hibridos e seu impacto</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:max-w-80 w-full flex flex-col gap-20">
                    {/* <div className="bg-white rounded-md p-3 flex flex-col gap-6">
                        <h3 className="text-xl font-semibold">Artigos Populares</h3>
                        <div className="flex gap-4 items-center">
                            <Image src="/images/car-img.jpg" className="max-w-28 rounded-md w-full h-28" width={200} height={200} alt="foto do post" />
                            <h6 className="font-semibold">A potência dos carros hibridos e seu impacto</h6>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Image src="/images/car-img.jpg" className="max-w-28 rounded-md w-full h-28" width={200} height={200} alt="foto do post" />
                            <h6 className="font-semibold">A potência dos carros hibridos e seu impacto</h6>
                        </div>
                    </div> */}
                    <div className="bg-white rounded-md p-3">
                        <h5 className="text-xl font-semibold mb-5">Categorias</h5>
                        <div className="lg:max-w-64 w-full block mx-auto">
                            <Image src="/images/car-img.jpg" className="w-full h-38 object-cover rounded-md" width={400} height={400} alt="foto da categoria" />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h6>Carros elétricos</h6>
                                    <span className="text-sm text-gray-400">9 Artigos</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="cursor-pointer w-8 h-8 rounded-full bg-rose-500 text-white grid place-items-center transition-all duration-500 hover:brightness-90"><FaArrowLeft /></span>
                                    <span className="cursor-pointer w-8 h-8 rounded-full bg-rose-500 text-white grid place-items-center transition-all duration-500 hover:brightness-90"><FaArrowRight /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}