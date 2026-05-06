import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "F1 Bahrain Grand Prix Animation | F1 Video Production Bahrain",
  description: "Animation and motion graphics for Formula 1 sponsors, racing teams, and circuit promotional content in Bahrain. From race highlights to sponsor acknowledgment animations, we deliver F1-quality visuals.",
};

const services = [
  "Race Highlights Animation",
  "Sponsor Acknowledgment Graphics",
  "Social Content for F1 Weekend",
  "Driver Profile Animations",
  "Pre-Race Show Packages",
  "Post-Race Recap Videos",
];

const serviceDescriptions: Record<string, string> = {
  "Race Highlights Animation": "Cinematic race recap animations that capture the energy and drama of the Bahrain Grand Prix.",
  "Sponsor Acknowledgment Graphics": "Broadcast-ready sponsor logos and acknowledgment animations for race weekend.",
  "Social Content for F1 Weekend": "Engaging social media content optimized for each platform during race weekend.",
  "Driver Profile Animations": "Dynamic driver introductions and profile animations for broadcast and digital use.",
  "Pre-Race Show Packages": "Pre-race ceremonial animations and show package content for broadcast teams.",
  "Post-Race Recap Videos": "Post-race highlight packages and championship recap animations.",
};

const relatedServices = [
  { name: "2D Animation", href: "/services/2d-animation" },
  { name: "Motion Graphics", href: "/services/motion-graphics" },
  { name: "Brand Films", href: "/services/brand-films" },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-abyss relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 50% 50%, #1a1a1a 0%, #0A0A0A 70%)'}} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 text-center">
          <Reveal>
            <span className="font-mono text-xs text-amber uppercase tracking-widest">Industries We Serve</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-editorial text-6xl md:text-8xl text-fawn mt-6 mb-6">F1 Bahrain Grand Prix</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-mono text-sm text-fawn-muted max-w-2xl mx-auto mb-10">The Bahrain Grand Prix represents the pinnacle of motorsport in the Middle East, attracting global attention and premium sponsors. Creating content that matches this prestige requires speed, precision, and F1-level visual quality. We deliver broadcast-quality animations that keep pace with racing schedules.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <MagneticButton href="/contact">Discuss Your Project</MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-32 lg:py-40 bg-night">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <Reveal>
              <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mt-4 mb-16 font-mono text-base text-fawn-muted max-w-prose leading-relaxed">The Challenge</h2>
              <p className="font-mono text-base text-fawn-muted max-w-prose leading-relaxed">F1 sponsors and racing teams need high-impact visual content that matches the prestige and energy of the Bahrain Grand Prix — but traditional animation production timelines don&apos;t align with racing schedules.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mt-4 mb-16 font-mono text-base text-fawn-muted max-w-prose leading-relaxed">Our Solution</h2>
              <p className="font-mono text-base text-fawn-muted max-w-prose leading-relaxed">Our modern production pipeline delivers broadcast-quality animations in days, not weeks. We specialize in rapid-turnaround content that doesn&apos;t compromise on the cinematic quality the sport demands.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services for Industry */}
      <section className="py-32 lg:py-40 bg-abyss">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mb-16">Animation Services for F1 Bahrain Grand Prix</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s} delay={i * 0.07}>
                <div className="p-10 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-colors">
                  <h3 className="font-editorial text-xl text-fawn mb-3">{s}</h3>
                  <p className="font-mono text-base text-fawn-muted max-w-prose">{serviceDescriptions[s]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-32 lg:py-40 bg-night">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="aspect-video rounded-2xl bg-surface border border-white/5 overflow-hidden flex items-center justify-center">
                <span className="font-mono text-xs text-fawn-muted">Case Study Preview</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-mono text-xs text-amber uppercase tracking-widest">Case Study</span>
              <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mt-4 mb-6">GP Racing Logistics</h2>
              <p className="font-mono text-base text-fawn-muted max-w-prose mb-8">We delivered a complete sponsor acknowledgment animation package for a regional logistics brand sponsoring the Bahrain Grand Prix. The 45-second broadcast-ready piece aired during race weekend across multiple MENA networks.</p>
              <MagneticButton href="/portfolio" variant="outline">See Full Portfolio</MagneticButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-32 lg:py-40 bg-abyss">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mb-16">Related Services</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.07}>
                <Link href={s.href} className="block p-10 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-colors">
                  <h3 className="font-editorial text-xl text-fawn mb-2">{s.name}</h3>
                  <span className="font-mono text-xs text-amber">Learn more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
