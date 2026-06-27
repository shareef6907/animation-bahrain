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

  if (error || !data || data.length === 0) {
    // Fallback: single local compilation video
    return [{
      id: 'header-compilation',
      position: 0,
      video_url: '/Luxurios Brand TV Commercial.mp4',
      title: 'Luxurious Brand TV Commercial',
      category: null,
      description: null,
      has_audio: true,
      is_active: true,
    }]
  }

  // Normalize: hero table uses video_path, client expects video_url
  return data.map(row => ({
    id: row.id,
    position: row.position,
    video_url: (row as Record<string, unknown>).video_path as string ?? row.video_url as string,
    title: row.title ?? null,
    category: row.category ?? null,
    description: row.description ?? null,
    has_audio: row.has_audio ?? false,
    is_active: row.is_active ?? true,
  }))
}