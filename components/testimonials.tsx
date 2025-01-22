"use client"
import Image from "next/image";
import { useState } from "react";

// Testimonial Data
const testimonials = [
  {
    text: "One of the fastest growing employment consultancy having highly enriched candidate base for fulfilling customer needs as and when required. Compliance Manager POWER ARGO FARMS PVT. LTD ",
    name: "N Chakravarti",
    role: "CEO of Company A",
    image: "/images/testimonial-1.jpg",
  },
  {
    text: "I had a feeling of great satisfaction whenever I turned to Uppraisal for providing manpower. Uppraisal not only provided the manpower at the right time but also the right fit manpower. Head HR - KUTCHINA HOMEMAKERS PVT.LTD. ",
    name: "Chayan Bhattacharjee",
    role: "Founder of Company B",
    image: "/images/testimonial-2.jpg",
  },
  {
    text: "We have taken your respective organization service since last two years and we must say it is one of the best consultancy in across India and in west Bengal from my end it is a No.01 Rank. Your team members are well experienced and professional. Head HR TRISHAN METALS PVT.LTD",
    name: "KAUSHIK SINHA",
    role: "COO of Company C",
    image: "/images/testimonial-3.jpg",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { text, name, role, image } = testimonials[currentIndex];

  return (
    <section className="relative isolate overflow-hidden bg-background py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-semibold text-primary">What our clients say</p>
          <div className="relative mt-12">
            <div className="text-center">
              <blockquote className="text-xl font-semibold text-muted-foreground sm:text-2xl">
                <p>"{text}"</p>
              </blockquote>
            </div>
            <div className="mt-8 text-center">
              <img
                src={image}
                alt={name}
                className="mx-auto h-16 w-16 rounded-full object-cover"
              />
              <div className="mt-4 text-base text-textColor">
                <div className="font-semibold text-primary">{name}</div>
                <div>{role}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={prevTestimonial}
            className="h-12 w-12 bg-accent text-white rounded-full focus:outline-none"
          >
            &lt;
          </button>
          <button
            onClick={nextTestimonial}
            className="h-12 w-12 bg-accent text-white rounded-full focus:outline-none"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
