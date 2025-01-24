import Image from "next/image";

export default function Example() {
    return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="text-center">
            <p className="text-base/7 font-semibold text-indigo-600">what we do</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our Areas Of Expertise
            </h1>
            <p className="mt-6 text-xl/8 text-balance text-gray-700">
            We conduct extensive search for quality candidates based on our client preferences and requirements for filling up various positions in their companies.
            </p>
          </div>
          <div className="mt-20 flex flex-col gap-16">
            <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="max-w-2xl">
                    <h1 className="mt-2 text-lg font-semibold tracking-tight text-pretty text-gray-900 sm:text-xl">PERMANENT STAFFING SOLUTION (PSS)</h1>
                    <p className="mt-6 text-xl/8 text-balance text-gray-700">We conduct extensive search for quality candidates based on our client preferences and requirements for filling up various positions in their companies. We make sure to select candidates who are best fit for our clients and hence have long-term employment associations. We consider essential factors related to candidates’ background, previous work experiences, salaries, performances, cultural resonance, and match them accordingly with required job profiles.</p>
                </div>
                <Image src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?t=st=1737700253~exp=1737703853~hmac=5344e6925f6c82b250612917197368695e9b9388c74926f65832a24ea3d02701&w=1060" alt="Staffing Solutions" width={500} height={500}/>
            </div>
            <div className="flex flex-col  lg:flex-row-reverse justify-between items-center">
                <div className="max-w-2xl">
                    <h1 className="mt-2 text-lg font-semibold tracking-tight text-pretty text-gray-900 sm:text-xl">PAYROLL & COMPLIANCE</h1>
                    <p className="mt-6 text-xl/8 text-balance text-gray-700">Payroll & Compliance services help the employers save both time and money. A team of professionals in this field will be assigned to do your job. Our company will provide added services along with the standard service. We keep ourselves available for your employees regarding any query related to their salary after the salary is disbursed. We will help you reach newer heights in terms of Human Resource Management.</p>
                </div>
                <Image src="https://img.freepik.com/free-vector/accountant-concept-professional-bookkeeper-tax-calculating-financial-analysis-business-character-making-financial-operation-vector-illustration_613284-1046.jpg?t=st=1737706222~exp=1737709822~hmac=127f5aad41a0c0fdcd29eb9183e1b11f5bbb76138d0fe8ec6f78b6d3926c84a2&w=900" alt="Staffing Solutions" width={500} height={500}/>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="max-w-2xl">
                    <h1 className="mt-2 text-lg font-semibold tracking-tight text-pretty text-gray-900 sm:text-xl">TRAINING & DEVELOPMENT</h1>
                    <p className="mt-6 text-xl/8 text-balance text-gray-700">Training & Development improve the effectiveness of any organization and the employees working in those organization. We offer on job soft skill & motivational training, Interactive sessions, Activity Based Training for your employees Best of HR professionals in the industry will impart the training which will eventually lift up your team's moral.</p>
                </div>
                <Image src="https://img.freepik.com/free-vector/female-student-presenting-report-graph-class-cartoon-person-presents-report-school_24797-1556.jpg?t=st=1737706005~exp=1737709605~hmac=7f02e76a19218417c45aa3280c5393d498d48a8472bb49e3b76574e97d774636&w=826" alt="Staffing Solutions" width={500} height={500}/>
            </div>
            <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
            <div className="max-w-2xl">
                    <h1 className="mt-2 text-lg font-semibold tracking-tight text-pretty text-gray-900 sm:text-xl">EXECUTIVE SEARCH</h1>
                    <p className="mt-6 text-xl/8 text-balance text-gray-700">Our company provides search and solutions for clients requiring senior level executives and managers too. At our company, we understand the level of talent and expertise that senior executives and managers need to possess, and we ensure selection of such individuals in specific alignment with client requirements and their business objectives. We provide our clients with solutions for filling up important positions in their companies, which include CEO, CFO, COO, HRD, and CIO.</p>
                </div>
                <Image src="https://img.freepik.com/free-vector/search-recruits-by-professional-hr-manager-cartoon-woman-holding-magnifying-glass-check-information-choose-candidate-from-personnel-employees-resume-job-interview-isolated-white_575670-844.jpg?t=st=1737705928~exp=1737709528~hmac=3ba42ff6e75df0ba3a919ff578fe2ebba0b7ae319911c9a134bd012e1ee5c125&w=996" alt="Staffing Solutions" width={500} height={500}/>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="max-w-2xl">
                    <h1 className="mt-2 text-lg font-semibold tracking-tight text-pretty text-gray-900 sm:text-xl">TEMPORARY STAFFING</h1>
                    <p className="mt-6 text-xl/8 text-balance text-gray-700">We also provide temporary staffing services. We understand the need for businesses to have temporary employees with required skills and talents, and we conduct our search and selection accordingly matching such temporary employment requirements to enable right fit for your company.</p>
                </div>
                <Image src="https://img.freepik.com/free-vector/contract-conclusion-concept-illustration_107791-81.jpg?t=st=1737701405~exp=1737705005~hmac=8161ff5a75296daf1e44b0fd3c9b32879a8f72d3f43471d81b1feea3bc916fc9&w=826" alt="Staffing Solutions" width={500} height={500}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  