import CinematicSlider from "@/components/CinematicSlider";
import { works } from "@/data/work";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Animation Bahrain | Cinematic Animation Studio Manama",
  description:
    "Bahrain's premier cinematic animation studio. We craft 2D, 3D, and motion graphics content for F1 sponsors, telecoms, banks and government across the GCC.",
};

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <CinematicSlider items={works} />
      <Footer />
    </main>
  );
}