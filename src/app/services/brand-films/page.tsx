import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Clapperboard, BookOpen, Globe, Award, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Brand Films | Animation Bahrain",
  description: "Cinematic brand storytelling for GCC brands. We craft emotionally resonant narratives that elevate your brand beyond traditional advertising.",
};

const features = [
  {
    name: "Emotional Resonance",
    description: "Stories that make audiences feel something genuine, not just notice.",
    Icon: Heart,
  },
  {
    name: "Cinematic Production",
    description: "Every frame lit, composed, and graded like a feature film.",
    Icon: Clapperboard,
  },
  {
    name: "Narrative-Driven",
    description: "Story structure that earns attention and delivers a payoff.",
    Icon: BookOpen,
  },
  {
    name: "Multi-Platform Delivery",
    description: "Masters and optimised cuts for cinema, broadcast, and social.",
    Icon: Globe,
  },
  {
    name: "Strategic Messaging",
    description: "Creativity in service of your business objectives.",
    Icon: Award,
  },
  {
    name: "Premium Quality",
    description: "No shortcuts. Every project receives our full senior team.",
    Icon: Sparkles,
  },
];

const useCases = [
  "Brand Launch Films",
  "Documentary-Style Brand Stories",
  "Emotional Marketing Campaigns",
  "Luxury Brand Cinema",
  "Social Impact Films",
];

const steps = [
  "Brief",
  "Creative Development",
  "Pre-Production",
  "Production",
  "Post-Production",
  "Delivery",
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-abyss">
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 50% 50%, #1a1a1a 0%, #0A0A0A 70%)'}} />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-32">
          <Reveal>
            <span className="font-mono text-xs text-amber uppercase tracking-widest">Our Services</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-editorial text-6xl md:text-8xl text-fawn mt-6 mb-6">Brand Films</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-mono text-base text-fawn-muted max-w-2xl mx-auto mb-10 leading-relaxed">Cinematic brand films that don&apos;t look like ads. We craft narratives that resonate emotionally, not just visually. Think short film quality applied to brand storytelling. For brands who want to be remembered, not just seen.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex gap-4 justify-center flex-wrap">
              <MagneticButton href="/contact">Start Your Project</MagneticButton>
              <MagneticButton href="/portfolio" variant="outline">View Our Work</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-32 lg:py-40 bg-night">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mb-16">What We Deliver</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-base text-fawn-muted max-w-prose leading-relaxed mb-16">
              Cinematic craft applied to brand storytelling.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Reveal key={f.name} delay={0.1 * i}>
                <div className="p-8 rounded-2xl border border-white/5 bg-surface hover:border-white/20 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-amber/10 flex items-center justify-center mb-5">
                    <f.Icon className="h-5 w-5 text-amber" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-editorial text-xl text-fawn mb-2">{f.name}</h3>
                  <p className="font-mono text-sm text-white/60 leading-relaxed">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-32 lg:py-40 bg-abyss">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mb-16">Ideal For</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-base text-fawn-muted max-w-prose leading-relaxed mb-12">
              Brand films transform how your audience perceives your company. From startups in Bahrain launching their identity to corporations across the GCC building emotional connections, our cinematic approach delivers unforgettable brand experiences.
            </p>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-4 max-w-3xl">
            {useCases.map((uc) => (
              <div key={uc} className="flex items-start gap-3 py-3">
                <svg className="h-4 w-4 text-amber mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-mono text-base text-white/80">{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 lg:py-40 bg-night">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mb-16">Our Process</h2>
          </Reveal>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <Reveal key={step} delay={0.08 * i}>
                <div className="flex items-center gap-8 p-6 rounded-2xl bg-surface/50 border border-white/5">
                  <span className="font-mono text-xs text-amber w-8 shrink-0">0{i + 1}</span>
                  <span className="font-mono text-base text-fawn">{step}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 bg-abyss relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, rgba(217,119,6,0.06) 0%, transparent 70%)'}} />
        <div className="absolute inset-x-0 top-0 h-px" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)'}} />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <Reveal>
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mb-6">Ready to Get Started?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-base text-fawn-muted mb-10">Free consultation, no commitment.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <MagneticButton href="/contact">Book a Free Consultation</MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
