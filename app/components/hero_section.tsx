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
      <main>
        {/* <div className="relative isolate">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-801/1036 w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl mt-32 px-6 pb-32 lg:px-8">
              <div className="mx-auto max-w-2xl gap-x-2 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                    Elevate Your Business with Expert Consulting Solutions
                  </h1>
                  <p className="mt-8 text-lg text-gray-500 sm:max-w-md sm:text-xl lg:max-w-none">
                    Discover what sets us apart. Our process, expertise, and commitment ensure success for both companies and candidates. Partnering with us brings distinct advantages, making the recruitment process seamless and effective.
                  </p>
                 <a href="https://careers.uppraisalconsultant.in" target="_blank" className="inline-flex items-center mt-4 bg-blue-200 text-blue-700 font-semibold py-2 px-4 rounded hover:bg-blue-300">
                  Explore Opportunities
                   <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                   </svg>
                 </a>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:mt-0 sm:justify-start sm:pl-20 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt="HeroImage"
                        src={image8.src}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt="HeroImage"
                        src={image7.src}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt="HeroImage"
                        src={image2.src}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt="HeroImage"
                        src={image3.src}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt="HeroImage"
                        src={image4.src}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}



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
            src={image8.src}
            className="absolute inset-0 size-full object-cover"
          />
        </div>  
      </main>
    </div>
  );
}
