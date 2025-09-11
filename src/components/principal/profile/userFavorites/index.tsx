import { deleteFavorite, favoriteACar } from "@/actions/carActions";
import { useAppSelector } from "@/services/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export function UserFavorites() {
    const { data: user} = useAppSelector(s => s.user);
    const { data: favorite} = useAppSelector(s => s.favorite);

    return (
        <>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 overflow-y-auto h-full scrollDontShow lg:h-96">
                {favorite.data?.length === 0 ? 'Nenhum carro encontrado' : favorite.data?.map((car: any) => (
                    <Link key={car.id} href={`/car/${car.id}`} className="max-w-72 w-full h-fit p-3 rounded-lg bg-[#fff] flex flex-col gap-3">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold">{car.name}</h3>
                                <h4 className="text-[#848484] font-light text-sm">{car.car_model}</h4>
                            </div>
                            <div className="z-40">
                                {favorite.data?.some((fav:any) => fav.id === car.id) 
                                    ? <FaHeart 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            deleteFavorite(car.id, user?.data[0].userId);
                                        }}
                                        className="text-red-500 transition-all duration-500 cursor-pointer hover:text-blue-600" 
                                    /> 
                                    : (
                                        <FaRegHeart
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            favoriteACar(car.id, user?.data[0].userId);
                                        }}
                                        className="text-gray-500 transition-all duration-500 cursor-pointer hover:text-blue-600"
                                        />
                                    )
                                }
                            </div>
                        </div>
                        <Image className="w-full h-32 object-cover" src={car.image_url || "/images/car.png"} width={300} height={100} alt="foto do carro" />
                        {/* <div className="w-full flex justify-between">
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaGasPump /> <span className="text-xs">{car.fuel_capacity}L</span>
                            </div>
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaLifeRing /> <span className="text-xs">{car.transmission}</span>
                            </div>
                            <div className="text-[#848484] flex items-center gap-2">
                                <FaUsers /> <span className="text-xs">{car.passengers} Assentos</span>
                            </div>
                        </div> */}
                        <div className="mt-4">
                            <h5 className="font-bold text-[18px]">{Intl.NumberFormat("pt-br",{style: 'currency', currency:'BRL'}).format(car.price_per_day)}/ <span className="text-[#848484] font-light text-sm">Diária</span></h5>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}