"use client";

import { useState } from "react";
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import image1 from "../../public/team/img9.jpg"
import Header from "../components/header";

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
    description: "Finding potential candidates through internal and external channels.",
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
    <div className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative mt-10 mx-auto max-w-7xl sm:px-6 rounded-md lg:px-8 bg-gray-900">
        <div className="relative h-80 overflow-hidden bg-[#4bbcff] md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2 rounded-md">
          <img
            alt=""
            src="https://media.istockphoto.com/id/1409520341/photo/group-of-young-people-discussing-in-the-co-working-office.jpg?s=612x612&w=0&k=20&c=MMScAoIbvQebCJ3dhr8pZ1izzuWxW_pBJ4yJ1KQfwpM="
            className="w-full h-full object-cover rounded-md mix-blend-multiply"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-12 sm:py-24 lg:px-8 lg:py-32">
          <div className="px-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 xl:pl-32">
            <h2 className="text-base font-semibold text-[#4bbcff]">Grow With Us – Your Future Starts Here</h2>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">We're here to help</h1>
            <p className="mt-4 text-base text-gray-300">
              We're looking for passionate individuals at every stage of their careers—freshers eager to learn, experienced professionals ready to lead, and trained experts seeking new challenges.
            </p>
            <div className="mt-6">
              <a
                href="http://careers.uppraisalconsultant.in"
                className="inline-block rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Visit our Job Portal
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Recruitment Process Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="text-center">
          <p className="text-base font-semibold text-[#0a7aff]">How we filter</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Our Process of Recruitment
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-gray-600">
            We conduct extensive search for quality candidates based on our client preferences and requirements.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name} className="p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center text-sm font-semibold text-[#0a7aff]">
                <span className="mr-2">•</span>
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="mt-2 text-base text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join Our Team Section */}
      <div className="mt-16 sm:my-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="bg-gray-800 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <img
              alt="Career page"
              src={"https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              className="w-full lg:w-1/2 h-96 lg:h-[20rem] object-cover rounded-2xl shadow-xl"
            />
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Join our team
              </h2>
              <p className="text-lg text-gray-300">
                How do you create remarkable change? By hiring, celebrating and nurturing the best people-from all walks of life.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-base text-white">
                    <CheckCircleIcon className="h-5 w-5 text-[#0a7aff]" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="http://careers.uppraisalconsultant.in"
                  className="inline-flex items-center text-sm font-semibold text-[#0a7aff] hover:text-[#0a7aff]/80 transition-colors"
                >
                  See our job postings <span aria-hidden="true" className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
