"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface VideoTileProps {
  src: string;
  poster?: string;
  title: string;
  category?: string;
  index: number;
}

export default function VideoTile({ src, poster, title, category, index }: VideoTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-surface cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPlaying(false); }}
    >
      {/* Video element */}
      <video
        src={src}
        poster={poster}
        className="h-full w-full object-cover transition-transform duration-700 ease-out"
        style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        muted
        playsInline
        loop
        onMouseEnter={() => setIsPlaying(true)}
        onMouseLeave={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      {/* Dark overlay — always present, intensifies on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: isHovered
            ? "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)"
            : "linear-gradient(to top, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.0) 50%, transparent 100%)",
          opacity: isPlaying ? 1 : 0.85,
        }}
      />

      {/* Amber play indicator */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-500"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber/90 transition-transform duration-300" style={{ transform: isHovered ? "scale(1)" : "scale(0.8)" }}>
          <svg className="ml-0.5 h-6 w-6 text-abyss" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Bottom text — always visible */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
        {category && (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber" style={{ opacity: isHovered ? 1 : 0.7 }}>
            {category}
          </span>
        )}
        <h3 className="font-editorial text-xl font-bold text-fawn mt-1">{title}</h3>
      </div>
    </motion.div>
  );
}