'use client'

import { MessageCircle, Phone, Mail } from 'lucide-react'

export function FloatingContact() {
  return (
    <div 
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex flex-col gap-3"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href="https://wa.me/97339007750"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group flex items-center justify-center rounded-full bg-black shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 w-14 h-14"
        style={{ boxShadow: '0 0 12px #22c55e, 0 0 24px #22c55e40' }}
      >
        <MessageCircle size={22} style={{ color: '#22c55e' }} />
      </a>
      <a
        href="tel:+97339007750"
        aria-label="Call"
        className="group flex items-center justify-center rounded-full bg-black shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 w-14 h-14"
        style={{ boxShadow: '0 0 12px #06b6d4, 0 0 24px #06b6d440' }}
      >
        <Phone size={22} style={{ color: '#06b6d4' }} />
      </a>
      <a
        href="mailto:ceo@bahrainnights.com"
        aria-label="Email"
        className="group flex items-center justify-center rounded-full bg-black shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 w-14 h-14"
        style={{ boxShadow: '0 0 12px #d946ef, 0 0 24px #d946ef40' }}
      >
        <Mail size={22} style={{ color: '#d946ef' }} />
      </a>
    </div>
  )
}