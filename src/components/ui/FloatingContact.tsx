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
        aria-label="Contact via WhatsApp"
        className="group flex items-center justify-center rounded-full bg-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 w-14 h-14"
      >
        <MessageCircle size={22} className="text-zinc-900" />
      </a>
      <a
        href="tel:+97339007750"
        aria-label="Call us"
        className="group flex items-center justify-center rounded-full bg-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 w-14 h-14"
      >
        <Phone size={22} className="text-zinc-900" />
      </a>
      <a
        href="mailto:ceo@bahrainnights.com"
        aria-label="Email us"
        className="group flex items-center justify-center rounded-full bg-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 w-14 h-14"
      >
        <Mail size={22} className="text-zinc-900" />
      </a>
    </div>
  )
}