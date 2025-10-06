'use client';

import { CarType } from "@/@types/Car";
import { createRental } from "@/actions/rentalActions";
import { Gallery } from "@/components/gallery";
import { Loading } from "@/components/loading";
import { Modal } from "@/components/modal";
import { ReviewForm } from "@/components/principal/reviewForm";
import { useAppSelector } from "@/services/store/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useActionState, useState, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { Testimonials } from "./testimonials";

interface CarContentProps {
    data: CarType;
}

export function CarContent({ data }:CarContentProps) {
    const { data: user } = useAppSelector(s => s.user);
    
    const actionWithId = async (prevState: any, formData: FormData) => {
        return await createRental(prevState, formData, user?.data[0].userId, data?.id);
    };
    
    const [formState, formAction, pending] = useActionState(actionWithId, { success: false });
    const [openRentalModal, setOpenRentalModal] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
    const ctx = gsap.context(() => {

      gsap.from(".gallery", {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery",
          start: "top 85%",
        },
      });

      gsap.from(".car-info > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".car-info",
          start: "top 85%",
        },
      });

      gsap.from(".car-specs h6", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".car-specs",
          start: "top 85%",
        },
      });

      gsap.fromTo(".price-box",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: ".price-box",
            start: "top 80%",
          },
        }
      );

       gsap.fromTo(".reserve-btn",
        { scale: 0.8, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: ".reserve-btn",
            start: "top 95%",
          },
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

    return (
        <>
            <div ref={containerRef} className="container py-12 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
                <div className="max-w-xl w-full gallery">
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
                <div className="flex flex-col gap-8 car-info">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl font-bold">{data?.name}</h2>
                        <span className="font-light text-xs text-gray-500">{data?.car_model}</span>
                        <p className="font-medium text-sm indent-5 leading-relaxed text-justify">{data?.description}</p>
                    </div>
                    <div className="car-specs grid grid-cols-1 lg:grid-cols-2">
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Ano do Carro: {data?.year}</h6>
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Número de passageiros: {data?.passengers}</h6>
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Combustível: {data?.fuel}</h6>
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Capacidade do Combustível: {data?.fuel === 'Elétrico' ? 'Elétrico' : `${data?.fuel_capacity}L`}</h6>
                        <h6 className="font-normal text-gray-900 text-sm mb-2">Transmissão: {data?.transmission}</h6>
                    </div>
                    <div className="price-box">
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
                <button onClick={() => setOpenRentalModal(true)} className={`${data?.availability === true ? 'opacity-50 cursor-none' : 'cursor-pointer'} reserve-btn bg-black text-white block mx-auto p-3 max-w-40 w-full font-semibold mt-12 rounded-lg transition-all duration-500 hover:bg-blue-500`}>{data?.availability === true ? 'Já reservado' : 'Reserve Agora'}</button>
            </div>

            <Testimonials data={data} />

            <ReviewForm id={data?.id} />
            <Modal isOpenModal={openRentalModal} setIsOpenModal={setOpenRentalModal} maxWidth="max-w-md">
                <h3 className="text-lg font-semibold text-center">Reserve o Carro Para Sua Viagem</h3>
                <form action={formAction} className="py-8">
                    <div className="flex justify-between flex-col lg:flex-row gap-5 lg:gap-0">
                        <div className="flex flex-col gap-3">
                            <label className="font-semibold" htmlFor="startDate">Data de retirada</label>
                            <input type="date" name="startDate" className="input text-[#757575] lg:w-[202px] w-full" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="font-semibold" htmlFor="endDate">Data de devolução</label>
                            <input type="date" name="endDate" className="input text-[#757575] lg:w-[202px] w-full" />
                        </div>
                    </div>
                    <div className="flex justify-between flex-col lg:flex-row gap-5 mt-5">
                        <div className="flex flex-col gap-3">
                            <label className="font-semibold" htmlFor="pickupLocation">Local de retirada</label>
                            <input type="text" name="pickupLocation" placeholder="Rua San Loren" className="input" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="font-semibold" htmlFor="dropoffLocation">Local de devolução</label>
                            <input type="text" name="dropoffLocation" placeholder="Av Lorem Ipsum" className="input" />
                        </div>
                    </div>
                    {formState.message && <p className={`py-4 ${formState.success === false ? 'text-red-600' : 'text-green-500'}`}>{formState.message}</p>}
                    <button className={`mt-7 block mx-auto max-w-60 w-full rounded-lg p-3 bg-black text-white font-semibold ${pending ? 'cursor-not-allowed' : 'cursor-pointer'} transition-all duration-500 hover:bg-blue-400`}>
                        {pending ? <Loading /> : 'Fazer Reserva'}
                    </button>
                </form>
            </Modal>
        </>
    )
}