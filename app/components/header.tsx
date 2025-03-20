'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../../public/uppraisal-logo.png"

const navigation = [
  { name: 'Home', href: '/' },
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
    <div className='bg-white '>
      <header className="absolute bg-white inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center p-6 lg:px-8">
          <div className="flex">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Uppraisal Consultant</span>
              <img
                alt="Uppraisal Consultant"
                src={logo.src}
                className="h-10 w-auto"
              />
            </a>
          </div>
          <div className="flex ml-auto lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 mx-auto">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`text-md font-semibold ${
                  pathname === item.href ? 'text-[#045be6]' : 'text-gray-900'
                } hover:text-[#045be6]`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <a href='#footer' className='font-semibold hidden lg:flex text-md hover:text-[#045be6] bg-[#045be6] px-3 py-2 rounded-md  text-white hover:bg-white'>Contact Us &rarr;</a>
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
