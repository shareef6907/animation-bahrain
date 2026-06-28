'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

export function ClosingCTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section
      ref={ref}
      className="w-full bg-black py-40 lg:py-56 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto px-8 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(32px, 5vw, 72px)' }}
        >
          Ready to make your brand{' '}
          <em className="not-italic text-violet-400">unmissable?</em>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs text-white/40 uppercase tracking-[0.2em] mt-8 mb-14"
        >
          We respond within 24 hours
        </motion.p>

        {/* Contact — minimal icon buttons, violet as the ONE accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="mailto:ceo@bahrainnights.com"
            aria-label="Email"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-violet-600 text-white font-mono text-xs uppercase tracking-widest hover:bg-violet-500 transition-all duration-300"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>
          <a
            href="tel:+97339007750"
            aria-label="Phone"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all duration-300"
          >
            <Phone size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
