import { Navigation } from '@/components/ui/Navigation'
import { HeroPlayer } from '@/components/hero/HeroPlayer'
import { SalesPitch } from '@/components/sections/SalesPitch'
import PortfolioGrid from '@/components/sections/PortfolioGrid'
import { ClosingCTA } from '@/components/sections/ClosingCTA'
import { FloatingContact } from '@/components/ui/FloatingContact'
import { getHeroVideos } from '@/lib/hero'

export const revalidate = 60

export default async function HomePage() {
  const heroVideos = await getHeroVideos()
  
  return (
    <main className="bg-black">
      <Navigation />
      <HeroPlayer items={heroVideos} />
      <SalesPitch />
      <PortfolioGrid />
      <ClosingCTA />
      <FloatingContact />
    </main>
  )
}