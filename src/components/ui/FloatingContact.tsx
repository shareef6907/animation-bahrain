'use client'

import { Mail, Phone } from 'lucide-react'

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <a
        href="mailto:ceo@bahrainnights.com"
        aria-label="Email"
        className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white/60 hover:text-white hover:bg-white/15 hover:border-white/25 transition-all duration-300"
      >
        <Mail size={16} />
      </a>
      <a
        href="tel:+97339007750"
        aria-label="Call"
        className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white/60 hover:text-white hover:bg-white/15 hover:border-white/25 transition-all duration-300"
      >
        <Phone size={16} />
      </a>
    </div>
  )
}
