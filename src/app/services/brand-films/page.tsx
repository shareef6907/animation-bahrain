import Navigation from '@/components/ui/Navigation'
import Particles from '@/components/ui/Particles'
import { FloatingContact } from '@/components/ui/FloatingContact'
import { Footer } from '@/components/Footer'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Films | Animation Bahrain',
  description: 'Cinematic brand storytelling for GCC brands. We craft emotionally resonant narratives that elevate your brand beyond traditional advertising.',
}

const features = [
  { emoji: '🎯', title: 'Strategic Narrative', desc: 'We uncover the story only your brand can tell — then we make you feel it.' },
  { emoji: '🎬', title: 'Cinematic Quality', desc: 'Every frame lit, composed, and graded like a film your audience remembers.' },
  { emoji: '💡', title: 'Emotional Resonance', desc: 'Advertising that doesn\'t feel like advertising. That\'s the craft.' },
  { emoji: '📱', title: 'Multi-Platform Ready', desc: 'Delivered for cinema, broadcast, social, and digital — all from one shoot.' },
  { emoji: '♟️', title: 'Premium Production', desc: 'No shortcuts. Scripts, storyboards, on-set direction, color grade, sound design — the full package.' },
  { emoji: '🌏', title: 'GCC Expertise', desc: 'We know the Gulf market. What resonates in Bahrain, Dubai, Riyadh, Kuwait City.' },
]

const useCases = [
  'Brand Launch Films',
  'Documentary-Style Brand Stories',
  'Emotional Marketing Campaigns',
  'Luxury Brand Cinema',
  'Social Impact Films',
]

const steps = [
  { num: '01', title: 'Brief', desc: 'We listen. Understand your brand, your audience, your goal.' },
  { num: '02', title: 'Creative Development', desc: 'Script, storyboard, visual concept — we develop the story before we shoot.' },
  { num: '03', title: 'Pre-Production', desc: 'Shot planning, location scouting, casting, scheduling.' },
  { num: '04', title: 'Production', desc: 'On-set with cinema-grade equipment and experienced crew.' },
  { num: '05', title: 'Post-Production', desc: 'Edit, color grade, sound design, music — all in-house.' },
  { num: '06', title: 'Delivery', desc: 'Multi-format export, ready for every platform.' },
]

export default function BrandFilmsPage() {
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
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.45em] text-white/30 mb-8">
              🎬 Our Services
            </p>
          </Reveal>
          <Reveal delay={0.1}>
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
              Brand Films
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-base lg:text-lg text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed">
              Cinematic brand films that don&apos;t look like ads. We craft narratives
              that resonate emotionally — short film quality applied to brand storytelling.
              For brands who want to be remembered, not just seen.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-gradient">
                🎬 Start Your Project
              </Link>
              <Link href="/portfolio" className="btn-ghost">
                View Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-32 lg:py-44">
        <div className="container-center">
          <Reveal>
            <h2
              className="font-display leading-tight text-center mb-6"
              style={{ fontSize: 'clamp(32px, 4.5vw, 60px)' }}
            >
              What We Deliver
            </h2>
            <p className="font-body text-sm text-white/40 text-center mb-16 max-w-xl mx-auto">
              Every project is handled with the same care we&apos;d give our own story.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ emoji, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <div
                  className="p-7 rounded-2xl border border-white/7 hover:border-violet/25 transition-all duration-400"
                  style={{ background: 'rgba(13,13,20,0.8)' }}
                >
                  <span className="text-3xl mb-5 block">{emoji}</span>
                  <h3 className="font-display text-xl mb-3 text-white/90">{title}</h3>
                  <p className="font-body text-sm text-white/40 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases + visual */}
      <section className="py-32 border-t border-white/5">
        <div className="container-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2
                  className="font-display leading-tight mb-6"
                  style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
                >
                  Ideal For
                </h2>
                <p className="font-body text-sm text-white/45 mb-10 leading-relaxed">
                  Brand films transform how your audience perceives your company.
                  From startups in Bahrain launching their identity to corporations
                  across the GCC building emotional connections — our cinematic
                  approach delivers unforgettable experiences.
                </p>
                <ul className="space-y-4">
                  {useCases.map((uc) => (
                    <li key={uc} className="flex items-start gap-3">
                      <span
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}
                      />
                      <span className="font-body text-sm text-white/60">{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div
                className="aspect-video rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(236,72,153,0.08))',
                  border: '1px solid rgba(139,92,246,0.15)',
                }}
              >
                <div className="text-center">
                  <p className="text-5xl mb-4">🎬</p>
                  <p className="font-body text-xs text-white/30 uppercase tracking-widest">
                    Brand Film Preview
                  </p>
                  <p className="font-body text-xs text-white/20 mt-1">
                    Full showreel at /portfolio
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 border-t border-white/5">
        <div className="container-center">
          <Reveal>
            <h2
              className="font-display leading-tight text-center mb-16"
              style={{ fontSize: 'clamp(32px, 4.5vw, 60px)' }}
            >
              Our Process
            </h2>
          </Reveal>
          <div className="space-y-5">
            {steps.map(({ num, title, desc }, i) => (
              <Reveal key={num} delay={i * 0.07}>
                <div
                  className="flex items-start gap-8 p-7 rounded-2xl border border-white/7 hover:border-violet/20 transition-all duration-300"
                  style={{ background: 'rgba(13,13,20,0.6)' }}
                >
                  <span
                    className="font-display text-2xl w-14 flex-shrink-0"
                    style={{ color: 'rgba(139,92,246,0.7)' }}
                  >
                    {num}
                  </span>
                  <div>
                    <h3 className="font-display text-xl mb-2 text-white/80">{title}</h3>
                    <p className="font-body text-sm text-white/40">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 border-t border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.09) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <Reveal>
            <h2
              className="font-display leading-tight mb-6"
              style={{
                fontSize: 'clamp(38px, 5vw, 72px)',
                background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ready to Get Started?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-sm text-white/45 mb-10">
              Free consultation, no commitment.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/contact" className="btn-gradient">
              📬 Book a Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  )
}
