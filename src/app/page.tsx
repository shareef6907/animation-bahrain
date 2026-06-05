import NetflixHero from "@/components/NetflixHero";
import { CompanySection } from "@/components/CompanySection";
import { VerticalVideoSection } from "@/components/VerticalVideoSection";
import { SquareVideoSection } from "@/components/SquareVideoSection";
import { MinimalFooter } from "@/components/MinimalFooter";
import Navigation from "@/components/Navigation";
import { getHeroVideos } from "@/lib/hero";

export const revalidate = 60;

export default async function HomePage() {
  const videos = await getHeroVideos();

  return (
    <main className="bg-black">
      <Navigation />
      <NetflixHero videos={videos} />
      <CompanySection />
      <VerticalVideoSection
        src="/videos/vertical-1.mp4"
        caption="Vertical Format · Brand Film"
      />
      <VerticalVideoSection
        src="/videos/vertical-2.mp4"
        caption="Vertical Format · Brand Film"
      />
      <SquareVideoSection />
      <MinimalFooter />
    </main>
  );
}