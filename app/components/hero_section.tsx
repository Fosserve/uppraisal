import image8 from "../../public/office-skyscrapers-business-district.jpg";
import image7 from "../../public/team/img7.jpg";
import image4 from "../../public/team/img2.jpg";
import image3 from "../../public/team/img5.jpg";
import image2 from "../../public/team/image1.jpg";
import heroimage from "../../public/Herosection.jpg"
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="bg-white">
      <main >
        <div className="mx-auto mt-15 w-full max-w-7xl pt-32 pb-20 sm:text-center lg:py-48 lg:text-left">
          <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-3xl pt-15 font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-5xl">
              <span className="block xl:inline">Elevate Your Business with</span>{' '}
              <span className="block text-[#055be9] xl:inline">Consulting Solutions</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-md text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
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
            src={image8.src}
            className="absolute inset-0 size-full object-cover"
          />
        </div>  
      </main>
    </div>
  );
}
