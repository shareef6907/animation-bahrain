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
        <div className="hidden lg:flex items-center justify-end gap-4">
          <a
            href="mailto:ceo@bahrainnights.com"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Email"
          >
            <Mail size={18} className="text-white" />
          </a>
          <a
            href="https://wa.me/97339007750"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} className="text-white" />
          </a>
          <a
            href="tel:+97339007750"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Phone"
          >
            <Phone size={18} className="text-white" />
          </a>
        </div>
      </nav>
    </header>
  )
}