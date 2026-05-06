import { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "About | Animation Bahrain",
  description:
    "Learn about Bahrain's premier cinematic animation studio. Our story, our approach, our team.",
};

const values = [
  {
    title: "Story First",
    description:
      "Every frame serves the narrative. We don't animate unless it moves the story forward.",
    icon: (
      <svg
        className="w-6 h-6 text-abyss"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 4V2m0 2v2m0-2H4m3 0h3M7 20v-2m0 2v2m0-2H4m3 0h3m10-4V8l-4-4-4 4v12m8-4V6l-4 4-4-4v8"
        />
      </svg>
    ),
  },
  {
    title: "GCC Speed",
    description:
      "Productions tuned for regional timelines without sacrificing global quality standards.",
    icon: (
      <svg
        className="w-6 h-6 text-abyss"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Bahrain Roots",
    description:
      "Built in Manama, serving the entire Gulf. We understand regional culture and business practices.",
    icon: (
      <svg
        className="w-6 h-6 text-abyss"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const capabilities = [
  {
    title: "Cinematic Direction",
    description:
      "Every project begins with a director's vision. We approach animation as filmmaking, not asset production.",
  },
  {
    title: "Modern Pipeline",
    description:
      "A contemporary production workflow built for speed and quality. From concept to delivery without the bloat.",
  },
  {
    title: "Bahrain-Based Team",
    description:
      "Local creatives who understand the Gulf market, supported by international production partners.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-abyss">
        <Reveal>
          <h1
            className="font-editorial text-6xl md:text-8xl text-fawn mb-6 text-center"
            style={{ fontWeight: 400 }}
          >
            We Are Animation Bahrain
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-mono text-sm text-fawn-muted uppercase tracking-widest">
            Cinematic Animation. Built in Bahrain. Made for the World.
          </p>
        </Reveal>
      </section>

      {/* Story Section */}
      <section className="py-32 lg:py-40 px-6 bg-night">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2
                  className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mb-8"
                  style={{ fontWeight: 400 }}
                >
                  Our Story
                </h2>
                <div className="space-y-6 text-fawn-muted font-mono text-sm leading-relaxed">
                  <p>
                    Animation Bahrain was founded on a simple premise: the GCC
                    market deserves cinematic-quality animation without the
                    traditional production timelines. We built our studio with a
                    filmmaker&apos;s mindset — story drives every decision, from
                    first frame to final render.
                  </p>
                  <p>
                    Our roots are in live-action film and event production. We
                    brought that discipline into animation: pre-visualisation
                    before we animate, editorial thinking before we render, and a
                    refusal to produce content that doesn&apos;t serve the story
                    it&apos;s meant to tell.
                  </p>
                  <p>
                    Today, we serve F1 sponsors, telecoms, banks, and government
                    entities across the GCC — delivering broadcast-quality
                    animation that moves audiences the way cinema does. Not
                    because we animate, but because we know how to tell stories.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="aspect-square rounded-2xl bg-surface flex items-center justify-center">
                <span className="font-mono text-xs text-fawn-muted uppercase tracking-wider">
                  Team Photo
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 lg:py-40 px-6 bg-abyss">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2
              className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mb-16 text-center"
              style={{ fontWeight: 400 }}
            >
              What We Stand For
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-editorial text-2xl text-fawn mb-4">
                    {value.title}
                  </h3>
                  <p className="font-mono text-sm text-fawn-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 px-6 bg-night">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2
              className="font-editorial text-4xl md:text-5xl text-fawn mb-16 text-center"
              style={{ fontWeight: 400 }}
            >
              Our Approach
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-surface rounded-2xl p-10">
                  <h3 className="font-editorial text-xl text-fawn mb-4">
                    {cap.title}
                  </h3>
                  <p className="font-mono text-sm text-fawn-muted leading-relaxed text-base max-w-prose">
                    {cap.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40 px-6 bg-abyss">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2
              className="font-editorial text-4xl md:text-5xl lg:text-6xl text-fawn mb-8"
              style={{ fontWeight: 400 }}
            >
              Ready to Create?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <MagneticButton href="/contact">Get in Touch</MagneticButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
