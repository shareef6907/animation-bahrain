import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Mail, MessageCircle, Phone } from 'lucide-react'

export function ClosingCTA() {
  return (
    <AnimatedSection>
      <section className="w-full bg-black py-32 lg:py-48 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-6xl text-white leading-none tracking-tight">
            Ready to make your brand unmissable?
          </h2>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            We work with Formula 1 sponsors, banks, telecoms, hotels, and luxury brands across the GCC.
            Send us a brief — we respond within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            {/* Email — primary solid pill */}
            <a
              href="mailto:ceo@bahrainnights.com"
              className="group inline-flex items-center gap-2.5 px-6 py-3 bg-white text-black font-medium text-sm tracking-wide rounded-full hover:bg-white/90 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 min-w-[140px] justify-center"
            >
              <Mail size={16} className="shrink-0" />
              <span>Email</span>
            </a>
            {/* WhatsApp — violet accent pill */}
            <a
              href="https://wa.me/97339007750"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3 border border-violet-500/60 text-white font-medium text-sm tracking-wide rounded-full hover:border-violet-400 hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:-translate-y-0.5 transition-all duration-300 min-w-[140px] justify-center"
            >
              <MessageCircle size={16} className="shrink-0" />
              <span>WhatsApp</span>
            </a>
            {/* Call — ghost outline pill */}
            <a
              href="tel:+97339007750"
              className="group inline-flex items-center gap-2.5 px-6 py-3 border border-white/25 text-white/80 font-medium text-sm tracking-wide rounded-full hover:border-white/50 hover:text-white hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300 min-w-[140px] justify-center"
            >
              <Phone size={16} className="shrink-0" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
