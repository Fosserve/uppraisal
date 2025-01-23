'use client'

import { useState } from 'react'
import React from 'react';
import image from "../public/steps.png"

const strengths = [
  {
    title: "Detailed screening process",
    description:
      "We ensure a thorough evaluation of each candidate to match the exact requirements of the job profile, ensuring quality at every step.",
  },
  {
    title: "Validation sheet with all necessary details",
    description:
      "A comprehensive validation sheet is provided, including key details about the candidate's qualifications, experience, and skillset.",
  },
  {
    title: "Educate the company about the company and the job specification",
    description:
      "We prioritize clear communication, ensuring both candidates and companies have a deep understanding of each other and the role's specifications.",
  },
  {
    title: "Less turnaround time (24-48 hours)",
    description:
      "Our efficient process guarantees quick results, delivering top candidates within 24-48 hours.",
  },
  {
    title: "Coordination with company and candidate till the end",
    description:
      "We stay involved throughout the process, ensuring smooth communication and coordination from start to finish.",
  },
  {
    title: "Expertise in domain knowledge",
    description:
      "Our team brings extensive domain expertise, allowing us to identify the best candidates for specialized roles.",
  },
];

const benefits = [
    {
      title: "Quality candidates",
      description:
        "We focus on providing high-caliber candidates who align perfectly with the job requirements and company culture.",
    },
    {
      title: "Summary of the profile at a glance",
      description:
        "Quick and comprehensive summaries of profiles save time and help in making informed decisions efficiently.",
    },
    {
      title: "Right fitment",
      description:
        "We ensure candidates are a perfect match for the role, minimizing mismatches and maximizing productivity.",
    },
    {
      title: "Early closure",
      description:
        "Our streamlined processes allow for quicker closures, ensuring positions are filled promptly.",
    },
    {
      title: "Better productivity",
      description:
        "With the right candidates in the right roles, organizations experience enhanced productivity and satisfaction.",
    },
    {
      title: "Less communication gap",
      description:
        "We bridge communication gaps by acting as a reliable intermediary between companies and candidates.",
    },
  ];


export default function Example() {

  return (
    <div>

      <main>
        {/* Our Strength */}
        <div className="mx-auto sm:mt-0  lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 mt-32 lg:max-w-none">
        <h2 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Our Strengths</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover what sets us apart. Our process, expertise, and commitment ensure success for both companies and candidates.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength, index) => (
            <div key={index} className="space-y-4 p-2 rounded-md flex items-start justify-center flex-col hover:bg-secondary/10">
              <h3 className="text-lg font-semibold text-secondary">{strength.title}</h3>
              <p className="text-base text-muted-foreground">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      
        {/* Content section */}
        <div className="mx-auto sm:mt-0  lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 mt-32 lg:max-w-none">
        <h2 className="mt-16 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Your Benefits</h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Partnering with us brings distinct advantages, making the recruitment process seamless and effective.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4 p-2 rounded-md flex items-start justify-center flex-col hover:bg-secondary/10">
              <h3 className="text-lg font-semibold text-secondary">{benefit.title}</h3>
              <p className="text-base text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        </div>
        </div>
       

        {/* Image section */}
        {/* Values section */}
        <div className="mx-auto sm:mt-0  lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 mt-32 lg:max-w-none">
        <h2 className="mt-16 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Our Services</h2>
        <p className="mt-4 text-xl text-muted-foreground">
          We offer a wide range of integrated leveled human resource services across different industries.
        </p>
        <div className="mt-10 flex flex-col items-center">
          <img
            src={image.src}
            alt="Human Resource Services Pyramid"
            className="w-full max-w-md"
          />
          <div className="mt-6 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-primary p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-white/70">Top Management</h3>
            </div>
            <div className="bg-secondary p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-white/80">Senior Management</h3>
            </div>
            <div className="bg-accent p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-white/70">Middle Management</h3>
            </div>
            <div className="bg-accent/50 p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-white/80">Junior / Fresher</h3>
            </div>
          </div>
        </div>
        </div></div>

        {/* {timeline} */}
        <div className="mx-auto mt-32 lg:px-8">
        <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Our Process of <span className='text-primary'>Recruitment</span></h2>
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
    {[
      {
        name: "Headhunting",
        description: "Strategically identifying and sourcing candidates.",
      },
      {
        name: "Database",
        description: "Leveraging internal and external databases.",
      },
      {
        name: "Portal",
        description: "Using portals for sourcing the right candidates.",
      },
      {
        name: "Social Networking",
        description: "Engaging with networks for sourcing talent.",
      },
      {
        name: "Referencing",
        description: "Utilizing trusted referrals to find candidates.",
      },
    ].map((item, index) => (
      <div key={index}>
        <div className={`flex items-center text-sm font-semibold text-secondary`}>
          <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 h-4 w-4 flex-none">
            <circle r={2} cx={2} cy={2} fill="currentColor" />
          </svg>
          {item.name}
        </div>
        <p className="mt-1 text-base text-gray-600">{item.description}</p>
      </div>
    ))}
  </div>
  <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
    {[
      {
        title: "Screening Process",
        description: "Evaluating candidates thoroughly.",
        color: "bg-primary",
      },
      {
        title: "Short-listing Session",
        description: "Selecting the most suitable candidates.",
        color: "bg-secondary",
      },
      {
        title: "Interview Line Up",
        description: "Coordinating interviews with clients.",
        color: "bg-accent",
      },
      {
        title: "Joining Support",
        description: "Helping candidates transition smoothly.",
        color: "bg-primary/50",
      },
    ].map((item, index) => (
      <div
        key={index}
        className={`relative p-4 rounded-lg shadow-md text-white ${item.color}`}
      >
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="mt-2 text-base">{item.description}</p>
      </div>
    ))}
  </div>
</div>

    

        {/* Logo cloud */}
        {/* <div className="relative isolate -z-10 mt-32 sm:mt-48">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg aria-hidden="true" className="h-[40rem] w-[80rem] flex-none stroke-gray-200">
              <defs>
                <pattern
                  x="50%"
                  y="50%"
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" width="100%" height="100%" strokeWidth={0} />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg/8 font-semibold text-gray-900">
              Trusted by the world’s most innovative teams
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                alt="Transistor"
                src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <img
                alt="Reform"
                src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <img
                alt="Tuple"
                src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <img
                alt="SavvyCal"
                src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              />
              <img
                alt="Statamic"
                src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              />
            </div>
          </div>
        </div> */}

        {/* Team section */}
        {/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our team</h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img alt="" src={person.imageUrl} className="mx-auto size-24 rounded-full" />
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm/6 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Blog section */}
        
      </main>
    </div>
  )
}
