import { supabaseAdmin } from "./supabase";

export interface HeroVideo {
  id: string;
  position: number;
  videoPath: string;
  title: string;
  category: string;
  description: string;
  hasAudio: boolean;
  isActive: boolean;
}

const FALLBACK_VIDEOS: HeroVideo[] = [
  {
    id: "fallback-1",
    position: 1,
    videoPath: "/videos/slide-1.mp4",
    title: "AURA AIR",
    category: "Aviation Film",
    description: "First class reimagined. A spec film exploring premium aviation.",
    hasAudio: true,
    isActive: true,
  },
  {
    id: "fallback-2",
    position: 2,
    videoPath: "/videos/slide-2.mp4",
    title: "EIGHT",
    category: "Motorsport Film",
    description: "BMW M850i. A study in motion and machine.",
    hasAudio: true,
    isActive: true,
  },
  {
    id: "fallback-3",
    position: 3,
    videoPath: "/videos/slide-4.mp4",
    title: "MAJD",
    category: "Fashion Film",
    description: "Couture in motion. A cinematic fashion study.",
    hasAudio: true,
    isActive: true,
  },
  {
    id: "fallback-4",
    position: 4,
    videoPath: "/videos/slide-3.mp4",
    title: "VOLT",
    category: "Product Film",
    description: "The electric renaissance. A study in silent power.",
    hasAudio: false,
    isActive: true,
  },
  {
    id: "fallback-5",
    position: 5,
    videoPath: "/videos/slide-5.mp4",
    title: "ASHRA",
    category: "Hospitality Film",
    description: "A hotel for the modern traveler.",
    hasAudio: false,
    isActive: true,
  },
  {
    id: "fallback-6",
    position: 6,
    videoPath: "/videos/slide-6.mp4",
    title: "NUR",
    category: "Hospitality Film",
    description: "Three stars, one story. A culinary cinematic study.",
    hasAudio: false,
    isActive: true,
  },
];

export async function getHeroVideos(): Promise<HeroVideo[]> {
  try {
    if (!supabaseAdmin) {
      return FALLBACK_VIDEOS;
    }

    const { data, error } = await supabaseAdmin
      .from("animation_bahrain_hero_videos")
      .select("*")
      .eq("is_active", true)
      .order("position", { ascending: true });

    if (error) {
      console.error("Supabase error fetching hero videos:", error.message);
      return FALLBACK_VIDEOS;
    }

    if (!data || data.length === 0) {
      console.warn("No hero videos found in Supabase, using fallback");
      return FALLBACK_VIDEOS;
    }

    return data.map((row) => ({
      id: row.id,
      position: row.position,
      videoPath: row.video_path,
      title: row.title,
      category: row.category,
      description: row.description ?? "",
      hasAudio: row.has_audio ?? false,
      isActive: row.is_active ?? true,
    }));
  } catch (err) {
    console.error("Failed to fetch hero videos:", err);
    return FALLBACK_VIDEOS;
  }
}
