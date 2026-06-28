export type HeroVideo = {
  id: string
  position: number
  video_url: string
  title: string | null
  category: string | null
  description: string | null
  has_audio: boolean
  is_active: boolean
}

// Vercel-hosted hero video — committed to /public, URL-safe name
const HERO_VIDEO_URL = '/hero.mp4'

export async function getHeroVideos(): Promise<HeroVideo[]> {
  return [{
    id: 'header-compilation',
    position: 0,
    video_url: HERO_VIDEO_URL,
    title: null,
    category: null,
    description: null,
    has_audio: true,
    is_active: true,
  }]
}
