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
      <div className="relative isolate overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/20 via-white to-white" />
        
        {/* Blob effect */}
        <div className="absolute right-0 top-0 -z-10 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2 transform rounded-full bg-gradient-radial from-blue-100/50 via-transparent to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Content Section */}
            <div className="flex flex-col justify-center space-y-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Elevate Your Business with Expert Consulting Solutions
              </h1>
              <p className="text-lg text-gray-600 sm:text-xl">
                Discover what sets us apart. Our process, expertise, and commitment ensure success for both companies and candidates. Partnering with us brings distinct advantages, making the recruitment process seamless and effective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://careers.uppraisalconsultant.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Explore Opportunities
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Image Grid Section */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-[300px] sm:max-w-[400px] mx-auto">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative rounded-lg shadow-md overflow-hidden ${
                    index === 0 ? "aspect-square" : "aspect-[3/4]"
                  } ${
                    index === 2 ? "col-span-2" : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
