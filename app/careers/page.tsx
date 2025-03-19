"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { HomeIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import logo from "../../public/uppraisal-logo.png"
import image1 from "../../public/careerpage.jpg"


const pages = [
  { name: 'Careers', href: '/career', current: false },
]

const timeline = [
  {
    name: "Job Analysis & Planning",
    description: "Defining the role and creating a job description.",
    step: "01",
    dateTime: "2021-08",
  },
  {
    name: "Sourcing Candidates",
    description:
      "Finding potential candidates through internal and external channels.",
    step: "02",
    dateTime: "2021-08",
  },
  {
    name: "Screening & Shortlisting",
    description: "Reviewing applications and conducting initial interviews.",
    step: "03",
    dateTime: "2021-08",
  },
  {
    name: "Selection & Onboarding",
    description: "Making an offer and welcoming the new hire.",
    dateTime: "2021-08",
    step: "04",
  },
];
const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function Timeline() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-white py-20">
      <div className="relative mt-16 mx-auto max-w-7xl sm:px-6 rounded-md lg:px-8 bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-[#4bbcff] md:absolute md:left-0 md:h-full md:w-1/3 rounded md lg:w-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          className="size-full object-cover rounded-md mix-blend-multiply"
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
          <h2 className="text-base/7 font-semibold text-[#4bbcff]">Grow With Us – Your Future Starts Here</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">We’re here to help</p>
          <p className="mt-6 text-base/7 text-gray-300">
          We’re looking for passionate individuals at every stage of their careers—freshers eager to learn, experienced professionals ready to lead, and trained experts seeking new challenges. Join us to shape the future while advancing your own. Explore opportunities that match your skills and ambitions!
          </p>
          <div className="mt-8">
            <a
              href="http://careers.uppraisalconsultant.in"
              className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Visit our Job Portal
            </a>
          </div>
        </div>
      </div>
    </div>

      <div className="mx-auto max-w-2xl px-8 lg:px-6 lg:text-center mt-24">
        <p className="text-base/7 font-semibold text-[#0a7aff]">
          how we filter
        </p>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          Our Process of Recruitment
        </p>
        <p className="mt-6 text-lg/8 text-gray-600">
          We conduct extensive search for quality candidates based on our client
          preferences and requirements for filling up various positions in their
          companies.
        </p>
      </div>
      <div className="mx-auto max-w-7xl mt-8 px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm/6 font-semibold text-[#0a7aff]"
              >
                <svg
                  viewBox="0 0 4 4"
                  aria-hidden="true"
                  className="mr-4 size-1 flex-none"
                >
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.step}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </time>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base/7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-24">
      <div className="mx-auto bg-gray-800 py-12 px-6 flex max-w-2xl flex-col gap-16 max-w-7xl sm:px-6 lg:px-8 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              alt="Career page"
              src={image1.src}
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Join our team
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300">
              How do you create remarkable change? By hiring, celebrating and nurturing the best people-from all walks of life.
              </p>
              <ul role="list" className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <a href="http://careers.uppraisalconsultant.in" className="text-sm/6 font-semibold text-[#0a7aff]">
                  See our job postings <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-1318/752 w-[82.375rem] flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
        </div>
    </div>
  );
}
