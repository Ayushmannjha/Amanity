"use client"

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'SOLUTIONS', href: '#solutions' },
    { label: 'INDUSTRIES', href: '#industries' },
    { label: 'TEAM', href: '/team' },
    { label: 'BLOG', href: '#blog' },
    { label: 'CONTACT', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
<a
  href="#"
  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
>
  <Image
    src="/amanity-logo-new.png"
    alt="AMANITY Logo"
    width={70}
    height={70}
    className="h-14 w-auto"
  />

  {/* Company Name */}
  <div className="flex flex-col leading-tight">
    <span className="text-2xl font-extrabold tracking-wide text-white">
      AMANITY
    </span>

    <span className="text-sm font-bold tracking-[0.18em] text-orange-500">
      TECH SOLUTIONS
    </span>
  </div>
</a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-1 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block bg-linear-to-r from-orange-500 to-yellow-400 text-black px-6 py-2 rounded-lg font-semibold text-sm shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform">
              Get In Touch
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-linear-to-r from-orange-500 to-yellow-400 text-black px-6 py-2 rounded-lg font-semibold text-sm mt-4 shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform">
              Get In Touch
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
