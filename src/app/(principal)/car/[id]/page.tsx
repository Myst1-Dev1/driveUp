'use server';

import { CarType } from "@/@types/Car";
import { Gallery } from "@/components/gallery";
import { ReviewForm } from "@/components/principal/reviewForm";
import { getCarById } from "@/services/getCarById";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

export default async function Car({ params }: any) {
    const { id } = await params;

    const carData = await getCarById(id);

    const data:CarType = carData?.data[0];

    return (
        <>
            <div className="container py-12 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
                <div className="max-w-xl w-full">
                    <Gallery
                        baseImage={data?.image_url || "/images/car-img.jpg"}
                        otherImages={data?.thumbnail_urls?.length ? data.thumbnail_urls : [
                        "/images/car-img.jpg",
                        "/images/car-img.jpg",
                        "/images/car-img.jpg",
                        ]}
                        className="max-w-xl w-full"
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl font-bold">{data?.name}</h2>
                        <span className="font-light text-xs text-gray-500">{data?.car_model}</span>
                        <p className="font-medium text-sm indent-5 leading-relaxed text-justify">{data?.description}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Ano do Carro: {data?.year}</h6>
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Número de passageiros: {data?.passengers}</h6>
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Combustível: {data?.fuel}</h6>
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Capacidade do Combustível: {data?.fuel_capacity}L</h6>
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Transmissão: {data?.transmission}</h6>
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
                                <h6 className="text-sm text-gray-600 group-hover:text-white">{Intl.NumberFormat('pt-br', {
                                    style: 'currency', currency: 'BRL'
                                    }).format(data?.price_per_hour)}
                                </h6>
                                <h6 className="text-sm text-gray-600 group-hover:text-white">{Intl.NumberFormat('pt-br', {
                                    style: 'currency', currency: 'BRL'
                                    }).format(data?.price_per_day)}
                                </h6>
                                <h6 className="text-sm text-gray-600 group-hover:text-white">{Intl.NumberFormat('pt-br', {
                                    style: 'currency', currency: 'BRL'
                                    }).format(data?.price_per_week)}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container mt-20">
                <h2 className="font-bold text-xl text-center">Avaliações de clientes</h2>
                {data?.reviews.length === 0 ? <p className="text-center text-xl font-semibold py-12 text-red-500">O carro não possui avaliações</p> :
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center mt-10">
                        {data?.reviews.map((review, index:number) => (
                            <div key={index} className="bg-[#F3F5F7] p-3 rounded-xl max-w-md w-full flex flex-col gap-4">
                                <FaQuoteLeft className="text-blue-500 text-xl" />
                                <p className="font-medium text-sm">{review.comment}</p>
                                <div className="flex items-center gap-3">
                                    <Image className="w-10 h-10 rounded-full object-cover" src={review.avatarUrl || "/images/user.jpg"} width={200} height={200} alt="foto do usuário que avaliou o carro" />
                                    <h6 className="font-semibold">{review.name}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>

            <button className={`${data?.availability ? 'opacity-50 cursor-none' : 'cursor-pointer'} bg-black text-white block mx-auto p-3 max-w-40 w-full font-semibold mt-12 rounded-lg transition-all duration-500 hover:bg-blue-500`}>{data?.availability ? 'Já reservado' : 'Reserve Agora'}</button>

            <ReviewForm id={data?.id} />
        </>
    )
}