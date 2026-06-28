import { createClient } from './supabase/server'

export type PortfolioVideo = {
  id: string
  title: string | null
  category: string | null
  description: string | null
  video_url: string
  has_audio: boolean
  sort_order: number
  is_active: boolean
  created_at?: string
}

export async function getPortfolioVideos(): Promise<PortfolioVideo[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('animation_bahrain_portfolio')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: false })

  if (error || !data || data.length === 0) {
    return []
  }
  return data
}
