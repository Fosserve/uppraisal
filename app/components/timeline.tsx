"use client";

import { FileSearch, Users, Filter, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  {
    name: "Job Analysis & Planning",
    description: "Collaborative role definition, benchmark mapping, and customized candidate personas.",
    step: "01",
    icon: FileSearch,
  },
  {
    name: "Targeted Talent Sourcing",
    description: "Multichannel outreach tapping our active 10,000+ candidate network and industry referrals.",
    step: "02",
    icon: Users,
  },
  {
    name: "Rigorous Screening & Shortlist",
    description: "Technical evaluations, background verifications, and cultural resonance assessments.",
    step: "03",
    icon: Filter,
  },
  {
    name: "Selection & Onboarding",
    description: "Offer negotiations, smooth transition support, and post-placement check-ins.",
    step: "04",
    icon: CheckCircle2,
  },
];

export default function Timeline() {
  return (
    <section className="relative bg-[#fbfaf6] py-20 sm:py-28 overflow-hidden border-t border-slate-200/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Proven Methodology</p>
          <h2 className="section-title">
            Our 4-Step Recruitment Process
          </h2>
          <p className="section-subtitle mx-auto">
            A transparent, outcome-oriented workflow engineered to find high-performing professionals quickly and reliably.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting Line across desktop */}
          <div className="hidden lg:block absolute top-14 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-600/60 to-blue-500/20 -z-0" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600/70 bg-blue-50/60 px-2.5 py-1 rounded-full">
                      Step {item.step}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
  