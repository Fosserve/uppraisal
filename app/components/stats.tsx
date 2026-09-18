"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Building2, Users2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "Explore careers", href: "/careers" },
  { name: "Our values & mission", href: "/about-us" },
  { name: "Full service suite", href: "/services" },
];

const stats = [
  { name: "Registered Candidates", value: "10,000+", icon: Users2 },
  { name: "Corporate & MNC Clients", value: "100+", icon: Building2 },
  { name: "Successful Placements", value: "2,000+", icon: Award },
  { name: "Active Job Openings", value: "50+", icon: Briefcase },
];

export default function WorkWithUs() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-20 sm:py-28">
      {/* Background Image with Dark Overlay */}
      <Image
        alt="Team collaboration"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=1600&q=80"
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-15"
      />

      {/* Decorative gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-20rem]"
      >
        <div className="aspect-[1097/845] w-[68rem] bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/20 px-3.5 py-1 text-xs font-semibold text-blue-400">
            Impact in Numbers
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Partner With a Proven HR Powerhouse
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            Since 2015, we have accelerated workforce performance for leading enterprises and fast-growing organizations with strategic, end-to-end talent solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
              >
                <span>{link.name}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/80 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-3 text-sm font-medium text-slate-400 leading-snug">
                  {stat.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
  