"use client";

import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
      <nav className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        {/* Column 1: logo, left-aligned */}
        <div className="justify-self-start">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-lg bg-amber flex items-center justify-center">
              <span className="font-body text-abyss font-bold text-lg">A</span>
            </div>
            <span className="font-body text-fawn text-lg tracking-tight whitespace-nowrap">
              Animation Bahrain
            </span>
          </Link>
        </div>

        {/* Column 2: empty — three-column grid keeps spacing balanced */}
        <div />

        {/* Column 3: contact icons, right-aligned */}
        <div className="hidden lg:flex items-center justify-self-end gap-4">
          <a
            href="mailto:ceo@bahrainnights.com"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={18} strokeWidth={1.5} />
            <span className="font-body text-sm font-medium">ceo@bahrainnights.com</span>
          </a>
          <a
            href="https://wa.me/97339007750"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} strokeWidth={1.5} />
            <span className="font-body text-sm font-medium">WhatsApp</span>
          </a>
          <a
            href="tel:+97339007750"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            aria-label="Phone"
          >
            <Phone size={18} strokeWidth={1.5} />
            <span className="font-body text-sm font-medium">+973 3900 7750</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}