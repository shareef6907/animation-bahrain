'use client'

import { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import type { HeroVideo } from '@/lib/hero'

interface HeroPlayerProps {
  items: HeroVideo[]
}

export function HeroPlayer({ items }: HeroPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [hasAudioTrack, setHasAudioTrack] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const saved = localStorage.getItem('ab_hero_muted')
    if (saved !== null) setIsMuted(saved === 'true')
  }, [])

  const toggleMute = () => {
    const newMuted = !isMuted
    setIsMuted(newMuted)
    localStorage.setItem('ab_hero_muted', String(newMuted))
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => {})
  }, [currentIndex])

  // Detect audio track - use any to bypass TS
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const checkAudio = () => {
      const v = video as unknown as { mozHasAudio?: boolean; webkitAudioDecodedByteCount?: number; audioTracks?: { length: number } }
      const hasAudio = Boolean(v?.mozHasAudio || v?.webkitAudioDecodedByteCount || (v?.audioTracks?.length && v.audioTracks.length > 0))
      setHasAudioTrack(hasAudio)
    }
    video.addEventListener('canplay', checkAudio)
    return () => video.removeEventListener('canplay', checkAudio)
  }, [currentIndex])

  const handleEnded = () => {
    setCurrentIndex((i) => (i + 1) % items.length)
  }

  if (!items.length) return null
  const current = items[currentIndex]

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <video
        key={current.id}
        ref={videoRef}
        src={current.video_url}
        autoPlay
        muted={isMuted}
        playsInline
        preload="auto"
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 flex items-end pb-24 px-6 lg:px-16 z-10">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/70 mb-4">
            {current.category}
          </div>
          <h1 className="font-display text-white leading-none tracking-tight" style={{ fontSize: 'clamp(48px, 9vw, 120px)' }}>
            {current.title}
          </h1>
          <p className="font-body text-white/80 text-base lg:text-lg mt-6 max-w-xl line-clamp-2">
            {current.description}
          </p>
        </div>
      </div>
      {(hasAudioTrack || current.has_audio) && (
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-6 lg:right-16 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/30 hover:bg-black/80 flex items-center justify-center text-white"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      )}
      <div className="absolute bottom-8 left-6 lg:left-16 z-10 flex gap-2">
        {items.map((_, i) => (
          <div key={i} className={i === currentIndex ? 'w-8 h-1 bg-white rounded-full' : 'w-2 h-1 bg-white/30 rounded-full'} />
        ))}
      </div>
    </section>
  )
}
