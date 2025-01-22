"use client"

import { useRef } from "react"
import background from "../public/stats.png"

const stats = [
  {
    value: 10000,
    suffix: "+",
    title: "Candidates registered / applied for jobs",
  },
  {
    value: 100,
    suffix: "+",
    title: "Corporate & MNC clients",
  },
  {
    value: 2000,
    suffix: "+",
    title: "Successful Placements",
  },
  {
    value: 50,
    suffix: "+",
    title: "Monthly Active Jobs",
  },
]

export const StatsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-900">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(185, 85, 173, 0.6), rgba(217, 147, 155, 0.4), rgba(208, 125, 117, 0.2)), url(${background.src})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "60px",
          backgroundPosition: "center",
        }}
      />
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-white/90 font-medium">
            WHY UPPRAISAL CONSULTANT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
            With over 10 years of experience <span className="text-primary">helping businesses</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className="text-4xl md:text-6xl font-bold text-white">
                {stat.value}
                {stat.suffix}
              </span>
              <p className="mt-2 text-white/80 text-sm md:text-base">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-base/90 bg-white/40 p-5 rounded-md text-center max-w-5xl mx-auto">
          <p className="text-lg leading-relaxed">
            We believe businesses are at the core of growth and development of a country. We also understand the key
            role that employees play in an organization for achieving business goals and objectives. The need for the
            right people at the right time, and for the right tasks, is therefore a key requisite for success and
            sustainability of a business.
          </p>
        </div>
      </div>
    </section>
  )
}
