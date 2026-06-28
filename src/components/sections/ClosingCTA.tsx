'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function ClosingCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section className="relative py-36 lg:py-52 overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="relative z-10 text-center container-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-xs uppercase tracking-[0.45em] text-white/30 mb-8"
        >
          Ready to Stand Out?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display leading-tight mb-10 max-w-4xl mx-auto"
          style={{
            fontSize: 'clamp(38px, 5.5vw, 84px)',
            background: 'linear-gradient(90deg, #8b5cf6, #a855f7 40%, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Let&apos;s make your brand{' '}
          <em
            style={{
              fontStyle: 'italic',
              background: 'linear-gradient(90deg, #ec4899, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            unmissable.
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-base text-white/50 mb-12 max-w-xl mx-auto"
        >
          We take on a limited number of projects each quarter.
          Reach out and let&apos;s see if we&apos;re the right fit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/contact" className="btn-gradient">
            📬 Start a Conversation
          </Link>
          <Link href="/portfolio" className="btn-ghost">
            See More Work
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
