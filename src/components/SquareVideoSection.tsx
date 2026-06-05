export function SquareVideoSection() {
  return (
    <section className="w-full bg-black py-24 lg:py-32">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <video
          src="/videos/slide-3.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="max-h-[70vh] w-auto"
          style={{ aspectRatio: "1/1" }}
        />
        <div className="mt-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            Square Format · Brand Film
          </p>
        </div>
      </div>
    </section>
  )
}