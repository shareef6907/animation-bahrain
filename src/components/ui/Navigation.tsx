'use client'

import { useState, useEffect } from 'react'
import { Mail, MessageCircle, Phone } from 'lucide-react'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        <div />
        <div />
        <div className="hidden lg:flex items-center justify-self-end gap-4">
          <a
            href="mailto:ceo@bahrainnights.com"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
            <span className="font-body text-sm font-medium hidden md:block">ceo@bahrainnights.com</span>
          </a>
          <a
            href="https://wa.me/97339007750"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
            <span className="font-body text-sm font-medium hidden md:block">WhatsApp</span>
          </a>
          <a
            href="tel:+97339007750"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            aria-label="Phone"
          >
            <Phone size={18} />
            <span className="font-body text-sm font-medium hidden md:block">+973 3900 7750</span>
          </a>
        </div>
      </nav>
    </header>
  )
}