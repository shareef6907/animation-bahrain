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

// Direct S3 URL — no Supabase env vars needed, guaranteed to work
const HERO_VIDEO_URL = 'https://animation-bahrain-videos.s3.us-east-1.amazonaws.com/Final%20Animation%20header.mp4'

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
