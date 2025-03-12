import Image from "next/image";
import { HomeIcon } from '@heroicons/react/20/solid'
import logo from "../../public/uppraisal-logo.png"
import S1 from "../../public/team/S1.png"
import S2 from "../../public/team/S2.png"
import S3 from "../../public/team/S3.png"
import S4 from "../../public/team/S4.png"
import S5 from "../../public/team/S5.png"
import Header from "../components/header";

const pages = [
  { name: 'About', href: '/about-us', current: false },
  { name: 'Careers', href: '/career', current: false },
  { name: 'Services', href: '/services', current: false },
]

const servicesdata = [
  {
    title: "Permanent Staffing Solution",
    description:
      "We conduct extensive search for quality candidates based on our client preferences and requirements for filling up various positions in their companies. We make sure to select candidates who are best fit for our clients and hence have long-term employment associations. We consider essential factors related to candidates' background, previous work experiences, salaries, performances, cultural resonance, and match them accordingly with required job profiles.",
    imageUrl: S1.src,
  },
  {
    title: "Payroll & Compliance",
    description:
      "Payroll & Compliance services help the employers save both time and money. A team of professionals in this field will be assigned to do your job. Our company will provide added services along with the standard service. We keep ourselves available for your employees regarding any query related to their salary after the salary is disbursed. We will help you reach newer heights in terms of Human Resource Management.",
    imageUrl: S2.src,
  },
  {
    title: "Training & Development",
    description:
      "Training & Development improve the effectiveness of any organization and the employees working in those organization. We offer on job soft skill & motivational training, Interactive sessions, Activity Based Training for your employees Best of HR professionals in the industry will impart the training which will eventually lift up your team's moral.",
    imageUrl: S3.src,
  },
  {
    title: "Executive Search",
    description:
      "Our company provides search and solutions for clients requiring senior level executives and managers too. At our company, we understand the level of talent and expertise that senior executives and managers need to possess, and we ensure selection of such individuals in specific alignment with client requirements and their business objectives. We provide our clients with solutions for filling up important positions in their companies, which include CEO, CFO, COO, HRD, and CIO.",
    imageUrl: S4.src,
  },
  {
    title: "Temporary Staffing",
    description:
      "We also provide temporary staffing services. We understand the need for businesses to have temporary employees with required skills and talents, and we conduct our search and selection accordingly matching such temporary employment requirements to enable right fit for your company.",
    imageUrl: S5.src,
  },
]

export default function Example() {
    return (
      <div className="overflow-hidden bg-white ">
        <Header/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-12 sm:pt-16 lg:pt-20">
            <p className="text-base sm:text-lg font-semibold text-[#035de5]">What We Do</p>
            <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Areas Of Expertise
            </h1>
            <p className="mx-auto mt-4 max-w-prose text-base sm:text-lg text-gray-600 leading-relaxed">
              We conduct extensive search for quality candidates based on our client preferences and requirements for filling up various positions in their companies.
            </p>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-20 space-y-20 sm:space-y-24 lg:space-y-28 mb-8">
            {servicesdata.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 xl:gap-16 items-center`}>
                <div className="w-full lg:w-1/2 space-y-6">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight">
                    {service.title}
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <Image 
                    src={service.imageUrl} 
                    alt={service.title} 
                    width={600} 
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }