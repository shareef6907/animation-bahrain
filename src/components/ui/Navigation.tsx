'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Mail, Phone, Menu, X, MessageCircle } from 'lucide-react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '/portfolio', label: 'Work' },
    { href: '/services/brand-films', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-center">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Wordmark */}
            <Link href="/" className="flex items-center gap-2 group">
              <span
                className="font-display text-lg tracking-[0.15em] gradient-text-warm"
                style={{ fontSize: '1.1rem' }}
              >
                Animation Bahrain
              </span>
            </Link>

            {/* Desktop contact icons only — no text nav */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://wa.me/97339007750"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full text-white/40 hover:text-[#25D366] hover:bg-white/5 transition-all duration-300"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="mailto:ceo@bahrainnights.com"
                aria-label="Email"
                className="flex items-center justify-center w-9 h-9 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+97339007750"
                aria-label="Phone"
                className="flex items-center justify-center w-9 h-9 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <Phone size={16} />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-all"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl text-white/70 hover:text-white transition-colors tracking-wide"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-6 mt-8">
            <a href="https://wa.me/97339007750" aria-label="WhatsApp" className="text-white/40 hover:text-[#25D366] transition-colors">
              <MessageCircle size={22} />
            </a>
            <a href="mailto:ceo@bahrainnights.com" aria-label="Email" className="text-white/40 hover:text-white transition-colors">
              <Mail size={22} />
            </a>
            <a href="tel:+97339007750" aria-label="Phone" className="text-white/40 hover:text-white transition-colors">
              <Phone size={22} />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
