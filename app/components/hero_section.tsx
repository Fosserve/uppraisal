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
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                id="hero-pattern"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect fill="url(#hero-pattern)" width="100%" height="100%" />
          </svg>
          <div className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
            <div
              className="aspect-801/1036 w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{ clipPath: "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" }}
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
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:mt-0 sm:justify-start sm:pl-20 lg:pl-0">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-44 flex-none space-y-8">
                    {[i, i + 2].map((j) => (
                      images[j] && (
                        <div key={j} className="relative">
                          <img
                            alt={images[j].alt}
                            src={images[j].src}
                            className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                        </div>
                      )
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
