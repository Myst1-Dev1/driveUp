'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export function Intro() {

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(".intro-title", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
        tl.fromTo(".intro-description", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
        tl.fromTo(".intro-btn", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
        tl.fromTo(".intro-car", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
    }, []);

    return (
        <>
            <div className="relative flex justify-center flex-col gap-3 items-center w-full min-h-[60vh] lg:min-h-screen rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[500px] lg:rounded-br-[500px] overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/video/intro-bg.mp4" type="video/mp4" />
                </video>

                <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

                <h1 className="intro-title text-white text-center font-bold text-2xl lg:text-4xl z-10">
                    A Melhor Plataforma Para <br /> Aluguel de Carros
                </h1>
                <p className="intro-description font-light text-sm text-white text-center max-w-80 w-full z-10">
                    Abrimos a porta para você explorar o mundo com conforto e estilo, sendo seu parceiro de viagem de confiança
                </p>
                <Link
                    href="#carros"
                    className="intro-btn z-40 text-center block mx-auto max-w-32 w-full p-3 bg-black text-white rounded-full border-none cursor-pointer mt-4 font-semibold transition-all duration-500 hover:bg-blue-600"
                >
                    Ver Carros
                </Link>
            </div>
            <Image
                className="intro-car m-auto -mt-32 lg:-mt-[260px] max-w-3xl w-full relative z-20"
                src="/images/car-intro.png"
                width={800}
                height={300}
                alt="carro da introdução"
            />
        </>
    );
}