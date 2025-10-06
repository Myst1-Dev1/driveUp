'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Counter({ start = 0, end }: { start?: number; end: number }) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const obj = { value: start };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        value: end,
        duration: 2,
        ease: 'power1.out',
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = Math.floor(obj.value).toLocaleString('pt-BR');
          }
        },
      });
    }, numberRef);

    return () => ctx.revert();
  }, [end]);

  return <span ref={numberRef}>{start}</span>;
}