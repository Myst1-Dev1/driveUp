'use client';

import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type GalleryLightboxProps = {
  isOpen: boolean;
  images: string[];          
  index: number;              
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function GalleryLightbox({
  isOpen,
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Fechar com ESC e navegar com ← →
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de imagens"
      onClick={(e) => {
        // fechar ao clicar fora do conteúdo
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Conteúdo central */}
      <div className="absolute top-1/2 left-1/2 w-[min(92vw,1100px)] -translate-x-1/2 -translate-y-1/2">
        <div className="relative rounded-xl overflow-hidden bg-black">
          <img
            src={images[index]}
            alt={`Imagem ${index + 1} de ${images.length}`}
            className="w-full max-h-[75vh] object-contain bg-black"
            draggable={false}
          />

          {/* Setas */}
          <button
            className="cursor-pointer absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 grid place-items-center rounded-md text-xl transition-colors hover:bg-blue-600"
            onClick={onPrev}
            aria-label="Imagem anterior"
          >
            <FaArrowLeft />
          </button>
          <button
            className="cursor-pointer absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 grid place-items-center rounded-md text-xl transition-colors hover:bg-blue-600"
            onClick={onNext}
            aria-label="Próxima imagem"
          >
            <FaArrowRight />
          </button>

          {/* Fechar */}
          <button
            className="cursor-pointer absolute top-3 right-3 bg-black/40 text-white w-10 h-10 grid place-items-center rounded-md text-xl transition-colors hover:bg-blue-600"
            onClick={onClose}
            aria-label="Fechar"
          >
            <FaTimes />
          </button>
        </div>

        {/* Tira de thumbs no modal */}
        <div className="mt-4 flex gap-3 overflow-x-auto">
          {images.map((src, i) => (
            <button
              key={i}
              className={`relative shrink-0 rounded-lg overflow-hidden border ${
                i === index ? "border-blue-600" : "border-transparent"
              }`}
              onClick={() => {
                // clique em thumb = ir direto
                const delta = i - index;
                if (delta === 0) return;
                if (delta > 0) for (let k = 0; k < delta; k++) onNext();
                if (delta < 0) for (let k = 0; k < Math.abs(delta); k++) onPrev();
              }}
              aria-label={`Ir para imagem ${i + 1}`}
            >
              <img
                src={src}
                alt={`Miniatura ${i + 1}`}
                className="h-20 w-32 object-cover"
                draggable={false}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}