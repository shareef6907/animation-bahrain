import NetflixHero from "@/components/NetflixHero";
import { CompanySection } from "@/components/CompanySection";
import { VerticalVideoSection } from "@/components/VerticalVideoSection";
import UnifiedVideoSlider from "@/components/UnifiedVideoSlider";
import { AboutSection } from "@/components/AboutSection";
import Navigation from "@/components/Navigation";
import { FloatingContact } from "@/components/FloatingContact";
import { getHeroVideos } from "@/lib/hero";

export const revalidate = 60;

export default async function HomePage() {
  const videos = await getHeroVideos();

  return (
    <main className="bg-black">
      <Navigation />
      <NetflixHero videos={videos} />
      <CompanySection />
      <VerticalVideoSection src="/videos/vertical-1.mp4" />
      {/* Spacer between vertical sections */}
      <div className="h-24 lg:h-32 bg-black" />
      <VerticalVideoSection src="/videos/vertical-2.mp4" />
      {/* Spacer before slider section */}
      <div className="h-32 lg:h-48 bg-black" />
      <section className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-6 mb-12 lg:mb-16">
          <h2
            className="font-display text-center text-4xl lg:text-6xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Some of Our Projects
          </h2>
        </div>
        <UnifiedVideoSlider />
      </section>
      <AboutSection />
      <footer className="w-full bg-black py-8 px-6 text-center">
        <p
          className="text-white/40 text-xs"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Bahrain Nights · CR 113587-1 · All Rights Reserved
        </p>
      </footer>
      <FloatingContact />
    </main>
  );
}