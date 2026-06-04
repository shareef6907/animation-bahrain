"use client";

import { useState } from "react";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import VideoTile from "@/components/VideoTile";
import type { Locale } from "@/i18n/config";

interface VideoHeaderProps {
  locale: Locale;
}

// Placeholder video data — replace src with actual video URLs when provided
const headerVideos = [
  { src: "", title: "Brand Film — Bahrain Telecom", category: "Brand Film" },
  { src: "", title: "F1 Championship Recap", category: "Motion Graphics" },
  { src: "", title: "Product Explainer — Batelco", category: "Explainer" },
  { src: "", title: "3D Architectural Visualization", category: "3D Animation" },
  { src: "", title: "Government Initiative Campaign", category: "2D Animation" },
  { src: "", title: "Banking Sector Showcase", category: "Motion Graphics" },
];

export default function VideoHeader({ locale }: VideoHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-abyss">
      {/* Top bar: logo + nav */}
      <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5">
        <div className="font-editorial text-2xl font-bold text-fawn tracking-tight">
          Animation Bahrain
        </div>
        <nav className="hidden gap-8 md:flex">
          {[
            { label: "Work", href: "/portfolio" },
            { label: "Services", href: "/services/2d-animation" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="font-mono text-xs uppercase tracking-[0.2em] text-fawn-muted transition-colors duration-300 hover:text-fawn"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MagneticButton
          href={`/${locale}/contact`}
          variant="primary"
          className="hidden md:inline-block py-2 px-4 text-xs"
        >
          Get in Touch
        </MagneticButton>
        {/* Mobile menu toggle */}
        <button
          className="md:hidden font-mono text-xs uppercase tracking-widest text-fawn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-8 bg-abyss/98 md:hidden">
          {[
            { label: "Work", href: "/portfolio" },
            { label: "Services", href: "/services/2d-animation" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="font-editorial text-3xl text-fawn transition-colors duration-300 hover:text-amber"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Video grid */}
      <div
        className="grid min-h-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ paddingTop: "72px" }}
      >
        {headerVideos.map((video, index) => (
          <VideoTile
            key={index}
            src={video.src}
            title={video.title}
            category={video.category}
            index={index}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fawn-muted">
          Scroll
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-fawn-muted to-transparent" />
      </div>
    </section>
  );
}