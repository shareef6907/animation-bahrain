import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function SalesPitch() {
  return (
    <AnimatedSection>
      <section className="w-full bg-black py-32 lg:py-48">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="font-display text-white leading-tight max-w-4xl mx-auto text-center mb-12 md:mb-20" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
            Animation moves what photos can't.
          </h2>
          <p className="font-body text-white/80 mb-16 md:mb-24 max-w-3xl mx-auto text-center text-lg lg:text-xl">
            Your customer scrolls past 300 still images before lunch. They stop on 4. Animation makes you one of those four. 
            Movement hijacks attention in a way a static image never will — and once your product is moving, 
            it lives in the viewer's memory longer, sells harder, and works across every channel.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mt-20 max-w-5xl mx-auto w-full">
            <div className="text-left">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-4">01 · ATTENTION</div>
              <p className="font-body text-white/80 text-base leading-relaxed">
                A still product photo holds attention for 1.2 seconds. A 6-second animated loop holds 4.8 seconds. 
                Same product, same budget — 4x the time inside the customer's head.
              </p>
            </div>
            <div className="text-left">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-4">02 · UNDERSTANDING</div>
              <p className="font-body text-white/80 text-base leading-relaxed">
                Watch a customer try to understand a luxury watch from a photo. Now watch them understand it 
                from a slow-motion animation. Animation explains what photography shows.
              </p>
            </div>
            <div className="text-left">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-4">03 · REUSE</div>
              <p className="font-body text-white/80 text-base leading-relaxed">
                One brand film becomes 12 cuts: 60-second TV, 6-second Reels, square posts, 
                trade show backdrops. Photo shoots don't stretch like this.
              </p>
            </div>
          </div>
          
          <blockquote className="mt-20 md:mt-28 font-display text-2xl lg:text-3xl text-white max-w-3xl mx-auto text-center">
            "We don't sell animation. We sell the moments that make customers stop scrolling."
          </blockquote>
          
          <a 
            href="#portfolio" 
            className="mt-8 md:mt-10 inline-block px-10 py-4 bg-white text-black font-medium text-sm tracking-wide uppercase hover:bg-white/90 transition"
          >
            See Our Work →
          </a>
        </div>
      </section>
    </AnimatedSection>
  )
}