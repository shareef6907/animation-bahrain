'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Mail, Phone, X } from 'lucide-react'

export default function Navigation() {
  const [visible, setVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showNav = () => {
    setVisible(true)
    if (hideTimer.current) clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => {
      if (!menuOpen) setVisible(false)
    }, 3000)
  }

  const navLinks = [
    { href: '/portfolio', label: 'Work' },
    { href: '/services/brand-films', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Nav — invisible until mouse enters top zone, then fades in */}
      <div
        className="fixed top-0 left-0 right-0 z-50"
        onMouseEnter={() => {
          if (hideTimer.current) clearTimeout(hideTimer.current)
          setVisible(true)
        }}
        onMouseLeave={showNav}
      >
        <header
          className={`transition-all duration-700 ${
            visible || scrolled || menuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          } ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}
        >
          <nav className="flex items-center justify-between px-8 lg:px-12 py-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <span className="font-display text-white tracking-widest text-lg">AB</span>
            </Link>

            {/* Desktop links — centered, ultra-minimal */}
            <ul className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-xs text-white/50 hover:text-white/90 transition-colors duration-300 uppercase tracking-[0.2em]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact icons — right side, subtle */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:ceo@bahrainnights.com"
                aria-label="Email"
                className="flex items-center justify-center w-9 h-9 rounded-full text-white/40 hover:text-white/80 hover:bg-white/5 transition-all duration-300"
              >
                <Mail size={15} />
              </a>
              <a
                href="tel:+97339007750"
                aria-label="Phone"
                className="flex items-center justify-center w-9 h-9 rounded-full text-white/40 hover:text-white/80 hover:bg-white/5 transition-all duration-300"
              >
                <Phone size={15} />
              </a>
              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full text-white/40 hover:text-white/80 transition-all duration-300 ml-1"
              >
                {menuOpen ? <X size={15} /> : (
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <rect y="3" width="15" height="1" fill="currentColor" />
                    <rect y="7" width="15" height="1" fill="currentColor" />
                    <rect y="11" width="15" height="1" fill="currentColor" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden bg-black border-t border-white/5 px-8 py-8">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-display text-3xl text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>
      </div>
    </>
  )
}
