'use client';

import { CarType } from "@/@types/Car";
import { deleteFavorite, favoriteACar } from "@/actions/carActions";
import { useAppSelector } from "@/services/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGasPump, FaHeart, FaLifeRing, FaRegHeart, FaUsers } from "react-icons/fa";
import { toast } from "react-toastify";

interface CarsProps {
    carData: CarType[];
}

export function Cars({ carData }:CarsProps) {
    const { data: user} = useAppSelector(s => s.user);
    const { data: favorite} = useAppSelector(s => s.favorite);

    const [carCounter, setCarCounter] = useState(8);
    
    async function handleFavoriteCar(carId: number) {
        if (user?.data && user.data.length > 0) {
            await favoriteACar(carId, user?.data[0].userId);
            toast.success("Carro adicionado aos favoritos!");
        }
    }

    async function handleDeleteFavoriteCar(carId: number) {
        if (user?.data && user.data.length > 0) {
            await deleteFavorite(carId, user?.data[0].userId);
            toast.success("Carro removido dos favoritos!");
        }
    }

    return (
        <>
            <div id="carros" className="container py-8 mt-20">
                <h2 className="text-center text-xl font-bold">Os Melhores Carros para Alugar</h2>
                <div className="mt-16 grid place-items-center m-auto grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-0">
                    {carData?.length === 0 ? 'Nenhum carro encontrado' : carData?.slice(0, carCounter)?.map((car: CarType) => (
                    <Link key={car.id} href={`/car/${car.id}`} className="mb-10 max-w-72 w-full rounded-lg bg-[#fff] flex flex-col gap-3">
                        <Image className="max-w-80 m-auto w-full h-32 object-cover rounded-tr-lg rounded-tl-lg" src={car.image_url || "/images/car.png"} width={300} height={100} alt="foto do carro" />
                        <div className="flex justify-between px-3">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold">{car.name}</h3>
                                <h4 className="text-[#848484] font-light text-sm">{car.car_model}</h4>
                            </div>
                            <div className="z-40">
                                {!favorite ? 
                                    <FaRegHeart
                                        className="text-gray-500 transition-all duration-500 cursor-pointer hover:text-blue-600"
                                    /> 
                                    : favorite.data?.some((fav:any) => fav.id === car.id) 
                                    ? <FaHeart 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleDeleteFavoriteCar(car.id);
                                        }}
                                        className="text-red-500 transition-all duration-500 cursor-pointer hover:text-blue-600" 
                                    /> 
                                    : (
                                        <FaRegHeart
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleFavoriteCar(car.id);
                                        }}
                                        className="text-gray-500 transition-all duration-500 cursor-pointer hover:text-blue-600"
                                    />
                                    )
                                }
                            </div>
                        </div>
                        <div className="w-full flex justify-between px-3">
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaGasPump /> <span className="text-xs">{car.fuel_capacity}L</span>
                            </div>
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaLifeRing /> <span className="text-xs">{car.transmission}</span>
                            </div>
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaUsers /> <span className="text-xs">{car.passengers} Assentos</span>
                            </div>
                        </div>
                        <div className="my-3 px-3">
                            <h5 className="font-bold text-[18px]">{Intl.NumberFormat("pt-br",{style: 'currency', currency:'BRL'}).format(car.price_per_day)}/ <span className="text-[#848484] font-light text-sm">Diária</span></h5>
                            {/* <button className="bg-[#3E5EF0] text-white rounded-full max-w-20 w-full px-1 py-2 cursor-pointer transition-all duration-500 hover:bg-blue-700">Alugar</button> */}
                        </div>
                    </Link>
                    ))}
                </div>
                <button onClick={() => setCarCounter(carCounter + 4)} className="mt-8 block mx-auto cursor-pointer max-w-40 bg-black text-white rounded-2xl font-semibold p-3 transition-all duration-500 hover:bg-blue-600">Ver mais</button>
            </div>
        </>
    )
}