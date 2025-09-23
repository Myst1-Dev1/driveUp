import { deleteFavorite } from "@/actions/carActions";
import { useAppSelector } from "@/services/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

export function UserFavorites() {
    const { data: user} = useAppSelector(s => s.user);
    const { data: favorite} = useAppSelector(s => s.favorite);

    async function handleDeleteFavoriteCar(carId: number) {
        if (user?.data && user.data.length > 0) {
            await deleteFavorite(carId, user?.data[0].userId);
            toast.success("Carro removido dos favoritos!");
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 overflow-y-auto h-full scrollDontShow lg:h-96">
                {favorite.data?.length === 0 ? 'Nenhum carro encontrado' : favorite.data?.map((car: any) => (
                    <Link key={car.id} href={`/car/${car.id}`} className="mb-10 h-fit max-w-72 w-full rounded-lg bg-[#fff] flex flex-col gap-3">
                        <Image className="max-w-80 w-full h-32 object-cover rounded-tr-lg rounded-tl-lg" src={car.image_url || "/images/car.png"} width={300} height={100} alt="foto do carro" />
                        <div className="flex justify-between px-3">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold">{car.name}</h3>
                                <h4 className="text-[#848484] font-light text-sm">{car.car_model}</h4>
                            </div>
                            <div className="z-40">
                                 <FaHeart 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleDeleteFavoriteCar(car.id);
                                    }}
                                    className="text-red-500 transition-all duration-500 cursor-pointer hover:text-blue-600" 
                                /> 
                            </div>
                        </div>
                        <div className="my-3 px-3">
                            <h5 className="font-bold text-[18px]">{Intl.NumberFormat("pt-br",{style: 'currency', currency:'BRL'}).format(car.price_per_day)}/ <span className="text-[#848484] font-light text-sm">Diária</span></h5>
                            {/* <button className="bg-[#3E5EF0] text-white rounded-full max-w-20 w-full px-1 py-2 cursor-pointer transition-all duration-500 hover:bg-blue-700">Alugar</button> */}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}