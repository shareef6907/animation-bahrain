'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SalesPitch() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section className="relative py-40 lg:py-56 flex items-center justify-center overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.07) 0%, transparent 65%)',
        }}
      />

      <div ref={ref} className="relative z-10 text-center container-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-xs uppercase tracking-[0.45em] text-white/30 mb-10"
        >
          Gulf Brands Deserve More
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display leading-tight tracking-wide max-w-5xl mx-auto mb-10"
          style={{
            fontSize: 'clamp(42px, 6.5vw, 96px)',
            background: 'linear-gradient(90deg, #8b5cf6, #a855f7 40%, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Films that move people,<br />not just products.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-base lg:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed my-12 md:my-20 text-center"
        >
          We create brand films and motion graphics that hold attention long
          enough to actually be remembered.
        </motion.p>

        {/* Service emoji pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-3 justify-center mt-14"
        >
          {[
            { emoji: '🎬', label: 'Brand Films' },
            { emoji: '🎨', label: 'Motion Graphics' },
            { emoji: '🎯', label: 'Explainer Videos' },
            { emoji: '✨', label: 'Product Films' },
          ].map(({ emoji, label }) => (
            <span
              key={label}
              className="px-5 py-2.5 rounded-full border border-white/10 text-white/60 text-sm font-body hover:border-violet/30 hover:text-white/80 transition-all duration-300"
            >
              {emoji} {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
