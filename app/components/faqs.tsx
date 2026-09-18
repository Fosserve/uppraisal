"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What industries and verticals does Uppraisal Consultant specialize in?",
    answer:
      "We serve diverse sectors across India, including IT/Software, Manufacturing, Engineering, Banking & Financial Services, Retail, Hospitality, Healthcare, and Logistics. Our consultants bring deep vertical domain expertise for both technical and non-technical talent.",
  },
  {
    id: 2,
    question: "How long does your typical recruitment cycle take?",
    answer:
      "For standard professional roles, we present pre-screened, verified candidate shortlists within 3 to 7 business days. For C-suite executive searches or highly niche specialized profiles, the end-to-end cycle typically takes 2 to 4 weeks.",
  },
  {
    id: 3,
    question: "How can candidates apply for active job openings?",
    answer:
      "Candidates can explore and apply through our dedicated careers portal (careers.uppraisalconsultant.in) or email an updated resume directly to hr@uppraisalconsultant.com. Our recruitment specialists review every profile against active and upcoming mandates.",
  },
  {
    id: 4,
    question: "What background verifications and candidate checks do you conduct?",
    answer:
      "Our multi-tiered screening evaluates academic credentials, previous employment tenures, compensation structures, performance records, and professional reference checks to guarantee authenticity before candidate presentation.",
  },
  {
    id: 5,
    question: "How do your Payroll & Statutory Compliance services benefit businesses?",
    answer:
      "We handle complete payroll computation, PF, ESI, PT, TDS deductions, and statutory filing. This mitigates compliance penalties, saves internal HR bandwidth, and provides employees with a dedicated desk for salary queries.",
  },
  {
    id: 6,
    question: "Do you provide customized corporate training and leadership workshops?",
    answer:
      "Yes. We conduct bespoke behavioral, soft-skills, operational, and motivational workshops led by senior industry facilitators designed to enhance team morale, communication, and executive productivity.",
  },
];

export default function Faqs() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden border-t border-slate-200/50">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </p>
          <h2 className="section-title">
            Answers to Common Questions
          </h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know about our recruitment workflow, consultation models, and candidate partnerships.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-blue-300 bg-blue-50/30 shadow-sm"
                    : "border-slate-200/90 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "bg-blue-600 text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-14 rounded-2xl bg-[#fbfaf6] border border-slate-200/80 p-6 sm:p-8 text-center">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Have a question that isn&apos;t listed here?
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Our team is available to assist you with specific inquiries regarding our recruitment services.
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href="mailto:hr@uppraisalconsultant.com"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Write to hr@uppraisalconsultant.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
  