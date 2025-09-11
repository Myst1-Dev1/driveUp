import { CarType } from "@/@types/Car";
import { Profile } from "@/@types/Profile";
import { cancelRental, returnRental } from "@/actions/rentalActions";
import Image from "next/image";
import { FaTimes, FaUndo } from "react-icons/fa";

interface UserReservesProps {
    cars: CarType[];
    profile: Profile;
}

export function UserReserves({ cars, profile }:UserReservesProps) {
    const rentedCarIds = profile?.rentalHistory?.map(r => r.carId) || [];
    const reserveData = cars?.filter(car => rentedCarIds.includes(car.id));

    return (
        <>
            <div className="grid grid-cols-1 overflow-y-auto h-full scrollDontShow lg:h-[420px] 2xl:grid-cols-2 gap-5">
                {reserveData.length === 0 ? 'Nenhuma reserva feita' : reserveData?.map(car => {
                    const carRentals = profile?.rentalHistory?.filter(rental => rental.carId === car.id) || [];

                    return (
                        <div key={car.id}>
                        {carRentals[0].status === 'finalizado' || carRentals[0].status === 'cancelado' ? '' :
                            <div className="flex flex-col lg:flex-row items-center gap-5 border border-gray-300 rounded-lg p-3 lg:max-w-[500px] w-full">
                                <Image className="w-52 object-cover" src={car.image_url || "/images/car.png"} width={200} height={200} alt="foto do carro reservado" />
                                <div className="flex flex-col">
                                    <h5 className="font-semibold text-xl">{car.name}</h5>
                                    <span className="font-light text-gray-500">{car.car_model}</span>
                                    
                                    {carRentals.length > 0 && (
                                        <div key={carRentals[0].id}>
                                            <div className="flex gap-5 w-full py-3">
                                                <div className="flex flex-col gap-2">
                                                    <h6>Retirada</h6>
                                                    <h6>
                                                        {new Date(carRentals[0].startDate).toLocaleDateString("pt-BR", {
                                                            day: "2-digit",
                                                            month: "2-digit",
                                                            year: "numeric",
                                                        })}
                                                    </h6>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <h6>Devolução</h6>
                                                    <h6>
                                                        {new Date(carRentals[0].endDate).toLocaleDateString("pt-BR", {
                                                            day: "2-digit",
                                                            month: "2-digit",
                                                            year: "numeric",
                                                        })}
                                                    </h6>
                                                </div>
                                            </div>
                                            <span className="font-semibold text-xl">Preço Total: 
                                                 {Intl.NumberFormat('pt-br', {
                                                    style: 'currency',
                                                    currency:'BRL'
                                                }).format(carRentals[0].totalPrice)}
                                            </span>
                                            <div className="flex gap-5 w-full mt-5">
                                                <button onClick={() => returnRental(carRentals[0].id)} className="lg:max-w-28 w-full h-10 rounded-lg bg-black text-white flex items-center gap-3 p-2 cursor-pointer transition-all duration-500 hover:bg-blue-400">Devolver <FaUndo /></button>
                                                <button onClick={() => cancelRental(carRentals[0].id)} className="lg:max-w-60 w-full h-10 rounded-lg bg-red-600 text-white flex items-center gap-3 p-2 cursor-pointer transition-all duration-500 hover:bg-blue-400">Cancelar <FaTimes /></button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            }
                        </div>
                    );
                })}
            </div>
        </>
    )
}