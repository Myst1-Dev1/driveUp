'use client';

import { FaCreditCard, FaHandHoldingDollar, FaUserClock } from "react-icons/fa6";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function MarketPlace() {

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '#marketplace',
            start: 'top 90%',
            once: true,
            onEnter:() => {
                const tl = gsap.timeline({defaults: {duration: 1, ease: 'power2.out'}});
                tl.fromTo('.mkt-subtitle', {y: 50, opacity: 0}, {y: 0, opacity: 1});
                tl.fromTo('.mkt-description', {y: 50, opacity: 0}, {y: 0, opacity: 1});
                tl.fromTo('.mkt-box', {y: 50, opacity: 0}, {y: 0, opacity: 1, stagger: 0.2});
            }
        })
    },[]);

    return (
        <>
            <div id="marketplace" className="container mt-20 lg:-mt-10">
                 <h2 className="mkt-subtitle text-center text-xl font-bold">Os Beneficios de Alugar com a Drive Up</h2>
                 <p className="mkt-description text-sm text-gray-400 font-normal text-center mt-3">Tudo de melhor para alugar um carro</p>
                 <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-6 py-10">
                    <div className="mkt-box h-full py-8 rounded-md max-w-md w-full p-3 bg-blue-50 grid grid-cols-1 place-items-center gap-3">
                        <div className="bg-gray-50 rounded-full w-10 h-10 grid place-items-center">
                            <FaCreditCard />
                        </div>
                        <h3 className="font-semibold">Não é necessário cartão de crédito</h3>
                        <p className="text-gray-400 font-normal text-center text-sm">Toque no ícone Alugar no aplicativo Cabx e complete sua reserva. Você pode optar por pagar antecipadamente para economizar dinheiro.</p>
                    </div>
                    <div className="mkt-box py-8 rounded-md max-w-md w-full p-3 bg-gray-100 grid grid-cols-1 place-items-center gap-3">
                        <div className="bg-gray-50 rounded-full w-10 h-10 grid place-items-center">
                            <FaUserClock />
                        </div>
                        <h3 className="font-semibold">Check-in super rápido</h3>
                        <p className="text-gray-400 font-normal text-center text-sm">Com o check-in super rápido, você economiza tempo ao chegar. Basta alguns toques no app para confirmar seus dados e começar a aproveitar sua experiência sem filas nem burocracia.</p>
                    </div>
                    <div className="mkt-box h-full py-8 rounded-md max-w-md w-full p-3 bg-orange-50 grid grid-cols-1 place-items-center gap-3">
                        <div className="bg-gray-50 rounded-full w-10 h-10 grid place-items-center">
                            <FaHandHoldingDollar />
                        </div>
                        <h3 className="font-semibold">Sem custo extra na chegada</h3>
                        <p className="text-gray-400 font-normal text-center text-sm">Garanta total transparência: ao chegar, não haverá taxas ou cobranças adicionais. O valor que você vê é o que paga, sem surpresas.</p>
                    </div>
                 </div>
            </div>
        </>
    )
}