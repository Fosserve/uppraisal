"use client";

import Image from "next/image";
import image1 from "../../public/team/img1.jpg";
import image2 from "../../public/team/image2.jpg";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const people = [
  {
    name: "Jolly Chakraborty",
    role: "Founder & Director",
    imageUrl: image1,
    linkedin: "https://www.linkedin.com/in/jolly-chakraborty-77539b165/",
    bio: "Graduated with PGPRM from IISWBM Kolkata. Extensive leadership experience across Manufacturing and Talent Acquisition, specializing in Executive Search, Workforce Strategy, and Operations since 2015.",
  },
  {
    name: "Sukanya Guha Das",
    role: "Co-Founder & HR Head",
    imageUrl: image2,
    linkedin: "https://www.linkedin.com/in/sukanya-guha-das-17572034a/",
    bio: "Holds an MBA in HR from EIM Kolkata. Rich cross-sector background in Software, Hospitality, and Consulting, steering high-volume recruitment, compliance frameworks, and organizational training.",
  },
];

export default function TeamSection() {
  return (
    <section className="relative bg-[#fbfaf6] py-20 sm:py-28 overflow-hidden border-t border-slate-200/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">Executive Leadership</p>
          <h2 className="section-title">
            Guided by Seasoned Industry Visionaries
          </h2>
          <p className="section-subtitle mx-auto">
            Decades of combined expertise delivering precision talent acquisition and organizational transformation across India.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {people.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 rounded-3xl bg-white border border-slate-200/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="relative h-44 w-44 sm:h-48 sm:w-48 flex-shrink-0 overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-900/5">
                <Image
                  alt={person.name}
                  src={person.imageUrl}
                  fill
                  sizes="192px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 mt-0.5">
                      {person.role}
                    </p>
                  </div>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name}'s LinkedIn profile`}
                    className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 font-sans">
                  {person.bio}
                </p>

                <div className="mt-4 flex sm:hidden justify-center">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
