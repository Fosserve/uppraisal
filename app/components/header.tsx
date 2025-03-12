'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../../public/uppraisal-logo.png"

const navigation = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Careers', href: '/careers' },
  { name: 'Our Services', href: '/services' },
  { name: 'Gallery', href: '/Gallery' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`bg-white sticky top-0 z-50 transition-shadow ${isScrolled ? 'shadow-lg' : 'shadow-none'}`}>
      <header className="border-b border-gray-200">
        <nav aria-label="Global" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Uppraisal Consultant</span>
                <img
                  alt="Uppraisal Consultant"
                  src={logo.src}
                  className="h-10 w-auto"
                />
              </a>
            </div>
            
            <div className="hidden lg:flex lg:items-center lg:space-x-8 ml-8">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href ? 'text-[#045be6]' : 'text-gray-900 hover:text-[#045be6]'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-end flex-1">
              <a 
                href='#footer' 
                className="hidden lg:inline-flex items-center justify-center rounded-md bg-[#045be6] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0347b4]"
              >
                Contact Us
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Uppraisal Consultant</span>
                <img alt="Uppraisal Consultant" src={logo.src} className="h-10 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium ${
                        pathname === item.href ? 'text-[#045be6] bg-gray-50' : 'text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a 
                    href='#footer' 
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    Contact Us
                    <svg className="ml-2 inline h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}

export default Header
