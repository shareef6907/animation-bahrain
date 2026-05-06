import { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "About | Animation Bahrain",
  description:
    "Learn about Bahrain's first AI-native animation studio. Our team, our technology, our mission.",
};

const values = [
  {
    title: "Innovation First",
    description:
      "We leverage AI-native tools to push creative boundaries, delivering work that was previously impossible.",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
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

const higgsfieldFeatures = [
  {
    title: "Lightning Fast",
    description:
      "Generate production-ready animations in minutes, not weeks.",
  },
  {
    title: "Cinematic Quality",
    description:
      "Hollywood-grade rendering and effects powered by cutting-edge AI.",
  },
  {
    title: "Fully Customizable",
    description:
      "Every frame can be refined to match your brand guidelines exactly.",
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
            Bahrain&apos;s first AI-native animation studio
          </p>
        </Reveal>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6 bg-night">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2
                  className="font-editorial text-4xl md:text-5xl text-fawn mb-8"
                  style={{ fontWeight: 400 }}
                >
                  Our Story
                </h2>
                <div className="space-y-6 text-fawn-muted font-mono text-sm leading-relaxed">
                  <p>
                    Founded in Manama in 2024, Animation Bahrain emerged from a
                    simple observation: the GCC market deserved world-class
                    animation without the world-class turnaround times. Too
                    often, regional brands were waiting months for content that
                    could be produced in weeks.
                  </p>
                  <p>
                    We built our studio around AI-native workflows from day one,
                    becoming the first such studio in Bahrain and among the
                    pioneers across the Gulf. This isn&apos;t about replacing
                    artists—it&apos;s about amplifying their capabilities with
                    tools that think faster.
                  </p>
                  <p>
                    Our partnership with Higgsfield gives us access to
                    generation capabilities that make traditional pipelines look
                    archival. The result: we deliver premium animation at
                    regional speeds, for brands who can&apos;t afford to wait
                    three months for their campaign to go live.
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
      <section className="py-32 px-6 bg-abyss">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2
              className="font-editorial text-4xl md:text-5xl text-fawn mb-16 text-center"
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

      {/* Technology Section */}
      <section className="py-32 px-6 bg-night">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2
              className="font-editorial text-4xl md:text-5xl text-fawn mb-16 text-center"
              style={{ fontWeight: 400 }}
            >
              Powered by Higgsfield
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {higgsfieldFeatures.map((feature, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-surface rounded-2xl p-8">
                  <h3 className="font-editorial text-xl text-fawn mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-mono text-sm text-fawn-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-abyss">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2
              className="font-editorial text-4xl md:text-5xl text-fawn mb-8"
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
