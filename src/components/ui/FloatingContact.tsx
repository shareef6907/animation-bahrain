'use client'

import Link from 'next/link'
import { MessageCircle, Mail, Phone } from 'lucide-react'

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/97339007750"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: 'rgba(37, 211, 102, 0.12)',
          boxShadow: '0 0 14px rgba(37, 211, 102, 0.45), 0 0 28px rgba(37, 211, 102, 0.2)',
        }}
      >
        <MessageCircle size={19} className="text-[#25D366]" />
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded bg-black/90 border border-white/10 text-white/70 text-xs font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          WhatsApp
        </span>
      </a>

      {/* Phone */}
      <a
        href="tel:+97339007750"
        aria-label="Phone"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: 'rgba(0, 255, 255, 0.08)',
          boxShadow: '0 0 14px rgba(0, 255, 255, 0.4), 0 0 28px rgba(0, 255, 255, 0.2)',
        }}
      >
        <Phone size={19} className="text-cyan-300" />
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded bg-black/90 border border-white/10 text-white/70 text-xs font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          +973 3900 7750
        </span>
      </a>

      {/* Email */}
      <a
        href="mailto:ceo@bahrainnights.com"
        aria-label="Email"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: 'rgba(139, 92, 246, 0.12)',
          boxShadow: '0 0 14px rgba(139, 92, 246, 0.5), 0 0 28px rgba(139, 92, 246, 0.25)',
        }}
      >
        <Mail size={19} className="text-violet-400" />
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded bg-black/90 border border-white/10 text-white/70 text-xs font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Email
        </span>
      </a>
    </div>
  )
}
