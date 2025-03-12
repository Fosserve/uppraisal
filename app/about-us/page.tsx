"use client";

import logo10 from "../../public/Clients_logos/mohan_motars.jpeg";
import logo11 from "../../public/Clients_logos/paharpur-logo.png";
import logo12 from "../../public/Clients_logos/siddha-group-logo.png";
import logo13 from "../../public/Clients_logos/ronak_optik_india_private_limited_logo.jpeg";
import logo14 from "../../public/Clients_logos/IFB.png";
import { HomeIcon } from '@heroicons/react/20/solid'
import logo from "../../public/uppraisal-logo.png"
import image1 from "../../public/team/img7.jpg";
import image2 from "../../public/team/img8.jpg";
import image3 from "../../public/team/img6.jpg";
import image4 from "../../public/team/img4.jpg";
import Header from "../components/header";

const timeline = [
  {
    name: "Establishment of UPPRAISAL CONSULTANT",
    description: "Founded in Kolkata to provide integrated HR solutions for industries, startups, and MNCs.",
    date: "2015-01",
    dateTime: "2021-08",
  },
  {
    name: "Expansion to Multisector Services",
    description: "Diversified offerings to serve a wide range of industries with tailored HR solutions.",
    date: "2017-06",
    dateTime: "2021-12",
  },
  {
    name: "Recognition as a Leading Consultant",
    description: "Achieved recognition as one of the leading HR consultants in the Eastern Zone.",
    date: "2020-03",
    dateTime: "2022-02",
  },
  {
    name: "Commitment to Excellence",
    description: "Continuing to deliver innovative HR services with a client-first approach.",
    date: "2025-01",
    dateTime: "2022-12",
  },
];

const Values = [
  {
    id: 1,
    name: "Honesty: The Pillar of Integrity",
    description: "We believe in being transparent and truthful in all our interactions. Honesty is not just a value but the foundation of trust, ensuring our clients and employees can always rely on us.",
  },
  {
    id: 2,
    name: "Trust: Building Lasting Partnerships",
    description: "Trust is at the heart of everything we do. We strive to earn and maintain the trust of our clients, employees, and partners by consistently delivering on our promises.",
  },
  {
    id: 3,
    name: "Value-Centricity: Putting Clients First",
    description: "We are committed to delivering exceptional value to our clients by understanding their unique needs and providing tailored solutions.",
  },
  {
    id: 5,
    name: "Collaboration: Together We Achieve More",
    description: "We believe in the power of teamwork. By fostering collaboration among our team and with our clients, we create innovative solutions that address complex challenges.",
  }
];

const pages = [
  { name: 'About Us', href: '/about-us', current: false },
]

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="isolate">
        {/* Hero Section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20">
          <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-[#035de5]/10 ring-[#edf8ff] sm:-mr-80 lg:-mr-96" />
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Leading HR Solutions in Eastern India Since 2015
              </h1>
              <div className="my-6 max-w-7xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                  Since 2015, <span className="text-blue-600">UPPRAISAL CONSULTANT</span> has established itself as a premier HR solutions provider in Eastern India, with a strong presence in Kolkata. We specialize in delivering comprehensive, multi-level human resource services tailored to diverse industries - from emerging startups to established multinational corporations. Our commitment to timely, efficient, and customized solutions has made us a trusted partner for organizations seeking to optimize their workforce potential.
                </p>
              </div>
              <img
                alt=""
                src={image1.src}
                className="mt-8 aspect-[6/5] w-full rounded-2xl object-cover sm:mt-12 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-16"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Timeline Section */}
        <div className="mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name} className="p-4">
                <time dateTime={item.dateTime} className="flex items-center text-sm font-semibold text-[#035de5]">
                  <svg viewBox="0 0 4 4" className="mr-2 h-1 w-1 flex-none">
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  {item.date}
                </time>
                <p className="mt-4 text-lg font-semibold text-gray-900">{item.name}</p>
                <p className="mt-2 text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Cloud Section */}
        <div className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-700 px-6 py-16 text-center shadow-2xl sm:rounded-3xl sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Our customers love us
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-gray-300 sm:text-lg">
              "We Offer a Wide Range Of Integrated Levelled Human Resource Services Across Different Industries"
            </p>
            <div className="mx-auto mt-12 grid max-w-lg grid-cols-2 items-center gap-8 sm:max-w-xl sm:grid-cols-3 sm:gap-10 lg:max-w-4xl lg:grid-cols-5">
              {[logo10, logo11, logo12, logo13, logo14].map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt="Client logo"
                  className="col-span-1 max-h-12 w-full object-contain"
                />
              ))}
            </div>
          </div>
        </div>

   
       

        {/* Content section */}
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Our Mission & Vision
                </h2>
                <p className="mt-6 text-xl/8 text-gray-600">
                Our Mission is to address and solve key HR needs of our clients, develop long lasting partnerships with them, and ensure their success in growth, development and competitiveness in their respective industries. We are committed to offering our best possible and unique HR solutions to each of our clients, aligning with their specific business goals and objectives.
                </p>
                <p className="mt-6 text-base/7 text-gray-600">
                Our Vision is to become a leading HR Consulting Company in India, adhering to our core principles and values for our stakeholders.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt=""
                    src={image2.src}
                    className="aspect-7/5 w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      alt=""
                      src={image4.src}
                      className="aspect-4/3 w-[24rem] h-[16rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                      className="aspect-7/5 w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src={image3.src}
                      className="aspect-4/3 w-[24rem] h-[20rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              We approach work as a place to make the world better
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
              At UPPRAISAL CONSULTANT, we prioritize our clients as valued partners, ensuring our solutions provide long-term benefits. Our services offer the following advantages:
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
                1000+
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-gray-900">
                Quality Candidates
                </p>
                <p className="mt-2 text-base/7 text-gray-600">
                We deliver top-tier talent to meet your specific needs, enhancing your team's capabilities.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">
                1500+
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                Enhanced Productivity
                </p>
                <p className="mt-2 text-base/7 text-gray-400">
                By placing the right individuals in the right positions, we boost overall organizational efficiency and performance.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-[#035de5] p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">
                15+
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                Flexible, Customized Services
                </p>
                <p className="mt-2 text-base/7 text-[#b6e4ff]">
                We adapt our offerings to align with your evolving requirements, ensuring our solutions remain relevant and effective.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:my-40 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Our Core Values: The Foundation of Our Success
              </h2>
              <p className="mt-6 text-xl/8 text-gray-600">
              At UPPRAISAL CONSULTANT, our values guide every decision we make and every service we provide. They define who we are, shape our culture, and enable us to deliver exceptional value to our clients and partners. Here are five of our key values, elaborated to reflect their significance in our work:
              </p>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                className="mt-16 aspect-6/5 w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              />
            </div>
            <div className="w-full lg:max-w-xl lg:flex-auto">
              <h3 className="sr-only">Job openings</h3>
              <ul className="-my-8 divide-y divide-gray-100">
                {Values.map((opening) => (
                  <li key={opening.id} className="py-8">
                    <dl className="relative flex flex-wrap gap-x-3">
                      <dt className="sr-only">Name</dt>
                      <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                          {opening.name}
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                      </dd>
                      <dt className="sr-only">Description</dt>
                      <dd className="mt-2 w-full flex-none text-base/7 text-gray-600">
                        {opening.description}
                      </dd>
                      <dt className="sr-only">Salary</dt>
                    </dl>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
