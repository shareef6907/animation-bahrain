import type { Metadata } from "next";
import Link from "next/link";
import { Box, Building2, User, Sparkles, Monitor, Cpu } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "3D Animation Bahrain | 3D Animation Studio Manama",
  description: "Professional 3D animation services in Bahrain for product visualization, architectural visualization, and character animation. Creating photorealistic 3D content for brands across the GCC.",
};

const features = [
  {
    name: "Product Visualization",
    description: "Photorealistic 3D renders that make products look exceptional.",
    Icon: Box,
  },
  {
    name: "Architectural Viz",
    description: "Immersive walkthroughs for real estate and development projects.",
    Icon: Building2,
  },
  {
    name: "Character Animation",
    description: "Expressive 3D characters built for storytelling and advertising.",
    Icon: User,
  },
  {
    name: "VFX & Simulations",
    description: "Particle systems, fluid dynamics, and cinematic visual effects.",
    Icon: Sparkles,
  },
  {
    name: "Broadcast Graphics",
    description: "Slick 3D title sequences and broadcast packages.",
    Icon: Monitor,
  },
  {
    name: "Technical Animation",
    description: "Mechanisms, assemblies, and technical explainers in 3D.",
    Icon: Cpu,
  },
];

const useCases = [
  "Product launches and demonstrations",
  "Real estate and architecture",
  "Entertainment and gaming",
  "Television and film",
  "Advertising campaigns",
];

const steps = [
  "Concept & Modeling",
  "Texturing & Shading",
  "Rigging & Setup",
  "Animation",
  "Lighting & Render",
  "Compositing",
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
            <h1 className="font-editorial text-6xl md:text-8xl text-fawn mt-6 mb-6">3D Animation</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-mono text-base text-fawn-muted max-w-2xl mx-auto mb-10 leading-relaxed">Photorealistic 3D animation from our Manama studio. From product visualization to architectural walkthroughs, we build three-dimensional worlds that communicate with precision and visual impact across the GCC.</p>
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
              Every 3D project starts with understanding your vision and ends with frames that exceed expectations.
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
              3D animation transforms how your audience experiences your product or project. From manufacturers in Bahrain showcasing new products to developers across the GCC presenting architectural visions, our 3D production delivers photorealistic results.
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
