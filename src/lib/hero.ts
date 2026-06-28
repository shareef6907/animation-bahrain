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
    // Fallback: use the Vercel-deployed public video (auto-excluded from repo by .gitignore)
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

  return data
}
