import NetflixHero from "@/components/NetflixHero";
import { getHeroVideos } from "@/lib/hero";
import Link from "next/link";

export const revalidate = 60;

export default async function HomePage() {
  const videos = await getHeroVideos();

  return (
    <main className="bg-black">
      <NetflixHero videos={videos} />

      {/* After-hero tagline section */}
      <section className="relative bg-black py-32 lg:py-48 flex items-center justify-center" style={{ minHeight: "60vh" }}>
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(215,119,6,0.04) 0%, transparent 70%)"
        }} />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <p
            className="text-amber font-display mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "0.02em" }}
          >
            Cinematic animation for the GCC&apos;s most ambitious brands.
          </p>
          <p className="text-fawn-muted font-body text-base md:text-lg mb-10 max-w-xl mx-auto">
            Built in Bahrain. Made for the world.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-amber text-abyss px-8 py-4 rounded-lg font-body font-semibold text-sm hover:bg-amber-light transition-colors tracking-wide"
          >
            View Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}