'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import type { PortfolioVideo } from '@/lib/portfolio'

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
    if (videoEl.src && videoEl.src !== video.video_url) {
      videoEl.src = video.video_url
      videoEl.load()
    } else if (!videoEl.src) {
      videoEl.src = video.video_url
      videoEl.load()
    }
    setIsLoaded(true)
  }, [video.video_url])

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

  // Play/pause based on viewport visibility (eager items only)
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
    <div ref={containerRef}>
      <div className="relative bg-black">
        {/* 16:9 container — black letterbox for portrait/square */}
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          {/*
            BUG FIX: Always render the <video> element.
            Previously it was gated behind `isEager || isLoaded`, so non-eager
            items had no <video> in the DOM and their IntersectionObserver
            callbacks fired but isLoaded stayed false forever — causing the
            portfolio to show ~3 videos then 14 blank slots.
            Now src is set lazily, element is always present for intersection.
          */}
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
          {/* Mute toggle — bottom right, minimal */}
          {hasAudio && (
            <button
              onClick={(e) => { e.preventDefault(); setIsMuted(!isMuted) }}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              className="absolute bottom-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 border border-white/20 text-white/60 hover:text-white hover:bg-black/70 transition-all duration-300"
            >
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
          )}
        </div>
      </div>
      {/* Title below — minimal, no borders, no backgrounds */}
      {video.title && (
        <p className="font-mono text-xs text-white/40 uppercase tracking-[0.2em] mt-5">
          {video.title}
        </p>
      )}
    </div>
  )
}

export default function PortfolioGrid({ videos }: PortfolioGridProps) {
  return (
    <section id="portfolio" className="w-full bg-black pt-32 lg:pt-48 pb-40">
      {/* Massive top space — the silence */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Section label */}
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-white/30 mb-20 lg:mb-28">
          Selected Work
        </p>

        {/* Videos — generous gaps, room to breathe */}
        <div className="flex flex-col gap-20 lg:gap-28">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
