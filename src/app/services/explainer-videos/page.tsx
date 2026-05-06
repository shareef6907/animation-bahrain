import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Explainer Videos Bahrain | Explainer Video Studio Manama",
  description: "Compelling explainer video production in Bahrain for products, processes, and training. Professional script writing, animation, and voiceover for brands across the GCC including Saudi Arabia, UAE, and Qatar.",
};

const features = [
  "Script Writing",
  "Storyboard Design",
  "Professional Voiceover",
  "Animated Illustration",
  "Background Music",
  "Multi-Platform Formats",
];

const useCases = [
  "Product demonstrations",
  "Process explanation",
  "Onboarding sequences",
  "Training and education",
  "Pitch decks and investor content",
];

const steps = [
  "Discovery Call",
  "Script Development",
  "Storyboard Approval",
  "Production",
  "Feedback Rounds",
  "Final Delivery",
];

export default function Page() {
  return (
    <>
      {/* Hero - full viewport */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-abyss">
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 50% 50%, #1a1a1a 0%, #0A0A0A 70%)'}} />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-32">
          <Reveal>
            <span className="font-mono text-xs text-amber uppercase tracking-widest">Our Services</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-editorial text-6xl md:text-8xl text-fawn mt-6 mb-6">Explainer Videos</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-mono text-sm text-fawn-muted max-w-2xl mx-auto mb-10">Communicate your message clearly and memorably with our professional explainer videos. Based in Manama, Bahrain, we produce engaging short-form animations with compelling scripts, beautiful illustration, and professional voiceover for brands throughout the GCC region.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex gap-4 justify-center flex-wrap">
              <MagneticButton href="/contact">Start Your Project</MagneticButton>
              <MagneticButton href="/portfolio" variant="outline">View Our Work</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features Grid - 6 items, 3 cols */}
      <section className="py-32 bg-night">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><h2 className="font-editorial text-4xl text-fawn mb-16">What We Deliver</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={f} delay={i * 0.07}>
                <div className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-amber/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center mb-6">
                    <div className="w-3 h-3 bg-amber rounded-full" />
                  </div>
                  <p className="font-mono text-sm text-fawn">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases + Visual */}
      <section className="py-32 bg-abyss">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="font-editorial text-5xl text-fawn mb-8">Ideal For</h2>
                <p className="font-mono text-sm text-fawn-muted mb-8">Explainer videos simplify complex messages into digestible visual stories. From tech startups in Bahrain launching SaaS products to corporations in Dubai training employees, our explainer videos help audiences understand and remember your message.</p>
                <ul className="space-y-4">
                  {useCases.map((uc) => (
                    <li key={uc} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-amber rounded-full mt-2 flex-shrink-0" />
                      <span className="font-mono text-sm text-fawn">{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="aspect-video rounded-2xl bg-surface border border-white/5 flex items-center justify-center">
                <span className="font-mono text-xs text-fawn-muted">Service Showcase</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-night">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><h2 className="font-editorial text-5xl text-fawn mb-16">Our Process</h2></Reveal>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <div className="flex items-center gap-8 p-8 rounded-2xl bg-surface/50 border border-white/5">
                  <span className="font-mono text-xs text-amber w-8">0{i + 1}</span>
                  <span className="font-mono text-sm text-fawn">{step}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-abyss relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(217,119,6,0.08), transparent)'}} />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <Reveal><h2 className="font-editorial text-5xl text-fawn mb-6">Ready to Get Started?</h2></Reveal>
          <Reveal delay={0.1}><p className="font-mono text-sm text-fawn-muted mb-10">Free consultation, no commitment.</p></Reveal>
          <Reveal delay={0.2}><MagneticButton href="/contact">Book a Free Consultation</MagneticButton></Reveal>
        </div>
      </section>
    </>
  );
}
