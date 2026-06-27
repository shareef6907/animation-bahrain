'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import type { PortfolioVideo } from '@/lib/portfolio'

interface PortfolioGridProps {
  videos: PortfolioVideo[]
}

// How many videos to eagerly preload (viewport + 1 row ahead)
const EAGER_COUNT = 4

function LazyVideoCard({ video, index }: { video: PortfolioVideo; index: number }) {
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAudio = video.has_audio

  // Eager if within first EAGER_COUNT videos, otherwise lazy
  const isEager = index < EAGER_COUNT

  const loadVideo = useCallback(() => {
    const videoEl = videoRef.current
    if (!videoEl || videoEl.src) return
    videoEl.src = video.video_url
    videoEl.load()
    setIsLoaded(true)
  }, [video.video_url])

  // IntersectionObserver: load when within 500px of viewport
  useEffect(() => {
    if (isEager) {
      // Eager: load immediately
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
      { rootMargin: '500px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [isEager, loadVideo])

  // Pause video when it scrolls out of far view to free bandwidth
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
      { rootMargin: '800px 0px' }
    )
    observer.observe(videoEl)
    return () => observer.disconnect()
  }, [isEager])

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsMuted(!isMuted)
  }

  return (
    <div className="group" ref={containerRef}>
      <div className="relative aspect-video bg-black overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload={isEager ? 'metadata' : 'none'}
          onLoadedData={() => setIsLoaded(true)}
          className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
          poster="" // Dark bg-color shows while loading — no external thumbnail fetch
          style={{ backgroundColor: '#0a0a0a' }}
        />
        {/* Subtle loading shimmer while video loads */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-pulse pointer-events-none" />
        )}
        {hasAudio && isLoaded && (
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/30 hover:bg-black/80 flex items-center justify-center text-white"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        )}
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        {video.title && (
          <h3 className="font-display text-2xl lg:text-3xl text-white tracking-tight">
            {video.title}
          </h3>
        )}
        {video.category && (
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 shrink-0">
            {video.category}
          </span>
        )}
      </div>
      {video.description && (
        <p className="text-white/60 text-sm mt-2 leading-relaxed max-w-md">
          {video.description}
        </p>
      )}
    </div>
  )
}

export default function PortfolioGrid({ videos }: PortfolioGridProps) {
  return (
    <section id="portfolio" className="w-full bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-center text-4xl lg:text-7xl text-white tracking-tight">
          Our Work
        </h2>
        <p className="text-white/60 text-center mt-4 max-w-xl mx-auto text-base">
          Brand films, product loops, and motion identities built for premium clients across the GCC.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16 lg:mt-20">
          {videos.map((video, index) => (
            <LazyVideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}