import Link from "next/link"

export function CompanySection() {
  return (
    <section className="w-full bg-black py-32 lg:py-48">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="font-display text-white leading-tight max-w-4xl mx-auto text-center"
          style={{ fontSize: "clamp(40px, 6vw, 80px)" }}>
          Cinematic AI-powered animations for premium brands
        </h2>
        <p className="text-white/70 mt-6 max-w-2xl mx-auto text-center"
          style={{ fontSize: "clamp(16px, 2vw, 24px)" }}>
          Photorealistic brand films, built in Bahrain
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:ceo@bahrainnights.com"
            className="font-body text-sm text-white/90 hover:underline"
          >
            ceo@bahrainnights.com
          </a>
          <span className="text-white/40 mx-2">·</span>
          <a
            href="https://wa.me/97339007750"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-white/90 hover:underline"
          >
            +973 3900 7750
          </a>
          <span className="text-white/40 mx-2">·</span>
          <a
            href="tel:+97339007750"
            className="font-body text-sm text-white/90 hover:underline"
          >
            Call
          </a>
        </div>
        <p className="mt-6 text-xs text-white/40 font-mono">CR 113587-1</p>
      </div>
    </section>
  )
}