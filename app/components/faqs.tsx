const faqs = [
        {
          id: 1,
          question: "How can I apply for a job?",
          answer: "You can apply by visiting our careers page and submitting your application online. Ensure your resume is up to date."
        },
        {
          id: 2,
          question: "What qualifications do I need to apply?",
          answer: "The qualifications vary depending on the position. Please review the job description for specific requirements."
        },
        {
          id: 3,
          question: "What is the recruitment process?",
          answer: "Our recruitment process typically includes an application review, an initial screening, one or more interviews, and a final decision."
        },
        {
          id: 4,
          question: "How long does the hiring process take?",
          answer: "The process duration depends on the role but usually takes 2-4 weeks from the application submission to final decision."
        },
        // {
        //   id: 5,
        //   question: "Can I apply for multiple positions?",
        //   answer: "Yes, you are welcome to apply for any positions that match your skills and experience."
        // }
      
    // More questions...
  ]
  
  export default function Faqs() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8   ">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Frequently asked questions</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  