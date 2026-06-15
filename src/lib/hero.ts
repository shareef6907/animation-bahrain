import { createClient } from './supabase/server'

export type HeroVideo = {
  id: string
  position: number
  video_path: string
  title: string
  category: string | null
  description: string | null
  has_audio: boolean
  is_active: boolean
}

const FALLBACK_HERO_VIDEOS: HeroVideo[] = [
  { id: '1', position: 1, video_path: '1.mp4', title: 'AURA AIR', category: 'Aviation', description: 'First class reimagined.', has_audio: true, is_active: true },
  { id: '2', position: 2, video_path: '2.mp4', title: 'EIGHT', category: 'Automotive', description: 'BMW M850i.', has_audio: true, is_active: true },
  { id: '3', position: 3, video_path: '3.mp4', title: 'MAJD', category: 'Fashion', description: 'Couture in motion.', has_audio: true, is_active: true },
  { id: '4', position: 4, video_path: '4.mp4', title: 'VOLT', category: 'Product', description: 'The electric renaissance.', has_audio: false, is_active: true },
  { id: '5', position: 5, video_path: '5.mp4', title: 'ASHRA', category: 'Hospitality', description: 'A hotel for the modern traveler.', has_audio: false, is_active: true },
  { id: '6', position: 6, video_path: '6.mp4', title: 'NUR', category: 'Hospitality', description: 'Three stars, one story.', has_audio: false, is_active: true }
]

export async function getHeroVideos(): Promise<HeroVideo[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('animation_bahrain_hero_videos')
      .select('*')
      .eq('is_active', true)
      .order('position')
    
    if (error || !data || data.length === 0) {
      return FALLBACK_HERO_VIDEOS
    }
    return data
  } catch {
    return FALLBACK_HERO_VIDEOS
  }
}