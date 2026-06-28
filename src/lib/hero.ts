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

export async function getHeroVideos(): Promise<HeroVideo[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('animation_bahrain_hero_videos')
    .select('*')
    .eq('is_active', true)
    .order('position', { ascending: true })

  if (error || !data?.length) {
    // Fallback: use S3-hosted hero
    return [{
      id: 'header-compilation',
      position: 0,
      video_url: 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/Final%20Animation%20header.mp4',
      title: null,
      category: null,
      description: null,
      has_audio: true,
      is_active: true,
    }]
  }

  return data
}
