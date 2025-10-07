'use client';

import Image from "next/image";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCar, FaUserTie } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Services() {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: "#services",
            start: "top 90%",
            },
        });

        tl.fromTo(
            ".service-title",
            { y: -40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        ).fromTo(
            ".service-paragraph",
            { y: -30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
            "-=0.4"
        );

        tl.fromTo(
            ".service-box",
            { y: 60, opacity: 0, scale: 0.8 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.3, ease: "back.out(1.7)" }
        );

        gsap.fromTo(
            ".service-benefit",
            { x: -60, opacity: 0 },
            {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".service-benefit",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            }
        );

        gsap.fromTo(
            ".service-benefit-img",
            { x: 60, opacity: 0 },
            {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".service-benefit-img",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            }
        );

        gsap.fromTo(
            ".service-benefit button",
            { scale: 0.8, opacity: 0 },
            {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.6)",
            scrollTrigger: {
                trigger: ".service-benefit button",
                start: "top 85%",
                toggleActions: "play none none none",
            },
            }
        );
        }, []);


    return (
        <>
            <div id="services" className="container py-12 mt-20">
                <h2 className="text-center text-xl font-bold service-title">Nossos serviços</h2>
                <p className="service-paragraph mt-2 font-normal text-gray-500 text-center block mx-auto">Tudo de melhor para seu conforto em sua viagem</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-16 lg:gap-0 mt-20">
                    <div className="service-box bg-white h-full p-3 rounded-lg max-w-80 w-full flex flex-col gap-3 justify-center items-center">
                        <div className="-mt-10 w-16 h-16 rounded-full grid place-items-center bg-[#fafafb] border border-[#DFE5F6]">
                            <FaCar className="text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold">Aluguel de Carros</h3>
                        <p className="font-normal text-gray-500 text-sm">
                            Escolha entre nossa frota de veículos modernos, desde carros econômicos até modelos de luxo, com aluguel diário ou por longo prazo.
                        </p>
                    </div>
                    <div className="service-box bg-white h-full p-3 rounded-lg max-w-80 w-full flex flex-col gap-3 justify-center items-center">
                        <div className="-mt-10 w-16 h-16 rounded-full grid place-items-center bg-[#fafafb] border border-[#DFE5F6]">
                            <FaUserTie className="text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold">Locação de Carros com Chauffeur</h3>
                        <p className="font-normal text-gray-500 text-sm">
                            Ofereça um toque de sofisticação ao seu evento ou viagem com nosso serviço de motorista particular.
                        </p>
                    </div>
                    <div className="service-box bg-white h-full p-3 rounded-lg max-w-80 w-full flex flex-col gap-3 justify-center items-center">
                        <div className="-mt-10 w-16 h-16 rounded-full grid place-items-center bg-[#fafafb] border border-[#DFE5F6]">
                            <FaCalendarCheck className="text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold">Aluguel para Longo Prazo</h3>
                        <p className="font-normal text-gray-500 text-sm">
                            Para quem precisa de um carro por um período mais longo, oferecemos planos especiais e flexíveis.
                        </p>
                    </div>
                </div>
                <div className="mt-38 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 place-items-center m-auto">
                    <div className="service-benefit max-w-80 w-full flex flex-col gap-5">
                        <h2 className="text-xl font-bold">Conheça os Beneficios em Alugar Com Nossa Empresa</h2>
                        <ol className="list-decimal list-inside text-base text-gray-900 font-normal pl-5 space-y-2">
                            <li>Frota diversificada com modelos de carros para todos os gostos e necessidades</li>
                            <li>Atendimento 24 horas e suporte ao cliente sempre que disponível</li>
                            <li>Processos de aluguel rápidos e sem burocracia, com locação facil e transparente</li>
                            <li>Planos flexíveis, com aluguel diário, semanal ou mensal</li>
                        </ol>
                        <button className="bg-black text-white p-3 rounded-xl max-w-40 w-full font-semibold cursor-pointer block mx-auto transition-all duration-500 hover:bg-blue-400">Reserve agora</button>
                    </div>
                    <Image className="service-benefit-img max-w-md rounded-lg w-full object-cover" src="/images/rental-service.webp" width={500} height={500} alt="foto do serviço de aluguel" />
                </div>
            </div>
        </>
    )
}