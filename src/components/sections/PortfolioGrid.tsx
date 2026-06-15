import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { getPortfolioVideos } from '@/lib/portfolio'

export default async function PortfolioGrid() {
  const videos = await getPortfolioVideos()
  
  return (
    <AnimatedSection>
      <section id="portfolio" className="w-full bg-black py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-center text-4xl lg:text-7xl text-white tracking-tight">
            Our Work
          </h2>
          <p className="text-white/60 text-center mt-4 max-w-xl mx-auto text-base">
            Brand films, product loops, and motion identities built for premium clients across the GCC.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16 lg:mt-20">
            {videos.map((video) => (
              <div key={video.id} className="group">
                <div className="relative aspect-video bg-black overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500">
                  <video
                    src={`${process.env.NEXT_PUBLIC_VIDEO_BUCKET_URL}/${video.s3_filename}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl lg:text-3xl text-white tracking-tight">
                    {video.title}
                  </h3>
                  {video.category && (
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 shrink-0">
                      {video.category}
                    </span>
                  )}
                </div>
                {video.description && (
                  <p className="text-white/60 text-sm mt-2 leading-relaxed max-w-md">
                    {video.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}