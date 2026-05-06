import Link from "next/link";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata = {
  title: "Animation Bahrain | AI-Native Animation Studio Manama",
  description:
    "Bahrain's first AI-native animation studio. Higgsfield-powered 2D, 3D, and motion graphics for F1 sponsors, telecoms, banks and government across the GCC.",
};

const services = [
  {
    name: "2D Animation",
    description: "Classic handcrafted animation for timeless storytelling",
    slug: "2d-animation",
  },
  {
    name: "3D Animation",
    description: "Three-dimensional worlds rendered to perfection",
    slug: "3d-animation",
  },
  {
    name: "AI Animation",
    description: "Next-gen AI-powered animation workflows",
    slug: "ai-animation",
  },
  {
    name: "Motion Graphics",
    description: "Dynamic graphics that captivate and convert",
    slug: "motion-graphics",
  },
  {
    name: "Explainer Videos",
    description: "Clear, compelling narratives that explain it all",
    slug: "explainer-videos",
  },
];

const industries = [
  {
    name: "F1 Bahrain Grand Prix",
    slug: "f1",
  },
  {
    name: "Telecom",
    slug: "telecom",
  },
  {
    name: "Banking",
    slug: "banking",
  },
  {
    name: "Government",
    slug: "government",
  },
];

const whyUsPoints = [
  {
    title: "Higgsfield-Powered",
    description:
      "Leveraging cutting-edge AI technology to accelerate animation production without compromising quality.",
  },
  {
    title: "GCC-Focused",
    description:
      "Deep understanding of the Gulf market dynamics, cultural nuances, and regional aesthetic preferences.",
  },
  {
    title: "Bahrain Based",
    description:
      "Strategically positioned in Manama to serve the entire GCC region with agile, responsive production.",
  },
];

const testimonials = [
  {
    quote:
      "Animation Bahrain transformed our brand identity with a stunning explainer video that increased our conversion rate by 40%.",
    name: "Ahmed Al-Rashid",
    title: "Marketing Director",
    company: "Bahrain Telecom",
  },
  {
    quote:
      "Their F1 sponsorship package exceeded every expectation. The team's understanding of motorsport culture is unmatched.",
    name: "Sarah Mitchell",
    title: "Sponsorship Manager",
    company: "Pirelli Gulf",
  },
];

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, #0A0A0A 70%)",
          }}
        />
        <div className="z-10 text-center">
          <Reveal>
            <h1
              className="font-editorial text-6xl font-bold tracking-tight text-fawn md:text-7xl lg:text-8xl"
              style={{ whiteSpace: "pre-line" }}
            >
              Frame by Frame,
              <br />
              We Build Worlds.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-mono text-sm tracking-wider text-fawn-muted uppercase">
              Bahrain&apos;s First AI-Native Animation Studio
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton href="/contact" variant="primary">
                Start Your Project
              </MagneticButton>
              <MagneticButton href="/portfolio" variant="outline">
                View Our Work
              </MagneticButton>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.6} className="absolute bottom-12 z-10">
          <div className="flex flex-col items-center gap-2 text-fawn-muted">
            <span className="font-mono text-xs uppercase tracking-widest">
              Scroll
            </span>
            <svg
              className="h-5 w-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </Reveal>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-night px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-editorial text-4xl font-bold text-fawn md:text-5xl">
              Our Services
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-mono text-sm text-fawn-muted">
              From concept to final render, we deliver excellence at every
              frame.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={0.1 * index}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-2xl border border-transparent bg-surface p-6 transition-all duration-300 hover:border-amber"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-amber" />
                    <span className="font-editorial text-xl text-fawn">
                      {service.name}
                    </span>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wide text-fawn-muted">
                    {service.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWREEL SECTION */}
      <section className="bg-abyss px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
            <Reveal className="w-full lg:w-1/2">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-surface">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-amber transition-transform duration-300 hover:scale-110 hover:bg-amber-light"
                    aria-label="Play showreel"
                  >
                    <svg
                      className="ml-1 h-8 w-8 text-abyss"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="w-full lg:w-5/12">
              <h2 className="font-editorial text-4xl font-bold text-fawn md:text-5xl">
                Tell Your Brand&apos;s Story
              </h2>
              <p className="mt-4 font-mono text-sm leading-relaxed text-fawn-muted">
                Every brand has a story worth telling. We combine artistic
                vision with technical excellence to create animations that
                resonate with your audience and elevate your visual identity.
              </p>
              <p className="mt-4 font-mono text-sm leading-relaxed text-fawn-muted">
                From 30-second commercials to full-length narratives, our team
                brings your vision to life with unparalleled quality.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-night px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-editorial text-4xl font-bold text-fawn md:text-5xl">
              Industries We Serve
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-mono text-sm text-fawn-muted">
              Tailored animation solutions for the GCC&apos;s most demanding
              sectors.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={0.1 * index}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber/20 transition-colors duration-300 group-hover:bg-amber/40">
                    <div className="h-8 w-8 rounded-full bg-amber" />
                  </div>
                  <span className="font-editorial text-lg text-fawn transition-colors duration-300 group-hover:text-amber">
                    {industry.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-abyss px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-editorial text-4xl font-bold text-fawn md:text-5xl">
              Why Choose Us
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-mono text-sm text-fawn-muted">
              The advantages of partnering with Bahrain&apos;s premier animation
              studio.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {whyUsPoints.map((point, index) => (
              <Reveal key={point.title} delay={0.1 * index}>
                <div className="flex flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber/20">
                    <svg
                      className="h-6 w-6 text-amber"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-fawn">
                    {point.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs leading-relaxed uppercase tracking-wide text-fawn-muted">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-night px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-editorial text-4xl font-bold text-fawn md:text-5xl">
              What Our Clients Say
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={0.1 * index}>
                <div className="rounded-2xl border border-surface-elevated bg-surface p-8">
                  <svg
                    className="mb-4 h-8 w-8 text-amber"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-editorial text-lg italic leading-relaxed text-fawn">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-6 border-t border-surface-elevated pt-4">
                    <p className="font-mono text-sm font-medium text-fawn">
                      {testimonial.name}
                    </p>
                    <p className="font-mono text-xs uppercase tracking-wide text-fawn-muted">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden px-6 py-24">
        <div
          className="absolute inset-x-0 top-0 z-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #D97706 50%, transparent 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-editorial text-4xl font-bold text-fawn md:text-5xl lg:text-6xl">
              Ready to Animate Your Brand?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-mono text-sm text-fawn-muted">
              Let&apos;s discuss your project and bring your vision to life.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <MagneticButton href="/contact" variant="primary">
                Book a Free Consultation
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
