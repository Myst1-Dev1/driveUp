'use client';

import React, { useMemo, useState } from "react";
import { GalleryLightbox } from "./lightBox";

type GalleryProps = {
  baseImage: string;
  otherImages?: string[];
  className?: string;
};

export function Gallery({ baseImage, otherImages = [], className }: GalleryProps) {
  const images = useMemo(() => {
    const rest = otherImages.filter((i) => i && i !== baseImage);
    return [baseImage, ...rest];
  }, [baseImage, otherImages]);

  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const next = () => setCurrent((p) => (p + 1) % images.length);
  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);

  return (
    <>
      <div className={className}>
        <button
          className="cursor-pointer block w-full rounded-xl overflow-hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Ampliar imagem"
        >
          <img
            className="w-full h-96 object-cover"
            src={images[current]}
            alt={`Imagem ${current + 1} de ${images.length}`}
            draggable={false}
          />
        </button>

        <div className="mt-7 max-w-xl w-full overflow-x-auto snap-x snap-mandatory scrollGallery flex gap-4">
          {images.map((src, index) => (
            <button
              key={index}
              className={`cursor-pointer relative shrink-0 rounded-lg overflow-hidden  snap-start border ${
                index === current ? "border-blue-600" : "border-transparent"
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Selecionar imagem ${index + 1}`}
            >
              <img
                className="h-24 w-32 object-cover"
                src={src}
                alt={`Miniatura ${index + 1}`}
                draggable={false}
              />
            </button>
          ))}
        </div>
      </div>

      <GalleryLightbox
        isOpen={isOpen}
        images={images}
        index={current}
        onClose={() => setIsOpen(false)}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
