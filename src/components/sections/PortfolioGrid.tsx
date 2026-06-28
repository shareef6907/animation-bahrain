'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import type { PortfolioVideo } from '@/lib/portfolio'
import { motion, useInView } from 'framer-motion'

interface PortfolioGridProps {
  videos: PortfolioVideo[]
}

const EAGER_COUNT = 3

function VideoCard({ video, index }: { video: PortfolioVideo; index: number }) {
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAudio = video.has_audio
  const isEager = index < EAGER_COUNT

  const loadVideo = useCallback(() => {
    const videoEl = videoRef.current
    if (!videoEl) return
    if (!videoEl.src || videoEl.src !== video.video_url) {
      videoEl.src = video.video_url
      videoEl.load()
    }
    if (!isLoaded) setIsLoaded(true)
  }, [video.video_url, isLoaded])

  useEffect(() => {
    if (isEager) {
      loadVideo()
      return
    }
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadVideo()
          observer.disconnect()
        }
      },
      { rootMargin: '400px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [isEager, loadVideo])

  // Play/pause based on viewport
  useEffect(() => {
    if (!isEager) return
    const videoEl = videoRef.current
    if (!videoEl) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          videoEl.pause()
        } else {
          videoEl.play().catch(() => {})
        }
      },
      { rootMargin: '600px 0px' }
    )
    observer.observe(videoEl)
    return () => observer.disconnect()
  }, [isEager])

  return (
    <div ref={containerRef} className="w-full">
      <div className="relative bg-black rounded-2xl overflow-hidden">
        {/* 16:9 container — letterboxed */}
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <video
            ref={videoRef}
            autoPlay={isEager}
            muted={isMuted}
            loop
            playsInline
            preload={isEager ? 'metadata' : 'none'}
            onLoadedData={() => setIsLoaded(true)}
            className="absolute inset-0 w-full h-full object-contain"
            style={{ backgroundColor: '#000' }}
          />
          {/* Mute toggle */}
          {hasAudio && isLoaded && (
            <button
              onClick={(e) => { e.preventDefault(); setIsMuted(!isMuted) }}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              className="absolute bottom-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:bg-black/80 transition-all duration-300"
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function PortfolioGrid({ videos }: PortfolioGridProps) {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-10% 0px' })

  return (
    <section id="portfolio" className="w-full py-32 lg:py-44">
      <div className="container-center">
        {/* Section heading — centered */}
        <div ref={headingRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-xs uppercase tracking-[0.45em] text-white/30 mb-6"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-tight"
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Our Animation Work
          </motion.h2>
        </div>

        {/* Videos — single column, full-width within container, centered */}
        <div className="flex flex-col gap-10 lg:gap-14">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.7, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            >
              <VideoCard video={video} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
