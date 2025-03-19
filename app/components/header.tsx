'use client'

import React, { useState,  useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ArrowUpIcon } from '@heroicons/react/24/outline'
import logo from "../../public/uppraisal-logo.png"

const navigation = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Careers', href: '/careers' },
  { name: 'Our Services', href: '/services' },
  { name: 'Gallery', href: '/Gallery' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showFab, setShowFab] = useState(false) 
  const pathname = usePathname() // Get current route

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFab(true)
      } else {
        setShowFab(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
          <div className="fixed inset-0 z-50 bg-black bg-opacity-25" />
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
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${
                        pathname === item.href ? 'text-[#045be6] bg-gray-100' : 'text-gray-900'
                      } hover:bg-[#b7e3ff]`}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a href='#footer' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold'>Contact us &rarr;</a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {showFab && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        >
          <ArrowUpIcon className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Scroll to top</span>
        </button>
      )}
    </div>
  )
}

export default Header
