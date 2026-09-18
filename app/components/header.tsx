'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
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
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fbfaf6]/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.04)] border-b border-slate-200/60 py-4'
          : 'bg-[#fbfaf6]/80 backdrop-blur-xs border-b border-slate-200/20 py-5 sm:py-6'
      }`}
    >
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="transition-transform duration-200 hover:opacity-90">
            <span className="sr-only">Uppraisal Consultant</span>
            <Image
              alt="Uppraisal Consultant"
              src={logo}
              width={150}
              height={42}
              priority
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation - Spacious, Open, and Elegant */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8 xl:gap-x-10">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-1 text-sm transition-colors duration-200 ${
                  isActive
                    ? 'font-semibold text-blue-600 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-blue-600'
                    : 'font-medium text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex lg:items-center">
          <a
            href="#footer"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-600/20 hover:-translate-y-0.5"
          >
            <span>Let&apos;s talk</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-white p-6 shadow-2xl transition-all sm:ring-1 sm:ring-slate-900/10">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
              <span className="sr-only">Uppraisal Consultant</span>
              <Image alt="Uppraisal Consultant" src={logo} width={130} height={36} className="h-9 w-auto object-contain" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-xl p-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-1 py-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/80 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />}
                  </Link>
                )
              })}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100">
              <a
                href="#footer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                <span>Contact Us</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header
