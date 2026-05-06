import Link from "next/link";
import { Flag, Signal, Landmark, Building2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata = {
  title: "Animation Bahrain | Cinematic Animation Studio Manama",
  description:
    "Bahrain's premier cinematic animation studio. We craft 2D, 3D, and motion graphics content for F1 sponsors, telecoms, banks and government across the GCC.",
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
    name: "Brand Films",
    description: "Cinematic narratives that don't look like ads",
    slug: "brand-films",
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
  {
    name: "Product Films",
    description: "Product stories that turn features into desire",
    slug: "product-films",
  },
];

const industries = [
  {
    name: "Formula 1",
    slug: "formula-1",
    Icon: Flag,
  },
  {
    name: "Telecom",
    slug: "telecom",
    Icon: Signal,
  },
  {
    name: "Banking",
    slug: "banking",
    Icon: Landmark,
  },
  {
    name: "Government",
    slug: "government",
    Icon: Building2,
  },
];

const whyUsPoints = [
  {
    title: "Cinematic First",
    description:
      "We approach every project with a filmmaker's eye — story, composition, pacing — before a single frame is rendered.",
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
        <div className="z-10 text-center max-w-4xl mx-auto">
          <Reveal>
            <h1
              className="font-editorial text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-fawn leading-tight"
              style={{ whiteSpace: "pre-line" }}
            >
              Cinematic Animation,
              <br />Built in Bahrain
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 font-mono text-base md:text-lg text-fawn-muted max-w-prose mx-auto leading-relaxed">
              From explainer films to brand cinema — we craft animation that moves people, not just pixels.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          <div className="flex flex-col items-center gap-3 text-fawn-muted">
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
      <section className="border-t border-white/[0.04] bg-night px-6 py-32 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl font-bold text-fawn">
              Our Services
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 mb-16 font-mono text-base text-fawn-muted max-w-prose leading-relaxed">
              From concept to final render, we deliver excellence at every frame.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={0.1 * index}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-2xl border border-white/5 bg-surface p-10 transition-all duration-300 hover:border-white/10"
                >
                  <div className="mb-6">
                    <span className="font-editorial text-2xl text-fawn group-hover:text-amber transition-colors duration-300">
                      {service.name}
                    </span>
                  </div>
                  <p className="font-mono text-sm uppercase tracking-wide text-fawn-muted leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWREEL SECTION */}
      <section className="border-t border-white/[0.04] bg-abyss px-6 py-32 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
            <Reveal className="w-full lg:w-1/2">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-surface">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-transform duration-300 hover:scale-110 hover:bg-white/20"
                    aria-label="Play showreel"
                  >
                    <svg
                      className="ml-1 h-10 w-10 text-fawn"
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
              <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl font-bold text-fawn">
                Tell Your Brand&apos;s Story
              </h2>
              <p className="mt-6 font-mono text-base text-fawn-muted max-w-prose leading-relaxed">
                Every brand has a story worth telling. We combine artistic vision with technical excellence to create animations that resonate with your audience and elevate your visual identity.
              </p>
              <p className="mt-4 font-mono text-base text-fawn-muted max-w-prose leading-relaxed">
                From 30-second commercials to full-length narratives, our team brings your vision to life with unparalleled quality.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-t border-white/[0.04] bg-night px-6 py-32 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl font-bold text-fawn">
              Industries We Serve
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 mb-16 font-mono text-base text-fawn-muted max-w-prose leading-relaxed">
              Tailored animation solutions for the GCC&apos;s most demanding sectors.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-16 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={0.1 * index}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-amber/10 transition-colors duration-300 group-hover:bg-amber/20">
                    <industry.Icon className="h-10 w-10 text-amber" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-fawn-muted transition-colors duration-300 group-hover:text-fawn">
                    {industry.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-t border-white/[0.04] bg-abyss px-6 py-32 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl font-bold text-fawn">
              Why Choose Us
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 mb-16 font-mono text-base text-fawn-muted max-w-prose leading-relaxed">
              The advantages of partnering with Bahrain&apos;s premier animation studio.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-3">
            {whyUsPoints.map((point, index) => (
              <Reveal key={point.title} delay={0.1 * index}>
                <div className="flex flex-col rounded-2xl border border-white/5 bg-surface p-10 transition-all duration-300 hover:border-white/20">
                  <div className="mb-8 flex h-10 w-10 items-center justify-center">
                    <svg
                      className="h-4 w-4 text-amber"
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
                  <h3 className="font-editorial text-3xl font-bold text-fawn leading-tight">
                    {point.title}
                  </h3>
                  <p className="mt-4 font-mono text-sm uppercase tracking-wide text-fawn-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-white/[0.04] bg-night px-6 py-32 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl font-bold text-fawn">
              What Our Clients Say
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={0.1 * index}>
                <div className="rounded-2xl border border-white/5 bg-surface p-10">
                  <svg
                    className="mb-8 h-10 w-10 text-amber"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-editorial text-xl italic leading-relaxed text-fawn max-w-prose">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-8 border-t border-white/5 pt-6">
                    <p className="font-mono text-sm font-medium text-fawn">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wide text-fawn-muted">
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
      <section className="relative overflow-hidden px-6 py-32 lg:py-40">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(217,119,6,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 z-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl font-bold text-fawn">
              Ready to Animate Your Brand?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-mono text-base text-fawn-muted max-w-prose mx-auto leading-relaxed">
              Let&apos;s discuss your project and bring your vision to life.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12">
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
