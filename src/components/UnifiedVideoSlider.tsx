"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

const ALL_VIDEOS = [
  { src: "/videos/slide-1.mp4", aspect: "horizontal" as const },
  { src: "/videos/slide-2.mp4", aspect: "horizontal" as const },
  { src: "/videos/slide-3.mp4", aspect: "horizontal" as const },
  { src: "/videos/slide-4.mp4", aspect: "horizontal" as const },
  { src: "/videos/slide-5.mp4", aspect: "horizontal" as const },
  { src: "/videos/slide-6.mp4", aspect: "horizontal" as const },
  { src: "/videos/vertical-1.mp4", aspect: "vertical" as const },
  { src: "/videos/vertical-2.mp4", aspect: "vertical" as const },
  { src: "/videos/slide-6.mp4", aspect: "square" as const },
];

const SLIDER_MUTED_KEY = "animation_bahrain_slider_muted";

export default function UnifiedVideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const current = ALL_VIDEOS[currentIndex];

  // Initialize muted state from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(SLIDER_MUTED_KEY);
    if (stored !== null) {
      setIsMuted(stored === "true");
    }
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      const next =
        ((index % ALL_VIDEOS.length) + ALL_VIDEOS.length) %
        ALL_VIDEOS.length;
      if (next === currentIndex) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(next);
        setIsTransitioning(false);
      }, 300);
    },
    [currentIndex, isTransitioning]
  );

  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);
  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);

  // Auto-advance on video ended
  const handleVideoEnded = useCallback(() => {
    goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  // Sync muted to video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    localStorage.setItem(SLIDER_MUTED_KEY, String(next));
  };

  return (
    <section className="w-full bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Slider stage */}
        <div
          className="relative w-full bg-black"
          style={{ height: "70vh", maxHeight: "700px" }}
        >
          <video
            key={current.src}
            ref={videoRef}
            src={current.src}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous video"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 active:scale-95 transition-all duration-200"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next video"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 active:scale-95 transition-all duration-200"
          >
            <ChevronRight size={24} />
          </button>

          {/* Mute/unmute button */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute videos" : "Mute videos"}
            className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/30 flex items-center justify-center text-white transition z-10"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>

        {/* Dot indicators */}
        <div
          className="mt-8 flex justify-center gap-2"
          role="tablist"
          aria-label="Video navigation"
        >
          {ALL_VIDEOS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to video ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === currentIndex
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}