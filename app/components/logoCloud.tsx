"use client";
import Image, { StaticImageData } from "next/image";

import logo1 from "../../public/Clients_logos/ASBESCO.jpg";
import logo2 from "../../public/Clients_logos/Aerotropolis.png";
import logo3 from "../../public/Clients_logos/Bvan.jpg";
import logo4 from "../../public/Clients_logos/GTZ.jpg";
import logo5 from "../../public/Clients_logos/Hindustan.jpg";
import logo6 from "../../public/Clients_logos/IFB.jpg";
import logo7 from "../../public/Clients_logos/JAY.jpg";
import logo8 from "../../public/Clients_logos/LT.webp";
import logo9 from "../../public/Clients_logos/LUX.jpg";
import logo10 from "../../public/Clients_logos/Ludlow.png";
import logo11 from "../../public/Clients_logos/PMC.jpg";
import logo12 from "../../public/Clients_logos/Paharpur.jpg";
import logo13 from "../../public/Clients_logos/Polar.jpg";
import logo14 from "../../public/Clients_logos/Prlsons.jpg";
import logo15 from "../../public/Clients_logos/RTS.png";
import logo16 from "../../public/Clients_logos/SIDDA.png";
import logo17 from "../../public/Clients_logos/Shipra.png";
import logo18 from "../../public/Clients_logos/Signum.jpg";
import logo19 from "../../public/Clients_logos/Suraksha.png";
import logo20 from "../../public/Clients_logos/Tenty.png";
import logo21 from "../../public/Clients_logos/induss.png";
import logo22 from "../../public/Clients_logos/oriplast.png";
import logo23 from "../../public/Clients_logos/sarralle.png";
import logo24 from "../../public/Clients_logos/skg logo.png";

interface Logo {
  name: string;
  url: StaticImageData;
}

const logos: Logo[] = [
  { name: "ASBESCO", url: logo1 },
  { name: "Aerotropolis", url: logo2 },
  { name: "BARTAMAN PATRIKA", url: logo3 },
  { name: "GTZ", url: logo4 },
  { name: "Hindustan", url: logo5 },
  { name: "IFB", url: logo6 },
  { name: "JAY", url: logo7 },
  { name: "LT", url: logo8 },
  { name: "LUX", url: logo9 },
  { name: "Ludlow", url: logo10 },
  { name: "PMC", url: logo11 },
  { name: "Paharpur", url: logo12 },
  { name: "Polar", url: logo13 },
  { name: "Prlsons", url: logo14 },
  { name: "Hindustan", url: logo15 },
  { name: "RTS", url: logo16 },
  { name: "SIDDA", url: logo17 },
  { name: "Shipra", url: logo18 },
  { name: "Signum", url: logo19 },
  { name: "Suraksha", url: logo20 },
  { name: "induss", url: logo21 },
  { name: "oriplast", url: logo22 },
  { name: "sarralle", url: logo23 },
  { name: "skg", url: logo24 },
];

export default function LogoCloud() {
  return (
    <section className="bg-white py-20 sm:py-24 overflow-hidden border-t border-slate-200/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">Corporate Clientele</p>
          <h2 className="section-title">
            Trusted by Leading Enterprises & Innovators
          </h2>
          <p className="section-subtitle mx-auto">
            From conglomerates to fast-scaling startups across India, companies rely on Uppraisal for their most critical human capital needs.
          </p>
        </div>

        {/* Marquee with edge-fade gradient masks */}
        <div className="relative mt-14 overflow-hidden mask-fade-edges py-4">
          <div className="flex w-max space-x-12 logo-cloud">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex flex-none items-center justify-center rounded-2xl bg-slate-50/80 border border-slate-100 px-6 py-4 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-md"
              >
                <Image
                  src={logo.url}
                  width={140}
                  height={50}
                  className="h-12 w-36 object-contain opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  alt={logo.name}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50/80 border border-blue-200/70 px-4 py-1.5 text-xs font-semibold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Over 100+ corporate partnerships nurtured nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}