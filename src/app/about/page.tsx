import Navigation from '@/components/ui/Navigation'
import Particles from '@/components/ui/Particles'
import { FloatingContact } from '@/components/ui/FloatingContact'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Animation Bahrain',
  description: 'We are professional filmmakers based in Bahrain, crafting films that don\'t just get watched — they get remembered.',
}

export default function AboutPage() {
  return (
    <main className="bg-[#050508] min-h-screen">
      <Particles />
      <Navigation />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.09) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-40">
          <p className="font-body text-xs uppercase tracking-[0.45em] text-white/30 mb-8">
            🎬 Who We Are
          </p>
          <h1
            className="font-display leading-tight mb-8"
            style={{
              fontSize: 'clamp(52px, 8vw, 108px)',
              background: 'linear-gradient(90deg, #8b5cf6, #a855f7 35%, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About Us
          </h1>
          <p className="font-body text-base lg:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
            Professional filmmakers based in Bahrain, crafting films that don&apos;t just get watched — they get remembered.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 lg:py-44">
        <div className="container-center">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-xs uppercase tracking-[0.45em] text-white/30 mb-10">
              Our Story
            </p>
            <div className="space-y-8 text-left">
              {[
                "We are professional filmmakers based in Bahrain, crafting films that don't just get watched — they get remembered. From cinematic commercials and TV advertisements to photorealistic 3D animation, we bring stories to life with the precision of seasoned filmmakers and the boundless possibility of modern animation.",
                "Where the camera reaches its limit, our animation begins — blending real production craft with 3D worlds that feel utterly real.",
                "With over 20 years of experience in film production, we understand that great content is only half the equation — delivering it on time is the other. Most projects are ready in just 2–3 days, and when the moment demands it, we deliver same-day.",
                "Animation Bahrain is a creative department of Bahrain Nights. We don't just deliver content — we deliver results, and we stand behind every frame with a commitment to client satisfaction.",
              ].map((para, i) => (
                <p
                  key={i}
                  className="font-body text-base lg:text-lg text-white/55 leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values / What We Stand For */}
      <section className="py-32 lg:py-44 border-t border-white/5">
        <div className="container-center">
          <div className="text-center mb-20">
            <p className="font-body text-xs uppercase tracking-[0.45em] text-white/30 mb-6">
              What We Stand For
            </p>
            <h2
              className="font-display leading-tight"
              style={{
                fontSize: 'clamp(36px, 5vw, 72px)',
                background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Precision + Possibility
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { emoji: '🎬', title: 'Cinematic Discipline', desc: 'Pre-visualisation before we animate. Editorial thinking before we render. Every frame serves the story.' },
              { emoji: '⚡', title: 'GCC Speed', desc: 'Most projects delivered in 2–3 days. When the moment demands it, we deliver same-day — without sacrificing quality.' },
              { emoji: '🌏', title: 'Regional Expertise', desc: 'Built in Manama, serving the entire Gulf. We understand regional culture, business practices, and what resonates across the GCC.' },
            ].map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="p-8 rounded-2xl border border-white/7 text-center"
                style={{ background: 'rgba(13,13,20,0.8)' }}
              >
                <span className="text-4xl mb-5 block">{emoji}</span>
                <h3 className="font-display text-xl mb-3 text-white/80">{title}</h3>
                <p className="font-body text-sm text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bahrain Nights connection */}
      <section className="py-32 lg:py-44 border-t border-white/5">
        <div className="container-center">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-xs uppercase tracking-[0.45em] text-white/30 mb-8">
              Our House
            </p>
            <h2
              className="font-display leading-tight mb-8"
              style={{
                fontSize: 'clamp(36px, 5vw, 72px)',
                background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A Creative Department of Bahrain Nights
            </h2>
            <p className="font-body text-base lg:text-lg text-white/55 leading-relaxed mb-6">
              Animation Bahrain is the motion graphics and brand film division of Bahrain Nights — the production company behind some of the Gulf&apos;s most recognisable commercial content. Bahrain Nights brings 20+ years of film and event production experience; we bring that same standard to animation.
            </p>
            <p className="font-body text-base lg:text-lg text-white/55 leading-relaxed">
              The same rigour. The same urgency. The same commitment to delivering work that earns attention — and keeps it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 lg:py-52 border-t border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.09) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 text-center container-center">
          <p className="font-body text-xs uppercase tracking-[0.45em] text-white/30 mb-8">
            Ready to Start?
          </p>
          <h2
            className="font-display leading-tight mb-10"
            style={{
              fontSize: 'clamp(38px, 5.5vw, 84px)',
              background: 'linear-gradient(90deg, #8b5cf6, #a855f7 40%, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Let&apos;s make your brand{' '}
            <em style={{ fontStyle: 'italic', background: 'linear-gradient(90deg, #ec4899, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              unmissable.
            </em>
          </h2>
          <p className="font-body text-base text-white/50 mb-12 max-w-xl mx-auto">
            We take on a limited number of projects each quarter. Reach out and let&apos;s see if we&apos;re the right fit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gradient">
              📬 Get in Touch
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  )
}
