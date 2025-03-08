import Image from "next/image";
import { HomeIcon } from '@heroicons/react/20/solid'
import logo from "../../public/uppraisal-logo.png"
import S1 from "../../public/team/S1.png"
import S2 from "../../public/team/S2.png"
import S3 from "../../public/team/S3.png"
import S4 from "../../public/team/S4.png"
import S5 from "../../public/team/S5.png"


const pages = [
  { name: 'About', href: '/about-us', current: false },
  { name: 'Careers', href: '/career', current: false },
  { name: 'Services', href: '/services', current: false },
]

const servicesdata = [
  {
    title: "PERMANENT STAFFING SOLUTION",
    description:
      "We conduct extensive search for quality candidates based on our client preferences and requirements for filling up various positions in their companies. We make sure to select candidates who are best fit for our clients and hence have long-term employment associations. We consider essential factors related to candidates’ background, previous work experiences, salaries, performances, cultural resonance, and match them accordingly with required job profiles.",
    imageUrl: S1.src,
  },
  {
    title: "PAYROLL & COMPLIANCE",
    description:
      "Payroll & Compliance services help the employers save both time and money. A team of professionals in this field will be assigned to do your job. Our company will provide added services along with the standard service. We keep ourselves available for your employees regarding any query related to their salary after the salary is disbursed. We will help you reach newer heights in terms of Human Resource Management.",
    imageUrl: S2.src,
  },
  {
    title: "TRAINING & DEVELOPMENT",
    description:
      "Training & Development improve the effectiveness of any organization and the employees working in those organization. We offer on job soft skill & motivational training, Interactive sessions, Activity Based Training for your employees Best of HR professionals in the industry will impart the training which will eventually lift up your team's moral.",
    imageUrl: S3.src,
  },
  {
    title: "EXECUTIVE SEARCH",
    description:
      "Our company provides search and solutions for clients requiring senior level executives and managers too. At our company, we understand the level of talent and expertise that senior executives and managers need to possess, and we ensure selection of such individuals in specific alignment with client requirements and their business objectives. We provide our clients with solutions for filling up important positions in their companies, which include CEO, CFO, COO, HRD, and CIO.",
    imageUrl: S4.src,
  },
  {
    title: "TEMPORARY STAFFING",
    description:
      "We also provide temporary staffing services. We understand the need for businesses to have temporary employees with required skills and talents, and we conduct our search and selection accordingly matching such temporary employment requirements to enable right fit for your company.",
    imageUrl: S5.src,
  },
]

export default function Example() {
    return (
      <div className="overflow-hidden bg-white">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl mt-12 lg:px-8 mt-24">
          <div className="text-center pt-16">
            <p className="text-lg font-semibold text-[#035de5]">what we do</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Areas Of Expertise
            </h1>
            <p className="mx-auto mt-5 max-w-prose text-lg/8 text-gray-600">
            We conduct extensive search for quality candidates based on our client preferences and requirements for filling up various positions in their companies.
            </p>
          </div>
          <div className="mt-20 flex flex-col gap-16">
            {servicesdata.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-between items-center`}>
                <div className="max-w-2xl">
                  <h1 className="mt-2 text-lg font-semibold tracking-tight text-pretty text-gray-900 sm:text-xl">
                    {service.title}
                  </h1>
                  <p className="mt-6 font-sans text-balance text-gray-700">
                    {service.description}
                  </p>
                </div>
                <Image src={service.imageUrl} alt="Staffing Solutions" width={500} height={500}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }