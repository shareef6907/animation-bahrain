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

// Single local compilation video — no S3 hero cycling for fast LCP
export async function getHeroVideos(): Promise<HeroVideo[]> {
  return [{
    id: 'header-compilation',
    position: 0,
    video_url: '/Final Animation header.mp4',
    title: null,
    category: null,
    description: null,
    has_audio: true,
    is_active: true,
  }]
}
