import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function SalesPitch() {
  return (
    <AnimatedSection>
      <section className="w-full bg-black py-32 lg:py-48">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="font-display text-white leading-tight max-w-4xl mx-auto text-center mb-8 md:mb-12" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
            We don&apos;t illustrate brands. We direct them.
          </h2>
          <p className="font-body text-white/80 max-w-3xl mx-auto text-center text-lg lg:text-xl">
            Photorealistic, AI-powered brand films — composed with the eye of a cinematographer, built for the brands that set the standard in the Gulf.
          </p>

          <a
            href="#portfolio"
            className="mt-12 md:mt-16 inline-block px-10 py-4 bg-white text-black font-medium text-sm tracking-wide uppercase hover:bg-white/90 transition"
          >
            See Our Work →
          </a>
        </div>
      </section>
    </AnimatedSection>
  )
}
