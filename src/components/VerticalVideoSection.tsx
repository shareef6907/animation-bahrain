"use client";

import { useState, useEffect } from "react";

const AUDIO_KEY = "animationbahrain_audio_muted";

interface VerticalVideoSectionProps {
  src: string;
}

export function VerticalVideoSection({ src }: VerticalVideoSectionProps) {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(AUDIO_KEY);
    if (stored !== null) {
      setIsMuted(stored === "true");
    }
    const handler = (e: StorageEvent) => {
      if (e.key === AUDIO_KEY && e.newValue !== null) {
        setIsMuted(e.newValue === "true");
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    localStorage.setItem(AUDIO_KEY, String(next));
  };

  return (
    <section className="w-full bg-black py-24 lg:py-32">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="relative">
          <video
            src={src}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            className="max-h-[80vh] w-auto"
            style={{ aspectRatio: "9/16" }}
          />
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute bottom-4 right-4 h-10 w-10 rounded-full border border-white/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          >
            {isMuted ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
                <line x1="17" y1="9" x2="23" y2="15" />
                <line x1="23" y1="9" x2="17" y2="15" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}