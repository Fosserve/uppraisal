"use client";

import Image from "next/image";
import Header from "../components/header";
import { CheckCircle2, ArrowRight, Briefcase, Sparkles, ExternalLink, Mail, Award, Clock, DollarSign, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    name: "Application & Profile Review",
    description: "Submit your updated CV. Our recruiters evaluate your technical competencies and experience matrix.",
  },
  {
    step: "02",
    name: "Initial Discovery Call",
    description: "A 20-minute exploratory conversation discussing your aspirations, skills, and expectations.",
  },
  {
    step: "03",
    name: "Client Interview Rounds",
    description: "Personalized coaching and debriefs as you meet hiring managers from top partner firms.",
  },
  {
    step: "04",
    name: "Offer & Smooth Onboarding",
    description: "Transparent compensation negotiation, offer release, and structured Day-1 onboarding support.",
  },
];

const benefits = [
  { text: "Access to verified Tier-1 & MNC employers", icon: Award },
  { text: "Competitive salary benchmarking", icon: DollarSign },
  { text: "Flexible work & hybrid options", icon: Clock },
  { text: "Personalized career guidance & interview prep", icon: HeartHandshake },
  { text: "Expedited feedback within 48-72 hours", icon: CheckCircle2 },
  { text: "Strict confidentiality of your data", icon: Sparkles },
];

export default function CareersPage() {
  return (
    <div className="bg-[#fbfaf6] min-h-screen">
      <Header />

      <main className="isolate">
        {/* Hero Section */}
        <section className="mx-auto mt-6 max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 text-white shadow-2xl">
            {/* Background image & gradient overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                alt="Corporate co-working"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 py-16 sm:px-12 sm:py-24 lg:py-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-3.5 py-1 text-xs font-semibold text-blue-300">
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>Careers at Uppraisal &amp; Partner Firms</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                  Your Next Career Breakthrough Starts{" "}
                  <span className="text-blue-400">Right Here.</span>
                </h1>

                <p className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-xl">
                  Whether you are an ambitious fresher or an experienced corporate leader, we connect you with prestigious employers across India offering competitive packages and genuine growth.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://careers.uppraisalconsultant.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
                  >
                    <span>Browse Job Openings</span>
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href="mailto:hr@uppraisalconsultant.com?subject=Job%20Application%20-%20Candidate%20Resume"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Send Resume to HR</span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="lg:col-span-5"
              >
                <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl space-y-5">
                  <h3 className="text-lg font-bold text-white">Why Candidates Trust Us</h3>
                  <div className="space-y-3.5">
                    {benefits.slice(0, 4).map((b) => {
                      const Icon = b.icon;
                      return (
                        <div key={b.text} className="flex items-start gap-3 text-sm text-slate-300">
                          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="leading-snug pt-0.5">{b.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Candidate Hiring Process */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="eyebrow justify-center">The Candidate Journey</p>
              <h2 className="section-title">
                A Transparent Path from Application to Day One
              </h2>
              <p className="section-subtitle mx-auto">
                No black holes. We provide continuous feedback and interview coaching at every milestone of your recruitment process.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-base font-black text-blue-600 font-mono group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {step.step}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phase {idx + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {step.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Culture & Benefits Banner */}
        <section className="py-16 sm:py-20 bg-white border-y border-slate-200/60">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <p className="eyebrow">Life At Uppraisal</p>
                <h2 className="section-title">
                  Nurturing Extraordinary Talent from All Walks of Life
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                  We believe remarkable companies are built on empathy, meritocracy, and open communication. Whether working directly on our internal team or via our client placements, we champion your long-term career fulfillment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={benefit.text} className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span>{benefit.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4">
                  <a
                    href="https://careers.uppraisalconsultant.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    <span>Visit our live job portal</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-900/10"
              >
                <Image
                  alt="Inclusive team culture"
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
