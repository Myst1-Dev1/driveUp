'use client';

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Contact() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.7, ease: "power3.out" } });

    tl.fromTo(".contact-img", { x: -40, scale:0, opacity: 0 }, { x: 0, scale:1, opacity: 1 });

    tl.fromTo(".contact-title", { y: -40, opacity: 0 }, { y: 0, opacity: 1 });
    tl.fromTo(".contact-subtitle", { y: -20, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.4");

    tl.fromTo(".contact-input", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, delay: 0.2 });

    tl.fromTo(".contact-btn", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" });
  }, []);

  return (
    <div id="contact" className="container py-12 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 place-items-center">
      <Image
        className="contact-img  max-w-md w-full object-cover rounded-lg"
        src="/images/contact-img.webp"
        width={500}
        height={500}
        alt="foto da página de contato"
      />
      <div>
        <h2 className="text-xl text-center mb-2 font-bold contact-title">Entre em Contato e Alugue um Carro</h2>
        <p className="font-normal text-gray-500 text-sm text-center block px-auto contact-subtitle">
          O melhor com o maior conforto para sua viagem
        </p>
        <form action="" className="flex flex-col gap-4 mt-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <input type="text" className="input contact-input" placeholder="Nome" />
            <input type="email" className="input contact-input" placeholder="Email" />
          </div>
          <input type="text" className="input contact-input" placeholder="Assunto" />
          <textarea className="input h-32 resize-none contact-input" placeholder="Mensagem" />
          <button className="mt-3 bg-black text-white block mx-auto max-w-40 w-full rounded-xl p-3 cursor-pointer font-semibold transition-all duration-500 hover:bg-blue-400 contact-btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}