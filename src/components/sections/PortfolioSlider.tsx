'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react'
import type { PortfolioVideo } from '@/lib/portfolio'
import { motion } from 'framer-motion'

interface PortfolioSliderProps {
  videos: PortfolioVideo[]
}

export default function PortfolioSlider({ videos }: PortfolioSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [activeHasAudio, setActiveHasAudio] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const touchStartX = useRef<number>(0)

  const current = videos[currentIndex]

  const playAt = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsMuted(true)
  }, [])

  // Preload next/prev videos
  useEffect(() => {
    const preload = (idx: number) => {
      if (idx < 0 || idx >= videos.length) return
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'video'
      link.href = videos[idx].video_url
      document.head.appendChild(link)
    }
    preload(currentIndex + 1)
    preload(currentIndex - 1)
  }, [currentIndex, videos])

  // Manage video element
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.src = current.video_url
    video.load()
    video.play().catch(() => {})
    setActiveHasAudio(current.has_audio)
  }, [current])

  const prev = () => playAt(Math.max(0, currentIndex - 1))
  const next = () => playAt(Math.min(videos.length - 1, currentIndex + 1))

  const onVideoCanPlay = () => {
    try {
      const v = videoRef.current as unknown as {
        mozHasAudio?: boolean; audioTracks?: { length: number }
      }
      const has = Boolean(v?.mozHasAudio || (v?.audioTracks?.length && v.audioTracks.length > 0))
      setActiveHasAudio(has || current.has_audio)
    } catch {}
  }

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev()
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-32 px-4">
      {/* Page heading */}
      <div className="text-center mb-16">
        <p className="font-body text-xs uppercase tracking-[0.45em] text-white/30 mb-4">
          Our Work
        </p>
        <h1
          className="font-display leading-tight"
          style={{
            fontSize: 'clamp(40px, 6vw, 80px)',
            background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Animation Portfolio
        </h1>
        <p className="font-body text-sm text-white/40 mt-3">
          {currentIndex + 1} / {videos.length} videos
        </p>
      </div>

      {/* Slider */}
      <div className="w-full max-w-5xl">
        {/* Video area */}
        <div
          className="relative rounded-2xl overflow-hidden bg-black"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <video
              ref={videoRef}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="auto"
              onCanPlay={onVideoCanPlay}
              className="absolute inset-0 w-full h-full object-contain"
              style={{ backgroundColor: '#000' }}
            />
          </div>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: 'linear-gradient(to top, rgba(5,5,8,0.6) 0%, transparent 40%)',
            }}
          />

          {/* Controls — bottom */}
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-6">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-11 h-11 rounded-full flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft size={18} />
            </button>

            {activeHasAudio && (
              <button
                onClick={() => setIsMuted(!isMuted)}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
                className="w-11 h-11 rounded-full flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            )}

            <button
              onClick={next}
              disabled={currentIndex === videos.length - 1}
              className="w-11 h-11 rounded-full flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Progress dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1.5 pb-4">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => playAt(i)}
                aria-label={`Go to video ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === currentIndex ? 20 : 6,
                  height: 6,
                  backgroundColor: i === currentIndex ? 'rgba(139,92,246,0.9)' : 'rgba(255,255,255,0.25)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-thin">
          {videos.map((video, i) => (
            <button
              key={video.id}
              onClick={() => playAt(i)}
              className="flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300"
              style={{
                borderColor: i === currentIndex ? '#8b5cf6' : 'transparent',
                opacity: i === currentIndex ? 1 : 0.5,
              }}
            >
              <video
                src={video.video_url}
                preload="metadata"
                muted
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
