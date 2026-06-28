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
  const [fadeIn, setFadeIn] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const saved = localStorage.getItem('ab_hero_muted')
    if (saved !== null) setIsMuted(saved === 'true')
  }, [])

  useEffect(() => {
    setFadeIn(false)
    const t = setTimeout(() => setFadeIn(true), 100)
    return () => clearTimeout(t)
  }, [currentIndex])

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
      {/* Film */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
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
      </div>

      {/* Bottom fade to black — lets film breathe */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
        }}
      />

      {/* Minimal headline — only this, no title/category/description */}
      <div className="absolute inset-0 flex flex-col items-start justify-end z-10 pb-20 px-8 lg:pb-28 lg:px-20">
        <p
          className="font-mono text-xs uppercase tracking-[0.4em] text-white/40 mb-6"
          style={{ opacity: fadeIn ? 1 : 0, transition: 'opacity 0.8s ease 0.3s' }}
        >
          Animation Bahrain
        </p>
        <h2
          className="font-display text-white leading-none tracking-tight max-w-4xl"
          style={{ fontSize: 'clamp(36px, 6vw, 88px)', opacity: fadeIn ? 1 : 0, transition: 'opacity 0.8s ease 0.5s' }}
        >
          We don&apos;t illustrate brands.{' '}
          <em className="not-italic text-violet-400">We direct them.</em>
        </h2>
      </div>

      {/* Mute toggle — almost invisible, bottom-right */}
      {(hasAudioTrack || current.has_audio) && (
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          className="absolute bottom-8 right-8 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white/60 hover:text-white transition-all duration-300"
          style={{ opacity: fadeIn ? 1 : 0, transition: 'opacity 0.8s ease 0.8s' }}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      )}
    </section>
  )
}
