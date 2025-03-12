import { ArrowRight } from "lucide-react";

const images = [
  { src: "/team/img3.jpg", alt: "Team Member 1" },
  { src: "/team/img7.jpg", alt: "Team Member 2" },
  { src: "/team/img2.jpg", alt: "Team Member 3" },
  { src: "/team/img5.jpg", alt: "Team Member 4" },
  { src: "/team/image1.jpg", alt: "Team Member 5" },
];

export default function HeroSection() {
  return (
    <div className="bg-white">
      <main>
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Elevate Your Business with Expert</span>{' '}
              <span className="block text-[#055be9] xl:inline">Consulting Solutions</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Discover what sets us apart. Our process, expertise, and commitment ensure success for both companies and candidates. Partnering with us brings distinct advantages, making the recruitment process seamless and effective.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow-sm">
                <a href="https://careers.uppraisalconsultant.in" target="_blank" className="inline-flex items-center mt-4 bg-blue-200 text-blue-700 font-semibold py-2 px-4 rounded hover:bg-blue-300">
                  Explore Opportunities
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </main>
    </div>
  );
}
