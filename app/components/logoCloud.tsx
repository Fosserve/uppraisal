"use client";
import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";

import logo1 from "../../public/Clients_logos/Kutchina.jpg";
import logo2 from "../../public/Clients_logos/JSS.jpg";
import logo3 from "../../public/Clients_logos/EEE.webp";
import logo4 from "../../public/Clients_logos/powerLogoFooter.jpg";
import logo5 from "../../public/Clients_logos/Toyota.png";
import logo6 from "../../public/Clients_logos/Signum-Group-Logo-Horizontal-340-x-156-01-300x138.png";
import logo7 from "../../public/Clients_logos/bg_distributions.webp";
import logo8 from "../../public/Clients_logos/emami_ltd_logo.jpeg";
import logo9 from "../../public/Clients_logos/keventer-logo.jpg";
import logo10 from "../../public/Clients_logos/mohan_motars.jpeg";
import logo11 from "../../public/Clients_logos/paharpur-logo.png";
import logo12 from "../../public/Clients_logos/siddha-group-logo.png";
import logo13 from "../../public/Clients_logos/ronak_optik_india_private_limited_logo.jpeg";
import logo14 from "../../public/Clients_logos/IFB.png";

interface Logo {
  name: string;
  url: StaticImageData;
}

const logos: Logo[] = [
  { name: "Kutchina", url: logo1 },
  { name: "JSS", url: logo2 },
  { name: "EEE", url: logo3 },
  { name: "Power", url: logo4 },
  { name: "Toyota", url: logo5 },
  { name: "Signum Group", url: logo6 },
  { name: "BG Distributions", url: logo7 },
  { name: "Emami Ltd", url: logo8 },
  { name: "Keventer", url: logo9 },
  { name: "Mohan Motors", url: logo10 },
  { name: "Paharpur", url: logo11 },
  { name: "Siddha Group", url: logo12 },
  { name: "Ronak Optik India", url: logo13 },
  { name: "IFB", url: logo14 },
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
