import { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Portfolio | Animation Bahrain",
  description:
    "Animation and motion graphics work for F1 sponsors, telecoms, banks and government across Bahrain and the GCC.",
};

const portfolioItems = [
  {
    category: "2D Animation",
    title: "Bahrain GP Sponsor Package",
    client: "Regional Logistics Co.",
  },
  {
    category: "3D Animation",
    title: "Product Launch Reveal",
    client: "Almoayyed Motors",
  },
  {
    category: "Motion Graphics",
    title: "5G Network Launch",
    client: "stc Bahrain",
  },
  {
    category: "Brand Films",
    title: "Eid Campaign Series",
    client: "National Bank of Bahrain",
  },
  {
    category: "Explainer Video",
    title: "Digital Banking Onboarding",
    client: "KFH Bahrain",
  },
  {
    category: "Product Films",
    title: "Tourism Destination Campaign",
    client: "Bahrain Tourism Authority",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-abyss">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center px-6 relative"
        style={{
          background:
            "radial-gradient(ellipse at center, #1a1a1a 0%, #0A0A0A 70%)",
        }}
      >
        <Reveal>
          <h1
            className="font-editorial text-6xl md:text-8xl text-fawn mb-6 text-center"
            style={{ fontWeight: 400 }}
          >
            Our Work
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-mono text-sm text-fawn-muted uppercase tracking-widest">
            Selected projects across the GCC
          </p>
        </Reveal>
      </section>

      {/* Portfolio Grid */}
      <section className="py-32 lg:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="bg-surface rounded-2xl aspect-video relative group overflow-hidden cursor-pointer">
                {/* Placeholder gradient background */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      "linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #B45309 100%)",
                  }}
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-amber/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-abyss ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-surface/90 to-transparent">
                  <span className="font-mono text-xs text-amber uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-editorial text-base text-fawn mt-2">
                    {item.title}
                  </h3>
                  <p className="font-mono text-base text-fawn-muted mt-1">
                    {item.client}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40 px-6 bg-night">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2
              className="font-editorial text-4xl md:text-5xl text-fawn mb-8"
              style={{ fontWeight: 400 }}
            >
              Want to be featured?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <MagneticButton href="/contact">
              Start Your Project
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
