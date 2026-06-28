'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function SalesPitch() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section
      ref={ref}
      className="w-full bg-black py-40 lg:py-64"
    >
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white/20 leading-none tracking-tight"
          style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
        >
          Gulf brands deserve films
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white leading-none tracking-tight mt-4"
          style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
        >
          that move like people remember them.
        </motion.p>
      </div>
    </section>
  )
}
