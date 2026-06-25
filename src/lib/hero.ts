import { createClient } from './supabase/server'

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

const FALLBACK_HERO_VIDEOS: HeroVideo[] = []

export async function getHeroVideos(): Promise<HeroVideo[]> {
  // Return the single header compilation video (local, not S3)
  return [{
    id: 'header-compilation',
    position: 1,
    video_url: '/Luxurios Brand TV Commercial.mp4',
    title: 'Luxurious Brand TV Commercial',
    category: null,
    description: null,
    has_audio: true,
    is_active: true,
  }]
}
