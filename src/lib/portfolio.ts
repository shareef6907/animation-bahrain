import { createClient } from './supabase/server'

export type PortfolioVideo = {
  id: string
  position: number
  s3_filename: string
  title: string
  category: string | null
  description: string | null
  aspect_ratio: string
  has_audio: boolean
  is_active: boolean
}

const FALLBACK_PORTFOLIO: PortfolioVideo[] = [
  { id: '1', position: 1, s3_filename: '1.mp4', title: 'AURA AIR', category: 'Aviation', description: 'First class reimagined.', aspect_ratio: '16:9', has_audio: true, is_active: true },
  { id: '2', position: 2, s3_filename: '2.mp4', title: 'EIGHT', category: 'Automotive', description: 'BMW M850i in motion.', aspect_ratio: '16:9', has_audio: true, is_active: true },
  { id: '3', position: 3, s3_filename: '3.mp4', title: 'MAJD', category: 'Fashion', description: 'Couture in motion.', aspect_ratio: '16:9', has_audio: true, is_active: true },
  { id: '4', position: 4, s3_filename: '4.mp4', title: 'VOLT', category: 'Product', description: 'The electric renaissance.', aspect_ratio: '16:9', has_audio: false, is_active: true },
  { id: '5', position: 5, s3_filename: '5.mp4', title: 'ASHRA', category: 'Hospitality', description: 'A hotel for the modern traveler.', aspect_ratio: '16:9', has_audio: false, is_active: true },
  { id: '6', position: 6, s3_filename: '6.mp4', title: 'NUR', category: 'Hospitality', description: 'Three stars, one story.', aspect_ratio: '16:9', has_audio: false, is_active: true },
  { id: '7', position: 7, s3_filename: '9:16 - 1.mp4', title: 'Vertical Film 1', category: 'Brand', description: 'Built for the feed.', aspect_ratio: '9:16', has_audio: false, is_active: true },
  { id: '8', position: 8, s3_filename: '9:16 - 2.mp4', title: 'Vertical Film 2', category: 'Brand', description: 'Built for the feed.', aspect_ratio: '9:16', has_audio: false, is_active: true },
  { id: '9', position: 9, s3_filename: '1080:1080.mp4', title: 'NOIR', category: 'Product', description: 'A perfume in motion.', aspect_ratio: '1:1', has_audio: false, is_active: true }
]

export async function getPortfolioVideos(): Promise<PortfolioVideo[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('animation_bahrain_portfolio')
      .select('*')
      .eq('is_active', true)
      .order('position')
    
    if (error || !data || data.length === 0) {
      return FALLBACK_PORTFOLIO
    }
    return data
  } catch {
    return FALLBACK_PORTFOLIO
  }
}