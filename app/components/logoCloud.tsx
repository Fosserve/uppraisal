"use client";
import { useEffect, useRef } from "react";
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
    <div className="bg-white py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-lg sm:text-center font-semibold text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="relative mt-10 flex space-x-9 overflow-hidden logo-cloud w-max">
          <div className="flex w-max space-x-9 animate-logo-cloud">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex flex-none justify-center px-2">
                <Image
                  src={logo.url}
                  width={120}
                  height={40}
                  className="h-16 w-48 object-contain"
                  alt={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm text-gray-600 ring-1 ring-gray-900/5">
            <span className="hidden md:inline">
              Over 25+ companies use our tools to better their business.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}