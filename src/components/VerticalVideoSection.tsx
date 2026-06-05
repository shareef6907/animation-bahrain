interface VerticalVideoSectionProps {
  src: string
  caption: string
}

export function VerticalVideoSection({ src, caption }: VerticalVideoSectionProps) {
  return (
    <section className="w-full bg-black py-24 lg:py-32">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="max-h-[80vh] w-auto"
          style={{ aspectRatio: "9/16" }}
        />
        <div className="mt-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            {caption}
          </p>
        </div>
      </div>
    </section>
  )
}