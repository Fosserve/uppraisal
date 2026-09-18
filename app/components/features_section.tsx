"use client";

import Link from "next/link";
import { Briefcase, Users, Search, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "Permanent Staffing Solution (PSS)",
    description:
      "Precision candidate mapping matching cultural resonance, competencies, and long-term retention goals.",
    href: "/services",
    icon: Briefcase,
    color: "from-blue-600 to-cyan-600",
  },
  {
    name: "Payroll & Compliance",
    description:
      "End-to-end statutory compliance, wage management, and post-disbursement advisory to safeguard your business.",
    href: "/services",
    icon: ShieldCheck,
    color: "from-indigo-600 to-blue-600",
  },
  {
    name: "Training & Development",
    description:
      "High-impact soft skills, motivational workshops, and role-based training programs to elevate team output.",
    href: "/services",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Executive Search",
    description:
      "Confidential, tailored headhunting for C-suite (CEO, CFO, COO, HRD, CIO) and strategic business leaders.",
    href: "/services",
    icon: Search,
    color: "from-cyan-600 to-blue-600",
  },
  {
    name: "Temporary & Contract Staffing",
    description:
      "Agile workforce scaling with vetted talent ready to deploy for seasonal spikes or specialized projects.",
    href: "/services",
    icon: Clock,
    color: "from-blue-600 to-violet-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      {/* Background Soft Grid */}
      <div className="absolute inset-0 soft-grid opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow justify-center">What We Do</p>
          <h2 className="section-title">
            Tailored HR Solutions Across Every Stage of Growth
          </h2>
          <p className="section-subtitle mx-auto">
            We partner with businesses to identify, cultivate, and empower top talent through rigorous methodologies and dedicated relationship managers.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/90 p-7 shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} p-3 text-white shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    {feature.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={feature.href}
                    className="inline-flex items-center text-xs font-semibold text-blue-600 transition-all duration-200 group-hover:text-blue-700"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <span className="text-xs font-mono font-medium text-slate-400">0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}

          {/* Bonus CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-7 text-white shadow-xl"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-400/30">
                Custom Advisory
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                Have a unique requirement?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Let our senior consultants design a bespoke HR strategy tailored to your industry, headcount, and growth timeline.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href="#footer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Speak with an expert</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
  