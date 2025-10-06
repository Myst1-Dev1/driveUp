'use client'

import { CarType } from "@/@types/Car";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialsProps {
  data: CarType;
}

export function Testimonials({ data }: TestimonialsProps) {
  // const [activeIndex, setActiveIndex] = useState(1);

  useGSAP(() => {
    gsap.fromTo(
      '.testimonial-title',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonial-title',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    gsap.fromTo(
      '.testimonial-card',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.testimonial-card',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <>
      {data?.reviews.length === 0 ? <p className="text-center font-medium text-lg text-blue-600">Este carro não possui avaliações</p>
      :

      <div className="container py-20">
          <h2 className="font-bold text-xl text-center testimonial-title">Avaliações de clientes</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center py-16">
              {data?.reviews.map((review, index:number) => (
                  <div key={index} className="testimonial-card bg-[#F3F5F7] p-3 rounded-xl max-w-md w-full flex flex-col gap-4">
                      <FaQuoteLeft className="text-blue-500 text-xl" />
                      <p className="font-medium text-sm">{review.comment}</p>
                      <div className="flex items-center gap-3">
                          <Image className="w-10 h-10 rounded-full object-cover" src={review.avatarUrl || "/images/user.jpg"} width={200} height={200} alt="foto do usuário que avaliou o carro" />
                          <h6 className="font-semibold">{review.name}</h6>
                      </div>
                  </div>
              ))}
          </div>
      </div>

    // <div className="container py-20">
    //   <h2 className="font-bold text-xl mb-10">Avaliações de clientes</h2>

    //   <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
    //     <div className="relative overflow-y-hidden h-[240px] flex flex-col items-start space-y-12 lg:col-span-1">
    //         <div className="absolute z-10 -left-[330px] -top-5 h-full w-[400px] border-r-2 border-gray-200 rounded-full"></div>

    //         {data?.reviews.map((review, index:number) => (
    //           <div key={index} 
    //             onClick={() => setActiveIndex(index)}
    //             className={`testimonial-item flex items-center gap-4 relative z-20 cursor-pointer transition-all duration-500 ${index === 1 ? 'translate-x-8' : ''} ${activeIndex === index ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
    //           >
    //               <Image
    //               src={review.avatarUrl || "/images/user.jpg"}
    //               width={60}
    //               height={60}
    //               alt="foto do avaliador"
    //               className="w-12 h-12 object-cover rounded-full z-10"
    //               />
    //               <h3 className="font-semibold text-sm">{review.name}</h3>
    //           </div>
    //         ))}
    //     </div>

    //     <div className="lg:col-span-2 flex flex-col justify-center">
    //       <FaQuoteLeft className="text-blue-500 mb-4" />
    //       <p className="testimonial-text italic text-gray-700 text-sm lg:text-base leading-relaxed">
    //         {data.reviews[activeIndex]?.comment}
    //       </p>
    //     </div>
    //   </div>
      
    // </div>
    }
    </>
  );
}