import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Banking Animation Bahrain | Financial Video Production",
  description: "Professional animation for banks and financial institutions in Bahrain. From product explainer animations to digital transformation content, we help finance brands communicate trust and innovation.",
};

const services = [
  "Product Explainer Animations",
  "Digital Transformation Content",
  "Customer Education Series",
  "Brand Campaign Films",
  "Training & Onboarding Videos",
  "Annual Report Visualizations",
];

const serviceDescriptions: Record<string, string> = {
  "Product Explainer Animations": "Clear, engaging explanations of banking products from accounts to investments.",
  "Digital Transformation Content": "Visual storytelling that communicates tech modernization to stakeholders.",
  "Customer Education Series": "Financial literacy content that builds customer trust and engagement.",
  "Brand Campaign Films": "Premium animated campaigns that convey stability, innovation, and trust.",
  "Training & Onboarding Videos": "Internal training content for staff on products, compliance, and systems.",
  "Annual Report Visualizations": "Data-driven animated visualizations for shareholder communications.",
};

const relatedServices = [
  { name: "Explainer Videos", href: "/services/explainer-videos" },
  { name: "2D Animation", href: "/services/2d-animation" },
  { name: "Motion Graphics", href: "/services/motion-graphics" },
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
            <h1 className="font-editorial text-6xl md:text-8xl text-fawn mt-6 mb-6">Banking</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-mono text-sm text-fawn-muted max-w-2xl mx-auto mb-10">Bahrain&apos;s banking sector is a cornerstone of the Gulf financial ecosystem, blending traditional Islamic banking with modern digital services. Communicating complex financial products while maintaining the trust and authority customers expect requires a delicate balance of clarity and sophistication.</p>
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
              <p className="font-mono text-sm text-fawn-muted leading-relaxed">Bahrain&apos;s banking sector operates in a highly regulated, trust-dependent environment. Financial products are complex and traditional explainer content often fails to engage digitally-native customers.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-editorial text-4xl text-fawn mb-8">Our Solution</h2>
              <p className="font-mono text-sm text-fawn-muted leading-relaxed">We create animated content that demystifies financial products without oversimplifying. Our explainer animations build trust through clarity — helping banks connect with the next generation of customers while maintaining regulatory confidence.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services for Industry */}
      <section className="py-32 bg-abyss">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><h2 className="font-editorial text-4xl text-fawn mb-16">Animation Services for Banking</h2></Reveal>
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
              <h2 className="font-editorial text-4xl text-fawn mt-4 mb-6">Al Majd Islamic Banking</h2>
              <p className="font-mono text-sm text-fawn-muted mb-8">Created a 6-part animated series explaining Islamic banking products for a major Bahrain bank. The series achieved 340% higher engagement rates compared to their previous static content approach.</p>
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
