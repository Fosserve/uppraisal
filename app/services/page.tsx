"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import S1 from "../../public/team/S1.png";
import S2 from "../../public/team/S2.png";
import S3 from "../../public/team/S3.png";
import S4 from "../../public/team/S4.png";
import S5 from "../../public/team/S5.png";
import { CheckCircle2, ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const servicesdata = [
  {
    title: "Permanent Staffing Solutions (PSS)",
    description:
      "We conduct extensive, customized searches to identify high-caliber candidates aligned with your technical requirements, salary expectations, and cultural fabric. Our rigorous multi-stage vetting ensures long-term employment tenure and accelerated onboarding.",
    points: [
      "Cultural & competency alignment mapping",
      "Comprehensive background & reference validation",
      "Executive & lateral hiring across seniority tiers",
      "Replacement guarantees for peace of mind",
    ],
    image: S1,
  },
  {
    title: "Payroll & Statutory Compliance",
    description:
      "Save administrative bandwidth and eliminate legal liability. Our dedicated compliance team manages payroll disbursals, PF, ESI, PT, and income tax withholdings while remaining accessible to your workforce for query resolution.",
    points: [
      "End-to-end salary processing & payslip generation",
      "Statutory PF, ESIC, Professional Tax & TDS filings",
      "Dedicated employee query helpdesk",
      "Audit-ready documentation and regulatory advisory",
    ],
    image: S2,
  },
  {
    title: "Training & Organizational Development",
    description:
      "Elevate collective productivity, communication, and executive decision-making. We offer tailored on-job soft skills coaching, motivational sessions, and activity-based experiential training led by accomplished industry practitioners.",
    points: [
      "Executive communication & leadership workshops",
      "Activity-based experiential team building",
      "Customer service & cross-functional soft skills",
      "Measurable pre- and post-training performance metrics",
    ],
    image: S3,
  },
  {
    title: "Executive Search & C-Suite Advisory",
    description:
      "Securing transformative senior leadership requires absolute discretion, extensive market intelligence, and persuasive advocacy. We identify and place top-quartile CEOs, CFOs, COOs, CIOs, and Functional Heads who steer organizational vision.",
    points: [
      "Confidential direct headhunting methodology",
      "In-depth leadership track record evaluation",
      "Compensation benchmarking & negotiation support",
      "Onboarding advisory & post-placement governance",
    ],
    image: S4,
  },
  {
    title: "Temporary & Contract Staffing",
    description:
      "Scale workforce capacity dynamically during seasonal spikes, rapid market expansion, or project-specific workloads without expanding permanent headcount overhead.",
    points: [
      "Rapid turnaround deployment of pre-vetted professionals",
      "Full employer-of-record (EOR) compliance management",
      "Flexible contract durations with extension options",
      "Frictionless temp-to-perm transition pathways",
    ],
    image: S5,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#fbfaf6] min-h-screen">
      <Header />

      <main className="isolate">
        {/* Page Hero Header */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-semibold text-blue-700 mb-5">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>End-to-End Human Capital Advisory</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                HR Expertise That Makes Work{" "}
                <span className="gradient-text">Work Better.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
                From pinpoint talent acquisition to high-security payroll compliance, we bring clinical clarity, speed, and dedication to every stage of the workforce lifecycle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Alternating Rows */}
        <section className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-20 sm:space-y-28">
            {servicesdata.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-10 lg:gap-16 items-center rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5`}
                >
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        Service 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      {service.points.map((pt) => (
                        <div key={pt} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3">
                      <a
                        href="#footer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <span>Inquire about this service</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Bottom Contact CTA */}
        <section className="bg-slate-950 py-16 sm:py-20 text-white relative overflow-hidden border-t border-slate-800">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Ready to Accelerate Your Workforce Strategy?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Schedule a confidential discovery meeting with our principal consultants to discuss hiring targets, fee structures, or specialized mandates.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="#footer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Contact Our Directors</span>
              </a>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                <span>Learn More About Us</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
