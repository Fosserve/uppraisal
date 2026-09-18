"use client";

import Link from "next/link";
import Image from "next/image";
import image8 from "../../public/office-skyscrapers-business-district.jpg";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative bg-[#fbfaf6] overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="pointer-events-none absolute -right-32 -top-20 -z-10 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl animate-pulse-subtle" />
      <div className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />

      <main className="relative isolate">
        <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50/90 border border-blue-200/60 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-xs mb-5">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>People • Potential • Progress</span>
            </div>

            <h1 className="max-w-xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              Build the team that moves your business{" "}
              <span className="gradient-text">forward.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              Practical HR and recruitment solutions for ambitious businesses across India. We connect the right talent, compliance, and culture to create sustainable growth.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
              >
                <span>Explore our services</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-slate-200/80 px-5 py-3 text-sm font-semibold text-slate-700 shadow-xs transition-all duration-200 hover:bg-slate-50 hover:text-blue-600 hover:border-slate-300"
              >
                <span>Why Uppraisal?</span>
                <span className="text-blue-600">↗</span>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-slate-200/70 text-xs sm:text-sm font-medium text-slate-600">
              {["Kolkata Headquarters", "Pan-India Reach", "Client-First Execution"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100/80 text-blue-700">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px]"
          >
            {/* Decorative Floating Elements */}
            <div className="absolute -right-4 -top-6 h-28 w-28 rounded-full border border-blue-200/80 animate-float sm:-right-8" />
            <div className="absolute -left-6 top-12 h-16 w-16 rounded-full bg-blue-100/50 blur-lg" />

            {/* Experience Badge */}
            <div className="absolute -bottom-5 -left-2 sm:-left-6 z-20 rounded-2xl bg-slate-950/95 backdrop-blur-md px-6 py-4 text-white shadow-2xl border border-slate-800 transition-transform duration-300 hover:scale-105">
              <p className="text-3xl font-bold tracking-tight text-blue-400">10+ yrs</p>
              <p className="mt-0.5 text-xs font-medium text-slate-300">Of building better workplaces</p>
            </div>

            {/* Main Image with Gradient Overlay */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/15 ring-1 ring-slate-900/10">
              <Image
                alt="Modern business district"
                src={image8}
                priority
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
              
              <div className="absolute bottom-6 right-6 max-w-[200px] text-right">
                <p className="text-sm font-medium leading-snug text-white/90 drop-shadow-sm">
                  Human insight for business decisions that matter.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
