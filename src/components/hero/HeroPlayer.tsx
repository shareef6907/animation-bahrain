'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Volume2, VolumeX } from 'lucide-react'
import type { HeroVideo } from '@/lib/hero'
import { useAudio } from '@/contexts/AudioContext'

interface HeroPlayerProps {
  items: HeroVideo[]
}

export function HeroPlayer({ items }: HeroPlayerProps) {
  const [hasAudioTrack, setHasAudioTrack] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { unmutedId, setUnmuted, muteAll } = useAudio()
  const isUnmuted = unmutedId === 'hero'

  useEffect(() => {
    const saved = localStorage.getItem('ab_hero_muted')
    if (saved !== null) {
      if (saved === 'false') setUnmuted('hero')
    }
    setFadeIn(true)
  }, [setUnmuted])

  const toggleMute = () => {
    if (isUnmuted) {
      muteAll()
    } else {
      setUnmuted('hero')
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onCanPlay = () => {
      try {
        const v = video as unknown as {
          mozHasAudio?: boolean
          webkitAudioDecodedByteCount?: number
          audioTracks?: { length: number }
        }
        const has = Boolean(
          v?.mozHasAudio ||
            v?.webkitAudioDecodedByteCount ||
            (v?.audioTracks?.length && v.audioTracks.length > 0)
        )
        setHasAudioTrack(has)
      } catch {}
    }
    video.addEventListener('canplay', onCanPlay)
    return () => video.removeEventListener('canplay', onCanPlay)
  }, [])

  // Sync muted state with AudioContext
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = !isUnmuted
  }, [isUnmuted])

  if (!items.length) return null
  const current = items[0]

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Hero video */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
        <video
          key={current.id}
          ref={videoRef}
          src={current.video_url}
          autoPlay
          muted={!isUnmuted}
          playsInline
          loop
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(5,5,8,0.4) 0%, rgba(5,5,8,0.1) 40%, rgba(5,5,8,0.7) 80%, rgba(5,5,8,0.96) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(139,92,246,0.1) 0%, transparent 65%)',
        }}
      />

      {/* Content — centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Eyebrow */}
        <p
          className="font-body text-xs uppercase tracking-[0.45em] text-white/40 mb-8"
          style={{ opacity: fadeIn ? 1 : 0, transition: 'opacity 0.8s ease 0.2s' }}
        >
          🎬 Cinematic Animation Studio
        </p>

        {/* Headline — gradient text, centered */}
        <h1
          className="font-display leading-none tracking-wide mb-8 max-w-5xl"
          style={{
            fontSize: 'clamp(48px, 8vw, 112px)',
            opacity: fadeIn ? 1 : 0,
            transition: 'opacity 0.9s ease 0.4s',
            background: 'linear-gradient(90deg, #8b5cf6, #a855f7 35%, #ec4899 65%, #f472b6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          We Film Your Story
        </h1>

        {/* Sub-headline */}
        <p
          className="font-body text-base lg:text-lg text-white/55 max-w-2xl mb-12 leading-relaxed"
          style={{ opacity: fadeIn ? 1 : 0, transition: 'opacity 0.8s ease 0.65s' }}
        >
          Premium brand films and motion graphics for the brands that
          refuse to be forgettable.
        </p>

        {/* CTA pills */}
        <div
          className="flex flex-wrap gap-4 justify-center"
          style={{ opacity: fadeIn ? 1 : 0, transition: 'opacity 0.8s ease 0.8s' }}
        >
          <Link href="/portfolio" className="btn-gradient">
            🎥 View Our Work
          </Link>
          <Link href="/contact" className="btn-ghost">
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Mute toggle — bottom right */}
      {hasAudioTrack && (
        <button
          onClick={toggleMute}
          aria-label={isUnmuted ? 'Mute' : 'Unmute'}
          className="absolute bottom-8 right-8 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
          style={{ opacity: fadeIn ? 1 : 0, transition: 'opacity 0.8s ease 1s' }}
        >
          {isUnmuted ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>
      )}
    </section>
  )
}
