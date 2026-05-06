import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Telecom Animation Bahrain | Telecom Video Production",
  description: "High-impact animation for telecom brands in Bahrain and across the GCC. From 5G network launch campaigns to brand identity motion, we help telecoms connect with audiences through compelling visual storytelling.",
};

const services = [
  "5G Launch Campaign Animation",
  "Network Coverage Visualizations",
  "Brand Identity Motion Systems",
  "Customer Onboarding Content",
  "Social Media Ad Campaigns",
  "Product Explainer Animations",
];

const serviceDescriptions: Record<string, string> = {
  "5G Launch Campaign Animation": "Dynamic animated campaigns that showcase 5G capabilities and drive network upgrade adoption.",
  "Network Coverage Visualizations": "Clear, engaging visuals that communicate coverage maps and network availability.",
  "Brand Identity Motion Systems": "Consistent motion design language for brand assets across all digital touchpoints.",
  "Customer Onboarding Content": "Step-by-step animated guides for new service setup and activation.",
  "Social Media Ad Campaigns": "High-converting animated ad content optimized for each social platform.",
  "Product Explainer Animations": "Clear product feature explanations that drive understanding and subscription.",
};

const relatedServices = [
  { name: "Motion Graphics", href: "/services/motion-graphics" },
  { name: "3D Animation", href: "/services/3d-animation" },
  { name: "Explainer Videos", href: "/services/explainer-videos" },
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
            <h1 className="font-editorial text-6xl md:text-8xl text-fawn mt-6 mb-6">Telecom</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-mono text-sm text-fawn-muted max-w-2xl mx-auto mb-10">The telecom industry in Bahrain and the GCC is rapidly evolving with 5G rollout, fiber expansion, and IoT connectivity. Standing out requires more than coverage — it demands compelling visual stories that resonate with tech-savvy consumers and everyday users alike.</p>
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
              <p className="font-mono text-base text-fawn-muted max-w-prose leading-relaxed">Telecom brands face intense competition and need to communicate complex network capabilities (5G, fiber, IoT) in ways that resonate with diverse consumer segments — from tech enthusiasts to everyday mobile users.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mt-4 mb-16 font-mono text-base text-fawn-muted max-w-prose leading-relaxed">Our Solution</h2>
              <p className="font-mono text-base text-fawn-muted max-w-prose leading-relaxed">We translate technical capabilities into emotionally engaging visual stories. Our motion graphics transform complex network infrastructure into accessible, compelling narratives that drive brand preference.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services for Industry */}
      <section className="py-32 lg:py-40 bg-abyss">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mb-16">Animation Services for Telecom</h2></Reveal>
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
              <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mt-4 mb-6">Connect Bahrain</h2>
              <p className="font-mono text-base text-fawn-muted max-w-prose mb-8">Launched a 12-piece animated social campaign for a Bahrain telecom&apos;s new 5G network rollout. Each piece highlighted a different use case (streaming, gaming, remote work) with custom 3D network visualizations.</p>
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
