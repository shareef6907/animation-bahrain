import NetflixHero from "@/components/NetflixHero";
import { CompanySection } from "@/components/CompanySection";
import { VerticalVideoSection } from "@/components/VerticalVideoSection";
import UnifiedVideoSlider from "@/components/UnifiedVideoSlider";
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
      <VerticalVideoSection src="/videos/vertical-2.mp4" />
      <UnifiedVideoSlider />
      <FloatingContact />
    </main>
  );
}
