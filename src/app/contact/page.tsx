import Navigation from '@/components/ui/Navigation'
import Particles from '@/components/ui/Particles'
import { FloatingContact } from '@/components/ui/FloatingContact'
import { Footer } from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Animation Bahrain',
  description: 'Get in touch with Animation Bahrain for premium brand films and motion graphics.',
}

export default function ContactPage() {
  return (
    <main className="bg-[#050508] min-h-screen">
      <Particles />
      <Navigation />

      <section className="min-h-screen flex items-center justify-center pt-24 pb-32 px-6">
        <div className="w-full max-w-2xl text-center">

          {/* Emoji */}
          <p className="text-5xl mb-6">📬</p>

          {/* Heading */}
          <h1
            className="font-display leading-tight mb-4"
            style={{
              fontSize: 'clamp(44px, 7vw, 88px)',
              background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Let&apos;s Talk
          </h1>

          <p className="font-body text-base text-white/50 mb-14 leading-relaxed">
            We respond to every inquiry within{' '}
            <span className="text-white/70 font-medium">24 hours</span>.
            Tell us about your project and we&apos;ll get back to you with ideas.
          </p>

          {/* Contact cards */}
          <div className="flex flex-col gap-5">

            {/* WhatsApp */}
            <a
              href="https://wa.me/97339007750"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-5 rounded-2xl border border-white/8 hover:border-[rgba(37,211,102,0.4)] transition-all duration-300 text-left"
              style={{ background: 'rgba(37,211,102,0.04)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(37,211,102,0.12)', boxShadow: '0 0 16px rgba(37,211,102,0.25)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="font-body text-sm font-medium text-white/80 group-hover:text-white transition-colors">WhatsApp</p>
                <p className="font-body text-sm text-white/40">Message us directly</p>
              </div>
              <span className="ml-auto text-white/20 group-hover:text-[#25D366] transition-colors text-xl">→</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+97339007750"
              className="group flex items-center gap-5 p-5 rounded-2xl border border-white/8 hover:border-[rgba(0,255,255,0.35)] transition-all duration-300 text-left"
              style={{ background: 'rgba(0,255,255,0.03)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(0,255,255,0.08)', boxShadow: '0 0 16px rgba(0,255,255,0.2)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .91h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="font-body text-sm font-medium text-white/80 group-hover:text-white transition-colors">Phone</p>
                <p className="font-body text-sm text-white/40">+973 3900 7750</p>
              </div>
              <span className="ml-auto text-white/20 group-hover:text-cyan-300 transition-colors text-xl">→</span>
            </a>

            {/* Email */}
            <a
              href="mailto:ceo@bahrainnights.com"
              className="group flex items-center gap-5 p-5 rounded-2xl border border-white/8 hover:border-[rgba(139,92,246,0.4)] transition-all duration-300 text-left"
              style={{ background: 'rgba(139,92,246,0.04)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(139,92,246,0.12)', boxShadow: '0 0 16px rgba(139,92,246,0.25)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <p className="font-body text-sm font-medium text-white/80 group-hover:text-white transition-colors">Email</p>
                <p className="font-body text-sm text-white/40">ceo@bahrainnights.com</p>
              </div>
              <span className="ml-auto text-white/20 group-hover:text-violet-400 transition-colors text-xl">→</span>
            </a>
          </div>

          {/* Response time note */}
          <p className="font-body text-xs text-white/25 mt-12">
            ✨ We typically respond within 24 hours. For urgent projects, reach us on WhatsApp.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  )
}
