'use client'

import { Mail, Phone, MessageCircle } from 'lucide-react'

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* WhatsApp — neon green glow */}
      <a
        href="https://wa.me/97339007750"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: 'rgba(37, 211, 102, 0.15)',
          boxShadow: '0 0 12px rgba(37, 211, 102, 0.4), 0 0 24px rgba(37, 211, 102, 0.2)',
        }}
      >
        <MessageCircle
          size={18}
          className="text-[#25D366]"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        />
        {/* Hover label */}
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded bg-black/90 border border-white/10 text-white/70 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          WhatsApp
        </span>
      </a>

      {/* Phone — neon cyan glow */}
      <a
        href="tel:+97339007750"
        aria-label="Phone"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: 'rgba(0, 255, 255, 0.1)',
          boxShadow: '0 0 12px rgba(0, 255, 255, 0.4), 0 0 24px rgba(0, 255, 255, 0.2)',
        }}
      >
        <Phone
          size={18}
          className="text-cyan-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        />
        {/* Hover label */}
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded bg-black/90 border border-white/10 text-white/70 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          +973 3900 7750
        </span>
      </a>

      {/* Email — neon violet/magenta glow */}
      <a
        href="mailto:ceo@bahrainnights.com"
        aria-label="Email"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: 'rgba(139, 92, 246, 0.15)',
          boxShadow: '0 0 12px rgba(139, 92, 246, 0.5), 0 0 24px rgba(139, 92, 246, 0.25)',
        }}
      >
        <Mail
          size={18}
          className="text-violet-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        />
        {/* Hover label */}
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded bg-black/90 border border-white/10 text-white/70 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Email
        </span>
      </a>
    </div>
  )
}
