import React from "react"

const featuredTestimonial = {
  body: "One of the fastest growing employment consultancy having highly enriched candidate base for fulfilling customer needs as and when required. Compliance Manager POWER ARGO FARMS PVT. LTD ",
  author: {
    name: "N Chakravarti",
    handle: "Chakravarti",
  },
  logoUrl: "/Clients_logos/EEE.webp",
}

const testimonials = [
  [
    [
      {
        body: "We have taken your respective organization service since last two years and we must say it is one of the best consultancy in across India and in West Bengal. From my end, it is a No.01 Rank. Your team members are well experienced and professional. Head HR TRISHAN METALS PVT.LTD.",
        author: {
          name: "KAUSHIK SINHA",
          handle: "kaushik",
        },
        logoUrl: "/Clients_logos/keventer-logo.jpg",
      },
    ],
  ],
  [
    [
      {
        body: "I had a feeling of great satisfaction whenever I turned to Uppraisal for providing manpower. Uppraisal not only provided the manpower at the right time but also the right fit manpower. Head HR - KUTCHINA HOMEMAKERS PVT.LTD.",
        author: {
          name: "Chayan Bhattacharjee",
          handle: "Bhattacharjee",
        },
        logoUrl: "/Clients_logos/JSS.jpg",
      },
    ],
  ],
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Testimonials() {
  return (
    <div className="relative isolate bg-white py-12 sm:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0a7aff] to-[#84d5ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#035de5]">Testimonials</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white ring-1 shadow-lg ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold italic tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <img src={featuredTestimonial.logoUrl} alt="logo" className="h-10 w-auto object-contain" />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900 italic">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div>
                          <div className="font-semibold">{testimonial.author.name}</div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                        <img src={testimonial.logoUrl} alt="logo" className="h-10 w-auto object-contain" />
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
