'use client';

import Image from "next/image";
import { FaCogs } from "react-icons/fa";
import { FaBullseye, FaHandshake } from "react-icons/fa6";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Counter } from "@/components/principal/counter";

export default function WoWeAre() {

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '#woWeAre',
            start: 'top 90%',
            once: true,
            onEnter: () => {
                const tl = gsap.timeline({defaults: {duration: 0.7, ease: 'power3.out'}});
                tl.fromTo('.wowetitle', {y: 50, opacity: 0}, {y: 0, opacity: 1});
                tl.fromTo('.wowedcp1', {y: 50, opacity: 0}, {y: 0, opacity: 1});
                tl.fromTo('.wowedcp2', {y: 50, opacity: 0}, {y: 0, opacity: 1});

                gsap.utils.toArray('.counter').forEach((el: any) => {
                const finalValue = parseInt(el.dataset.value);
                
                gsap.fromTo(el, 
                    { innerText: 0 },
                    {
                    innerText: finalValue,
                    duration: 2,
                    delay:0.6,
                    ease: 'power1.out',
                    snap: { innerText: 1 },
                    onUpdate: () => {
                        el.innerText = `${Math.floor(Number(el.innerText))}${finalValue >= 100 ? '+' : ''}`;
                    }
                    }
                );
                });

                tl.fromTo('.xpYears', {y: 50, opacity: 0}, {y: 0, opacity: 1});
                tl.fromTo('.countClients', {y: 50, opacity: 0}, {y: 0, opacity: 1});
                tl.fromTo('.woweImg', {x: -100, opacity: 0}, {x: 0, opacity: 1});
                tl.fromTo('.woweBox', {y: 100, opacity: 0}, {y: 0, opacity: 1, stagger: 0.3});
            }})
    }, []);

    return (
        <>
            <div id="woWeAre" className="container py-12 mt-20">
                <div className="grid grid-cols-1 gap-10 lg:gap-0 place-items-center m-auto lg:grid-cols-2">
                    <div className="flex flex-col gap-3 lg:max-w-md w-full">
                        <h2 className="wowetitle text-2xl font-bold">Quem é a Drive Up?</h2>
                        <p className="wowedcp1 font-light text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className="wowedcp2 font-light text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="flex justify-between">
                            <span className="text-4xl font-bold flex gap-2 items-center">
                                {/* <span className="counter" data-value="3">0</span> */}
                                <Counter start={0} end={3} />
                                <span className="xpYears text-gray-500 text-sm font-normal">
                                    Anos de <br /> Experiência
                                </span>
                            </span>

                            <span className="text-4xl font-bold flex gap-2 items-center">
                                {/* <span className="counter" data-value="600">0</span> */}
                                <Counter start={0} end={600} />
                                <span className="countClients text-gray-500 text-sm font-normal">
                                    Clientes <br /> Satisfeitos
                                </span>
                            </span>
                        </div>
                    </div>
                    <Image className="woweImg max-w-96 h-60 w-full rounded-lg object-cover" src="/images/woWeAreImg.webp" width={500} height={500} alt="foto da chave de um carro sendo entregue" />
                </div>
                <div className="mt-32 grid grid-cols-1 place-items-center gap-8 lg:gap-0 lg:grid-cols-3">
                    <div className="woweBox flex justify-center items-center flex-col gap-3 max-w-80 w-full">
                        <FaBullseye className="text-[#1E4AA8]" />
                        <h3 className="font-bold text-xl">Missão</h3>
                        <p className="font-normal text-gray-500 text-center">
                            Nossa missão é garantir que cada viagem seja confortável e sem preocupações, com uma frota diversificada e serviços personalizados que atendem às necessidades de todos.
                        </p>
                    </div>
                    <div className="woweBox flex justify-center items-center flex-col gap-3 max-w-80 w-full">
                        <FaHandshake className="text-[#1E4AA8]" />
                        <h3 className="font-bold text-xl">Valores</h3>
                        <p className="font-normal text-gray-500 text-center">
                            Acreditamos na importância de oferecer veículos bem mantidos, um atendimento personalizado e soluções rápidas, sempre com o foco na satisfação e segurança de nossos clientes.
                        </p>
                    </div>
                    <div className="woweBox flex justify-center items-center flex-col gap-3 max-w-80 w-full">
                        <FaCogs className="text-[#1E4AA8]" />
                        <h3 className="font-bold text-xl">Diferenciais</h3>
                        <p className="font-normal text-gray-500 text-center">
                            Nosso processo de reserva é rápido e simples, com opções de entrega e retirada no local de sua preferência, além de suporte completo durante todo o período de locação.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}