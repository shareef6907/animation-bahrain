-- Animation Bahrain Hero Videos Schema
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS animation_bahrain_hero_videos (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  position    integer NOT NULL UNIQUE,
  video_path  text NOT NULL,
  title       text NOT NULL,
  category    text NOT NULL,
  description text,
  has_audio   boolean DEFAULT false,
  is_active   boolean DEFAULT true,
  created_at  timestamptz DEFAULT now(),
  updated_at  timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE animation_bahrain_hero_videos ENABLE ROW LEVEL SECURITY;

-- Policy 1: Public read where is_active = true (for homepage)
CREATE POLICY "Public read active videos"
  ON animation_bahrain_hero_videos
  FOR SELECT
  USING (is_active = true);

-- Policy 2: Authenticated users can read all (for admin panel)
CREATE POLICY "Authenticated read all videos"
  ON animation_bahrain_hero_videos
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy 3: Authenticated write (admin panel CRUD)
CREATE POLICY "Authenticated write"
  ON animation_bahrain_hero_videos
  FOR ALL
  TO authenticated
  USING (true);

-- Seed data
INSERT INTO animation_bahrain_hero_videos (position, video_path, title, category, description, has_audio) VALUES
  (1, '/videos/slide-1.mp4', 'AURA AIR', 'Aviation Film', 'First class reimagined. A spec film exploring premium aviation.', true),
  (2, '/videos/slide-2.mp4', 'EIGHT', 'Motorsport Film', 'BMW M850i. A study in motion and machine.', true),
  (3, '/videos/slide-4.mp4', 'MAJD', 'Fashion Film', 'Couture in motion. A cinematic fashion study.', true),
  (4, '/videos/slide-3.mp4', 'VOLT', 'Product Film', 'The electric renaissance. A study in silent power.', false),
  (5, '/videos/slide-5.mp4', 'ASHRA', 'Hospitality Film', 'A hotel for the modern traveler.', false),
  (6, '/videos/slide-6.mp4', 'NUR', 'Hospitality Film', 'Three stars, one story. A culinary cinematic study.', false)
ON CONFLICT (position) DO UPDATE SET
  video_path = EXCLUDED.video_path,
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  description = EXCLUDED.description,
  has_audio = EXCLUDED.has_audio,
  updated_at = now();
