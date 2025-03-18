import Image from "next/image";
import logo from "../../public/uppraisal-logo.png";
import { Linkedin } from 'lucide-react';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import { JSX, type SVGProps } from 'react'

interface NavigationItem {
  name: string;
  href: string;
}

interface SocialItem extends NavigationItem {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Career", href: "/career" },
    { name: "Our Services", href: "/services" },
  ] as NavigationItem[],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/15xCz98Lb6/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.facebook.com/share/15xCz98Lb6/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ] as SocialItem[],
};

export default function FooterSection() {
  return (
    <footer id="footer" className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Image
              src={logo.src}
              alt="Uppraisal Consultant"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-gray-400 max-w-xs">
              Making the world a better place through Uppraisal Consultant
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm/6 font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-white text-gray-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm/6 font-semibold text-white mb-3">Office Location</h3>
            <address className="not-italic text-gray-400 text-sm space-y-1">
              <p>Emami City Tower,</p>
              <p>Floor-9, Room No.- 903,</p>
              <p>Jessore Road, Near Nager Bazar,</p>
              <p>Kolkata – 700028, W.B.</p>
            </address>
          </div>

          <div>
            <h3 className="text-sm/6 font-semibold text-white mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.linkedin.com/in/sukanya-guha-das-17572034a/" className="text-sm/6 flex text-gray-400 hover:text-white">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  <span className="flex gap-4" >Sukanya Guha Das -  <Linkedin className="h-5 w-5 mr-2"/></span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jolly-chakraborty-77539b165/" className="text-sm/6 flex text-gray-400 hover:text-white">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  <span className="flex gap-4 ">Jolly Chakraborty - <Linkedin className="h-5 w-5 mr-2"/> </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hr@uppraisalconsultant.com"
                  className="text-sm/6 text-gray-400 flex hover:text-white"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  <span>hr@uppraisalconsultant.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://uppraisalconsultant.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm/6 text-gray-400 flex hover:text-white"
                >
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  <span>uppraisalconsultant.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-center text-gray-400">
            &copy; {new Date().getFullYear()} Uppraisal Consultant. All rights reserved.
          </p>
        </div>
        <div className="flex gap-1 sm:justify-end mt-3 sm:mt-2 justify-center"> 
          <p className="text-sm text-center text-gray-400">Website developed by</p>
        <a href="https://portfolio-website-ochre-gamma-18.vercel.app/" className="text-sm/6 flex text-gray-400 hover:text-white">
                  <span className="text-[#045be6] text-md font-semibold">Hameedullah Shaik and Praveen Gunja</span>
        </a>
        </div>
      </div>
    </footer>
  );
}
