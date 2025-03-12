'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ArrowUpIcon } from '@heroicons/react/24/outline'
import logo from "../../public/uppraisal-logo.png"
import Link from 'next/link'

const navigation = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Careers', href: '/careers' },
  { name: 'Our Services', href: '/services' },
  { name: 'Gallery', href: '/Gallery' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showFab, setShowFab] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='bg-white sticky top-0 z-50 shadow-sm'>
      <header>
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center p-4 lg:px-8">
          <div className="flex">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Uppraisal Consultant</span>
              <img
                alt="Uppraisal Consultant"
                src={logo.src}
                className="h-12 w-auto hover:opacity-80 transition-opacity"
                loading="eager"
              />
            </Link>
          </div>
          <div className="flex ml-auto lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8 mx-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  pathname === item.href 
                    ? 'text-[#045be6] bg-blue-50' 
                    : 'text-gray-700 hover:text-[#045be6] hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link 
            href='#footer' 
            className='hidden lg:flex text-sm font-medium text-white bg-[#045be6] px-4 py-2 rounded-md hover:bg-[#0348b8] transition-colors'
          >
            Contact Us &rarr;
          </Link>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Uppraisal Consultant</span>
                <img alt="Uppraisal Consultant" src={logo.src} className="h-10 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium ${
                        pathname === item.href 
                          ? 'text-[#045be6] bg-blue-50' 
                          : 'text-gray-700 hover:text-[#045be6] hover:bg-blue-50'
                      } transition-colors`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link 
                    href='#footer' 
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:text-[#045be6] hover:bg-blue-50 transition-colors'
                  >
                    Contact us &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>

        {showFab && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-[#045be6] text-white rounded-full shadow-lg hover:bg-[#0348b8] transition-colors"
          >
            <ArrowUpIcon className="h-5 w-5" />
          </button>
        )}
      </header>
    </div>
  )
}

export default Header
