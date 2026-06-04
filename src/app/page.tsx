import NetflixHero from "@/components/NetflixHero";
import { getHeroVideos } from "@/lib/hero";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export const revalidate = 60;

export default async function HomePage() {
  const videos = await getHeroVideos();

  return (
    <main className="bg-black">
      <NetflixHero videos={videos} />
      <ServicesSection />
      <IndustriesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
