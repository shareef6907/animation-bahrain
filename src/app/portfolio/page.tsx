import Navigation from '@/components/ui/Navigation'
import Particles from '@/components/ui/Particles'
import PortfolioSlider from '@/components/sections/PortfolioSlider'
import { ClosingCTA } from '@/components/sections/ClosingCTA'
import { Footer } from '@/components/Footer'
import { FloatingContact } from '@/components/ui/FloatingContact'
import type { PortfolioVideo } from '@/lib/portfolio'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Animation Bahrain',
  description: 'Premium brand films and motion graphics for F1 sponsors, telecoms, banks and government across Bahrain and the GCC.',
}

// Hardcoded fallback — same as homepage
const FALLBACK_PORTFOLIO: PortfolioVideo[] = [
  { id: '5f6278f5-4bd9-4e7b-b49b-039dc7e27369', title: 'BMW New Animation', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/BMW%20New%20animation.mp4', has_audio: true, sort_order: 17, is_active: true, created_at: '2026-06-27T16:52:57.547244+00:00' },
  { id: '9fa58dbc-4b42-4d80-bd65-bf64fa1af658', title: 'Commercial 1', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/Commercial%201.mp4', has_audio: true, sort_order: 16, is_active: true, created_at: '2026-06-25T20:28:50.129219+00:00' },
  { id: '0b2ed1d5-24c8-4bef-9882-51f3f21c011c', title: 'Cream Ad', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/Cream%20Ad%20full.mp4', has_audio: true, sort_order: 15, is_active: true, created_at: '2026-06-25T20:28:50.388513+00:00' },
  { id: '69303aec-9f85-4d2a-bc99-1df1b488b5c7', title: 'Perfume Ad 3', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/Perfume%20ad3.mp4', has_audio: true, sort_order: 14, is_active: true, created_at: '2026-06-25T19:12:20.522126+00:00' },
  { id: '00865808-376a-44e4-b3f9-e582dcf32dfd', title: 'Perfume Ad 1', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/Perfume%20ad%201.mp4', has_audio: true, sort_order: 13, is_active: true, created_at: '2026-06-25T19:09:07.743093+00:00' },
  { id: '160d64f7-6522-4936-a3e4-ff0a96845b23', title: 'BN Drink Animation', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/BN%20Drink%20Animation1.mp4', has_audio: true, sort_order: 12, is_active: true, created_at: '2026-06-25T20:28:49.840733+00:00' },
  { id: '7744ce5a-108b-4cad-b123-843d2e7683dd', title: 'Perfume Ad', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/Perfume%20ad.mp4', has_audio: true, sort_order: 11, is_active: true, created_at: '2026-06-25T20:28:49.57262+00:00' },
  { id: '3b49b9c1-e003-4adf-b79f-f88e7d8e5c84', title: '1080 Square', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/1080%3A1080.mp4', has_audio: false, sort_order: 10, is_active: true, created_at: '2026-06-25T20:28:49.08501+00:00' },
  { id: '0fdb5c1d-5daf-44f1-ac0a-13e2f1d05f55', title: '9:16 Vertical 2', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/9%3A16%20-%202.mp4', has_audio: false, sort_order: 9, is_active: true, created_at: '2026-06-25T20:28:48.781668+00:00' },
  { id: '0dcc3906-0498-4229-bfcb-12ada47c4ee6', title: '9:16 Vertical 1', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/9%3A16%20-%201.mp4', has_audio: false, sort_order: 8, is_active: true, created_at: '2026-06-25T20:28:48.480518+00:00' },
  { id: 'edeea888-0e41-4131-9018-2fa73fb9f453', title: 'Animation 6', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/6.mp4', has_audio: false, sort_order: 7, is_active: true, created_at: '2026-06-25T20:28:48.080898+00:00' },
  { id: '94f2b06b-2c04-4205-9fa5-b5e8376e6a1a', title: 'Animation 5', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/5.mp4', has_audio: false, sort_order: 6, is_active: true, created_at: '2026-06-25T20:28:47.787198+00:00' },
  { id: '270b7fd2-b579-4b1b-8b63-d0c4ee1b446c', title: 'Animation 4', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/4.mp4', has_audio: false, sort_order: 5, is_active: true, created_at: '2026-06-25T20:28:47.495454+00:00' },
  { id: '6fb42c77-31b4-4ed4-9bb1-eafed33bcdbf', title: 'Animation 3', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/3.mp4', has_audio: true, sort_order: 4, is_active: true, created_at: '2026-06-25T20:28:47.224686+00:00' },
  { id: 'ac7b0312-f43e-41bd-a199-2b01bd829060', title: 'Animation 2', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/2.mp4', has_audio: true, sort_order: 3, is_active: true, created_at: '2026-06-25T20:28:46.929193+00:00' },
  { id: 'a81083dd-d444-42b6-9ff1-4de4caeec7b3', title: 'Animation 1', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/1.mp4', has_audio: true, sort_order: 2, is_active: true, created_at: '2026-06-25T20:28:46.598101+00:00' },
  { id: 'cbd01728-060a-4b10-ac31-75096e4dec9e', title: 'Fintech Animation', category: '', description: '', video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/105bcdf0-c747-4944-be96-4f558afc1677-Fintech%20Animation.mp4', has_audio: true, sort_order: 1, is_active: true, created_at: '2026-06-25T20:28:50.66572+00:00' },
]

async function getPortfolioVideos(): Promise<PortfolioVideo[]> {
  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/portfolio`, { next: { revalidate: 60 } })
    if (res.ok) {
      const data: PortfolioVideo[] = await res.json()
      if (data.length > 0) return data
    }
  } catch {}
  return FALLBACK_PORTFOLIO
}

export default async function PortfolioPage() {
  const videos = await getPortfolioVideos()

  return (
    <main className="bg-[#050508] min-h-screen">
      <Particles />
      <Navigation />
      <PortfolioSlider videos={videos} />
      <ClosingCTA />
      <Footer />
      <FloatingContact />
    </main>
  )
}
