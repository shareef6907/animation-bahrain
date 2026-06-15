import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Mail, MessageCircle, Phone } from 'lucide-react'

export function ClosingCTA() {
  return (
    <AnimatedSection>
      <section className="w-full bg-black py-32 lg:py-48 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl lg:text-7xl text-white leading-none tracking-tight max-w-4xl mx-auto">
            Ready to make your brand unmissable?
          </h2>
          <p className="text-white/80 text-center mt-8 max-w-2xl mx-auto text-lg">
            We work with Formula 1 sponsors, banks, telecoms, hotels, and luxury brands across the GCC. 
            Send us a brief — we respond within 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="mailto:ceo@bahrainnights.com"
              className="inline-block px-8 py-4 bg-white text-black font-medium text-sm tracking-wide uppercase hover:bg-white/90 transition"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/97339007750"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-white/30 text-white font-medium text-sm tracking-wide uppercase hover:bg-white/10 transition"
            >
              WhatsApp
            </a>
            <a
              href="tel:+97339007750"
              className="inline-block px-8 py-4 border border-white/30 text-white font-medium text-sm tracking-wide uppercase hover:bg-white/10 transition"
            >
              Call
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}