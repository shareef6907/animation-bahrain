import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Government Animation Bahrain | Public Sector Video Production",
  description: "Strategic animation and motion graphics for Bahrain government entities and public sector organizations. Public awareness campaigns, infrastructure visualization, and citizen engagement content that informs and inspires.",
};

const services = [
  "Public Awareness Campaigns",
  "Infrastructure Project Visualization",
  "Cultural Heritage Content",
  "Citizen Engagement Animations",
  "Municipal Announcements",
  "Tourism Promotion Films",
];

const serviceDescriptions: Record<string, string> = {
  "Public Awareness Campaigns": "Government-wide messaging campaigns on health, safety, and social initiatives.",
  "Infrastructure Project Visualization": "Animated visualizations of planned developments for public consultation.",
  "Cultural Heritage Content": "Preservation and celebration of Bahrain&apos;s rich history and traditions.",
  "Citizen Engagement Animations": "Interactive content that connects government services with residents.",
  "Municipal Announcements": "Clear, professional animated announcements for local government communications.",
  "Tourism Promotion Films": "Compelling animated content showcasing Bahrain as a destination.",
};

const relatedServices = [
  { name: "2D Animation", href: "/services/2d-animation" },
  { name: "Motion Graphics", href: "/services/motion-graphics" },
  { name: "3D Animation", href: "/services/3d-animation" },
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
            <h1 className="font-editorial text-6xl md:text-8xl text-fawn mt-6 mb-6">Government</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-mono text-sm text-fawn-muted max-w-2xl mx-auto mb-10">Bahrain&apos;s government entities serve a diverse population of citizens and expatriates while maintaining international visibility through diplomacy and tourism. Effective government communication requires authority, accessibility, and cultural sensitivity across all messaging and channels.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <MagneticButton href="/contact">Discuss Your Project</MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-32 bg-night">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <Reveal>
              <h2 className="font-editorial text-4xl text-fawn mb-8">The Challenge</h2>
              <p className="font-mono text-sm text-fawn-muted leading-relaxed">Government entities need to communicate across diverse audiences — from citizens to international stakeholders — while maintaining authority, accessibility, and cultural sensitivity. Traditional video production can be slow and costly for large-scale campaign needs.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-editorial text-4xl text-fawn mb-8">Our Solution</h2>
              <p className="font-mono text-sm text-fawn-muted leading-relaxed">Our efficient production pipeline delivers government-grade animated content at startup speed. We&apos;ve worked with public sector organizations across the GCC to create campaigns that are simultaneously authoritative, accessible, and engaging.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services for Industry */}
      <section className="py-32 bg-abyss">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><h2 className="font-editorial text-4xl text-fawn mb-16">Animation Services for Government</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s} delay={i * 0.07}>
                <div className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-amber/30 transition-colors">
                  <h3 className="font-editorial text-xl text-fawn mb-3">{s}</h3>
                  <p className="font-mono text-xs text-fawn-muted">{serviceDescriptions[s]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-32 bg-night">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="aspect-video rounded-2xl bg-surface border border-white/5 overflow-hidden flex items-center justify-center">
                <span className="font-mono text-xs text-fawn-muted">Case Study Preview</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-mono text-xs text-amber uppercase tracking-widest">Case Study</span>
              <h2 className="font-editorial text-4xl text-fawn mt-4 mb-6">Bahrain Tourism Authority</h2>
              <p className="font-mono text-sm text-fawn-muted mb-8">Developed an animated destination campaign showcasing Bahrain&apos;s UNESCO World Heritage sites. The series ran across airport displays, government visitor centers, and international tourism expos.</p>
              <MagneticButton href="/portfolio" variant="outline">See Full Portfolio</MagneticButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-32 bg-abyss">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><h2 className="font-editorial text-4xl text-fawn mb-16">Related Services</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.07}>
                <Link href={s.href} className="block p-8 rounded-2xl bg-surface border border-white/5 hover:border-amber/30 transition-colors">
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
