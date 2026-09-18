"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "We have engaged Uppraisal Consultant for our recruitment needs over the last two years and it is unquestionably one of the finest HR consultancies across West Bengal and India. Their turnaround time, candidate quality, and professional communication earn them a top rank from our leadership.",
    author: "Kaushik Sinha",
    role: "Head of HR",
    company: "Trishan Metals Pvt. Ltd.",
    featured: true,
  },
  {
    quote:
      "I have had a feeling of immense satisfaction whenever I turned to Uppraisal for specialized manpower. Uppraisal not only delivered talent promptly but ensured culturally and technically aligned candidates who stayed and contributed.",
    author: "Chayan Bhattacharjee",
    role: "Head of HR",
    company: "Kutchina Homemakers Pvt. Ltd.",
    featured: false,
  },
  {
    quote:
      "One of the fastest-growing employment consultancies with an extraordinarily enriched candidate database. They anticipate compliance nuances and deliver verified profiles for specialized positions effortlessly.",
    author: "N. Chakravarti",
    role: "Compliance Manager",
    company: "Power Agro Farms Pvt. Ltd.",
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate bg-white py-20 sm:py-28 overflow-hidden">
      {/* Decorative gradient blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0a7aff]/20 to-[#84d5ff]/30 opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Client Testimonials</p>
          <h2 className="section-title">
            Trusted by Industry Leaders Across Sectors
          </h2>
          <p className="section-subtitle mx-auto">
            Read what HR directors and corporate leaders have to say about our recruitment accuracy, speed, and professionalism.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                t.featured
                  ? "bg-slate-900 text-white shadow-2xl ring-1 ring-slate-800 lg:-translate-y-2"
                  : "bg-slate-50/80 border border-slate-200/80 text-slate-900 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 fill-amber-400 text-amber-400`}
                      />
                    ))}
                  </div>
                  <Quote
                    className={`h-8 w-8 ${
                      t.featured ? "text-blue-500/40" : "text-blue-600/20"
                    }`}
                  />
                </div>

                <blockquote className="text-base sm:text-lg leading-relaxed font-normal">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div
                className={`mt-8 pt-6 border-t ${
                  t.featured ? "border-slate-800" : "border-slate-200"
                }`}
              >
                <div className="font-bold tracking-tight text-base">
                  {t.author}
                </div>
                <div
                  className={`text-xs mt-0.5 ${
                    t.featured ? "text-blue-400" : "text-blue-600"
                  } font-semibold`}
                >
                  {t.role}
                </div>
                <div
                  className={`text-xs mt-0.5 ${
                    t.featured ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {t.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
