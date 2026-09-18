"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import image1 from "../../public/team/About.jpg";
import logo10 from "../../public/Clients_logos/Ludlow.png";
import logo11 from "../../public/Clients_logos/Suraksha.png";
import logo12 from "../../public/Clients_logos/RTS.png";
import logo13 from "../../public/Clients_logos/Signum.jpg";
import logo14 from "../../public/Clients_logos/Tenty.png";
import {
  ShieldCheck,
  Handshake,
  Target,
  Users2,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2015",
    name: "Inception & Establishment",
    description:
      "Founded in Kolkata to deliver compliant, high-retention HR advisory and permanent staffing solutions across Eastern India.",
  },
  {
    year: "2017",
    name: "Multisector Service Expansion",
    description:
      "Diversified into IT/Software, Manufacturing, BFSI, and Hospitality verticals with tailored executive search models.",
  },
  {
    year: "2020",
    name: "Regional Leadership Recognition",
    description:
      "Recognized among the Eastern Zone's premier employment consultancies, crossing 5,000+ placed professionals.",
  },
  {
    year: "2025+",
    name: "Pan-India Enterprise Scaling",
    description:
      "Continuing rapid expansion nationwide with tech-enabled candidate matching, payroll management, and corporate workshops.",
  },
];

const values = [
  {
    id: 1,
    name: "Honesty & Integrity",
    description:
      "We operate with transparent truthfulness in candidate representations, client billing, and compliance advisory.",
    icon: ShieldCheck,
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: 2,
    name: "Enduring Trust",
    description:
      "Trust is earned through consistent execution. We cultivate decade-long client relationships anchored on accountability.",
    icon: Handshake,
    color: "from-indigo-600 to-blue-600",
  },
  {
    id: 3,
    name: "Value-Centricity",
    description:
      "Every candidate presented and policy implemented is engineered to generate measurable ROI and organizational stability.",
    icon: Target,
    color: "from-cyan-600 to-blue-600",
  },
  {
    id: 4,
    name: "High-Synergy Collaboration",
    description:
      "We operate as an extension of your internal talent acquisition team, co-creating customized hiring frameworks.",
    icon: Users2,
    color: "from-blue-500 to-indigo-600",
  },
];

const clientLogos = [
  { name: "Ludlow", src: logo10 },
  { name: "Suraksha", src: logo11 },
  { name: "RTS", src: logo12 },
  { name: "Signum", src: logo13 },
  { name: "Tenty", src: logo14 },
];

export default function AboutUsPage() {
  return (
    <div className="bg-[#fbfaf6] min-h-screen">
      <Header />

      <main className="isolate">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          {/* Subtle Background Gradients */}
          <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-40 top-1/2 -z-10 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-semibold text-blue-700 mb-5">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                  <span>About Uppraisal Consultant</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                  Leading HR Solutions in Eastern India{" "}
                  <span className="gradient-text">Since 2015.</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
                  Since 2015, <strong className="text-slate-900 font-semibold">UPPRAISAL CONSULTANT</strong> has established itself as a premier human resources advisory firm headquartered in Kolkata. We provide integrated recruitment, payroll compliance, and executive talent search tailored to fast-scaling startups and Fortune-tier MNCs across India.
                </p>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Our core philosophy unites deep psychological understanding with systematic competency mapping—ensuring our corporate partners hire individuals who not only match job descriptions, but elevate company culture and productivity.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="group inline-flex items-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5"
                  >
                    <span>Our Consulting Services</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/careers"
                    className="inline-flex items-center rounded-full bg-white border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 shadow-xs transition-all hover:bg-slate-50 hover:text-blue-600 hover:border-slate-300"
                  >
                    <span>Explore Open Roles</span>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/15 ring-1 ring-slate-900/10">
                  <Image
                    alt="Uppraisal Consultant Headquarters"
                    src={image1}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Headquartered in Kolkata</p>
                    <p className="text-lg font-bold">Bridging Ambition with Human Capital</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Milestone Timeline */}
        <section className="bg-white py-20 sm:py-24 border-y border-slate-200/60">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="eyebrow justify-center">
                <Calendar className="h-3.5 w-3.5" />
                Our Journey
              </p>
              <h2 className="section-title">Milestones of Continuous Growth</h2>
              <p className="section-subtitle mx-auto">
                A decade of client commitment, geographic scaling, and talent enablement across Eastern India and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative rounded-2xl border border-slate-200/90 bg-[#fbfaf6] p-6 shadow-xs transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-blue-600 font-mono tracking-tight">
                      {item.year}
                    </span>
                    <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 sm:py-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="eyebrow">Strategic Purpose</p>
                <h2 className="section-title">Our Mission &amp; Vision</h2>
                
                <div className="mt-8 space-y-6">
                  <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-xs">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Target className="h-5 w-5 text-blue-600" />
                      Our Mission
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-600">
                      To solve critical HR and staffing challenges for our clients, cultivate permanent partnerships, and drive their competitiveness. We deliver unique, data-backed human capital solutions aligned with specific business targets.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-xs">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      Our Vision
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-600">
                      To be recognized as India’s most trusted HR consulting firm, upholding absolute transparency, client value-creation, and employee growth for every stakeholder we touch.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    alt="Corporate meeting"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md mt-6">
                  <Image
                    alt="Executive collaboration"
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-slate-950 py-20 sm:py-24 text-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                Measurable Impact
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Advancing Workplaces Across the Nation
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                At Uppraisal Consultant, we treat every hiring engagement as a long-term catalyst for growth and operational excellence.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8"
              >
                <p className="text-4xl sm:text-5xl font-extrabold text-blue-400 font-mono">
                  10,000+
                </p>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Verified Candidate Pool
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Rigorous pre-screening and qualification guarantees ready-to-deploy talent for fast-track recruitment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8"
              >
                <p className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                  2,000+
                </p>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Successful Placements
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Strategic matching of candidates to organizational positions dramatically bolsters operational productivity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-600/30 to-slate-900 p-8"
              >
                <p className="text-4xl sm:text-5xl font-extrabold text-blue-300 font-mono">
                  15+
                </p>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Industry Verticals
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Dynamic domain expertise adapting agile HR structures for tech, core manufacturing, retail, and hospitality.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 sm:py-28 bg-white border-t border-slate-200/60">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="eyebrow justify-center">Foundational Pillars</p>
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle mx-auto">
                These principles guide every decision we make, dictate our client engagements, and foster a culture of excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group rounded-2xl border border-slate-200/80 bg-[#fbfaf6] p-7 transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${val.color} p-3 text-white shadow-md shadow-blue-500/15`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {val.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {val.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Clients Badge Section */}
        <section className="py-16 bg-[#fbfaf6] border-t border-slate-200/60">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">
              Key Client Associations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
              {clientLogos.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-center rounded-2xl bg-white border border-slate-200/80 px-6 py-4 shadow-xs"
                >
                  <Image
                    src={c.src}
                    alt={c.name}
                    width={130}
                    height={45}
                    className="h-10 w-28 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
