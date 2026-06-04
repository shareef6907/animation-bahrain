"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { works, WorkItem } from "@/data/work";

interface CinematicSliderProps {
  items?: WorkItem[];
}

const YELLOW = "#FFD60A";
const TEST_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const TEST_POSTER =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg";

function getAspectRatioClass(ratio: WorkItem["aspectRatio"]) {
  switch (ratio) {
    case "vertical":
      return "aspect-[9/16] max-h-[60vh]";
    case "square":
      return "aspect-square max-h-[60vh]";
    case "horizontal":
    default:
      return "aspect-video max-h-[60vh]";
  }
}

export default function CinematicSlider({
  items = works,
}: CinematicSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const total = items.length;
  const active = items[current];

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % total) + total) % total;
      setCurrent(next);
      setIsPlaying(true);
    },
    [total]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Keyboard controls
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  // Autoplay / pause
  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, current]);

  // Reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Touch drag
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = e.changedTouches[0].clientX - dragStartX;
    if (Math.abs(delta) > 50) {
      delta < 0 ? next() : prev();
    }
    setIsDragging(false);
  };

  const prevIndex = ((current - 1) % total + total) % total;
  const nextIndex = (current + 1) % total;

  return (
    <section
      className="relative w-full bg-black overflow-hidden select-none"
      style={{ height: "100vh" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── PEEK TILES ── */}
      {/* Previous */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="group absolute left-0 top-1/2 z-20 flex items-center -translate-y-1/2 w-[12vw] max-w-[160px] h-full justify-center opacity-30 hover:opacity-60 transition-opacity duration-300"
      >
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <Image
            src={items[prevIndex].posterUrl}
            alt={items[prevIndex].title}
            fill
            className="object-contain"
            sizes="160px"
          />
        </div>
      </button>

      {/* Next */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="group absolute right-0 top-1/2 z-20 flex items-center -translate-y-1/2 w-[12vw] max-w-[160px] h-full justify-center opacity-30 hover:opacity-60 transition-opacity duration-300"
      >
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <Image
            src={items[nextIndex].posterUrl}
            alt={items[nextIndex].title}
            fill
            className="object-contain"
            sizes="160px"
          />
        </div>
      </button>

      {/* ── CENTER STAGE ── */}
      <div className="absolute inset-0 flex items-center justify-center px-[15vw]">
        <div
          className="relative flex items-center justify-center w-full"
          style={{ height: "60vh" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.4 }}
              className={`relative w-full flex items-center justify-center ${getAspectRatioClass(active.aspectRatio)}`}
            >
              <video
                ref={videoRef}
                src={active.videoUrl}
                poster={active.posterUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-contain bg-black"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── BOTTOM AREA ── */}
      <div className="absolute bottom-0 inset-x-0 z-20 flex items-end justify-between px-8 pb-10">
        {/* Left: counter */}
        <div className="font-mono text-sm text-white/60">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>

        {/* Center: title block */}
        <div className="flex-1 text-center px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`presenter-${active.slug}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
            >
              <span
                className="font-mono text-xs uppercase tracking-[0.2em] text-white/60 block mb-2"
              >
                {active.presenter}
              </span>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${active.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: reducedMotion ? 0 : 0.4 }}
              className="font-editorial font-black uppercase leading-none tracking-[-0.02em] text-[#FFD60A]"
              style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
            >
              {active.title}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={`client-${active.slug}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
              className="font-mono text-base text-white/80 mt-3"
            >
              {active.client}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Right: arrows */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="h-10 w-10 rounded-full border border-white/40 flex items-center justify-center text-white transition-all duration-200 hover:bg-white hover:text-black hover:border-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="h-10 w-10 rounded-full border border-white/40 flex items-center justify-center text-white transition-all duration-200 hover:bg-white hover:text-black hover:border-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* aria-live for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Slide {current + 1} of {total}: {active.title}
      </div>
    </section>
  );
}