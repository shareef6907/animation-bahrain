"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { HeroVideo } from "@/lib/hero";

interface NetflixHeroProps {
  videos: HeroVideo[];
}

const AUDIO_KEY = "animationbahrain_audio_muted";
const FADE_DURATION_MS = 600;
const TEXT_FADE_BEFORE_END_MS = 400;
const PROGRESS_INTERVAL_MS = 100;

export default function NetflixHero({ videos }: NetflixHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [noAudioNotice, setNoAudioNotice] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressStartRef = useRef<number>(0);

  const active = videos[currentIndex];
  const total = videos.length;

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % total) + total) % total;
      if (next === currentIndex) return;
      setNextIndex(next);
      setIsTransitioning(true);
      setIsTextVisible(false);

      if (nextVideoRef.current) {
        nextVideoRef.current.src = videos[next].videoPath;
        nextVideoRef.current.load();
        nextVideoRef.current.muted = isMuted;
        nextVideoRef.current.play().catch(() => {});
      }

      setTimeout(() => {
        setCurrentIndex(next);
        setNextIndex(null);
        setIsTransitioning(false);
        setIsTextVisible(true);
        setProgress(0);
        progressStartRef.current = Date.now();
      }, FADE_DURATION_MS);
    },
    [total, currentIndex, isMuted, videos]
  );

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  // Initialize muted state from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(AUDIO_KEY);
    if (stored !== null) {
      setIsMuted(stored === "true");
    }
  }, []);

  // Sync muted state to localStorage and video elements
  useEffect(() => {
    localStorage.setItem(AUDIO_KEY, String(isMuted));
    if (videoRef.current) videoRef.current.muted = isMuted;
    if (nextVideoRef.current) nextVideoRef.current.muted = isMuted;
  }, [isMuted]);

  // Set initial video element src after mount
  useEffect(() => {
    if (videoRef.current && active.videoPath) {
      videoRef.current.src = active.videoPath;
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
      progressStartRef.current = Date.now();
    }
  }, [active.videoPath]);

  // Reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Visibility change — pause autoplay when tab hidden
  useEffect(() => {
    const handler = () => {
      if (document.hidden) {
        setIsPaused(true);
        videoRef.current?.pause();
      } else {
        setIsPaused(false);
        videoRef.current?.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, []);

  // Progress bar + text fade scheduling
  useEffect(() => {
    if (isTransitioning || !videoRef.current || reducedMotion) return;

    const updateProgress = () => {
      const video = videoRef.current;
      if (!video || !video.duration || !isFinite(video.duration)) return;
      const elapsed = (Date.now() - progressStartRef.current) / 1000;
      const pct = Math.min((elapsed / video.duration) * 100, 100);
      setProgress(pct);

      const timeUntilEnd = video.duration - elapsed;
      if (timeUntilEnd <= TEXT_FADE_BEFORE_END_MS / 1000 && isTextVisible) {
        setIsTextVisible(false);
      }
    };

    progressIntervalRef.current = setInterval(updateProgress, PROGRESS_INTERVAL_MS);
    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentIndex, isTransitioning, reducedMotion, isTextVisible]);

  // Video ended handler
  const handleVideoEnded = useCallback(() => {
    next();
  }, [next]);

  // Mute toggle
  const toggleMute = useCallback(() => {
    const video = videos[currentIndex];
    if (!isMuted) {
      setIsMuted(true);
      setNoAudioNotice(false);
    } else {
      if (video?.hasAudio) {
        setIsMuted(false);
        setNoAudioNotice(false);
      } else {
        setNoAudioNotice(true);
        setTimeout(() => setNoAudioNotice(false), 2000);
      }
    }
  }, [isMuted, currentIndex, videos]);

  // Keyboard controls
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "m" || e.key === "M") toggleMute();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, toggleMute]);

  if (!active) return null;

  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ height: "100dvh" }}
      aria-roledescription="carousel"
      aria-label="Animation Bahrain hero video showcase"
    >
      {/* ── BACKGROUND VIDEOS ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted={isMuted}
          autoPlay
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          className={`absolute inset-0 w-full h-full object-cover ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          style={{
            transitionProperty: "opacity",
            transitionDuration: reducedMotion ? "0ms" : `${FADE_DURATION_MS}ms`,
          }}
        />

        {nextIndex !== null && (
          <video
            ref={nextVideoRef}
            muted={isMuted}
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover ${
              isTransitioning ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transitionProperty: "opacity",
              transitionDuration: reducedMotion ? "0ms" : `${FADE_DURATION_MS}ms`,
            }}
          />
        )}

        {/* Bottom fade-to-black gradient */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none z-10"
          style={{
            height: "30%",
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 50%, black 100%)",
          }}
        />
      </div>

      {/* ── HERO TEXT CONTENT ── */}
      <div
        className={`absolute left-0 right-0 z-20 flex flex-col items-start justify-end px-8 pb-32 md:pb-40 ${
          isTextVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          top: "50vh",
          transform: "translateY(-60%)",
          transitionProperty: "opacity",
          transitionDuration: reducedMotion ? "0ms" : "300ms",
        }}
      >
        <div className="max-w-2xl">
          <p
            className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3 font-mono pl-0.5"
            style={{ fontSize: "11px" }}
          >
            {active.category}
          </p>
          <h1
            className="text-white font-display leading-none mb-4"
            style={{ fontSize: "clamp(36px, 9vw, 96px)" }}
          >
            {active.title}
          </h1>
          <p
            className="text-white/80 max-w-xl line-clamp-2"
            style={{ fontSize: "14px" }}
          >
            {active.description}
          </p>
        </div>
      </div>

      {/* ── BOTTOM LEFT: COUNTER + PROGRESS BARS ── */}
      <div className="absolute bottom-8 left-8 z-30 flex flex-col gap-2">
        <div className="font-mono text-sm text-white/60">
          {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
        <div className="flex gap-1">
          {videos.map((_, i) => (
            <div
              key={i}
              className="h-0.5 bg-white/30 overflow-hidden"
              style={{ width: "40px" }}
            >
              <div
                className="h-full bg-white origin-left"
                style={{
                  width:
                    i === currentIndex
                      ? `${progress}%`
                      : i < currentIndex
                      ? "100%"
                      : "0%",
                  transition: reducedMotion
                    ? "none"
                    : i === currentIndex
                    ? "width 100ms linear"
                    : "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM RIGHT: MUTE BUTTON ── */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="relative">
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute videos" : "Mute videos"}
            aria-pressed={!isMuted}
            className="h-12 w-12 rounded-full border border-white/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          >
            {isMuted ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
                <line x1="17" y1="9" x2="23" y2="15" />
                <line x1="23" y1="9" x2="17" y2="15" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
          {noAudioNotice && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white/80 text-xs px-2 py-1 rounded whitespace-nowrap">
              No audio on this video
            </div>
          )}
        </div>
      </div>

      {/* Screen reader announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Now playing: {active.title}, {active.category}
      </div>
    </section>
  );
}