"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { href: "/services/2d-animation", label: "2D Animation" },
  { href: "/services/3d-animation", label: "3D Animation" },
  { href: "/services/brand-films", label: "Brand Films" },
  { href: "/services/motion-graphics", label: "Motion Graphics" },
  { href: "/services/explainer-videos", label: "Explainers" },
  { href: "/services/product-films", label: "Product Films" },
];

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/industries/f1-bahrain-grand-prix", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-abyss/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-amber flex items-center justify-center shrink-0">
              <span className="font-editorial text-abyss font-bold text-lg">A</span>
            </div>
            <span className="font-editorial text-fawn text-lg tracking-tight">
              Animation Bahrain
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="font-mono text-xs text-fawn-muted hover:text-fawn transition-colors duration-300 tracking-wider uppercase flex items-center gap-1">
                Services
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-48 rounded-xl border border-white/5 bg-surface-elevated p-2 shadow-xl"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-3 font-mono text-xs text-fawn-muted hover:text-fawn hover:bg-white/5 rounded-lg transition-colors duration-200"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-xs text-fawn-muted hover:text-fawn transition-colors duration-300 tracking-wider uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/contact"
              className="font-mono text-xs border border-white/20 text-fawn px-6 py-3 rounded-xl font-medium tracking-wider uppercase hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-fawn transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-fawn transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-fawn transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-abyss lg:hidden pt-28 px-8"
          >
            <ul className="flex flex-col gap-8">
              <li>
                <span className="font-mono text-xs uppercase tracking-widest text-fawn-muted">Services</span>
                <ul className="mt-3 flex flex-col gap-4 pl-4">
                  {services.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => setMenuOpen(false)}
                        className="font-editorial text-2xl text-fawn hover:text-amber transition-colors"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-editorial text-2xl text-fawn hover:text-amber transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-4">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm border border-white/20 text-fawn px-8 py-4 rounded-xl font-medium tracking-wider uppercase inline-block"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
