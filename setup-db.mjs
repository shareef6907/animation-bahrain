import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function setup() {
  console.log('Testing connection...');
  
  // Check if tables exist
  const { data: heroData, error: heroError } = await supabase
    .from('animation_bahrain_hero_videos')
    .select('*')
    .limit(1);
  
  if (heroError && heroError.code === '42P01') {
    console.log('hero_videos table does not exist, creating...');
    // Try to create table via SQL
    try {
      await supabase.rpc('exec_sql', { 
        sql: `CREATE TABLE IF NOT EXISTS animation_bahrain_hero_videos (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          position INTEGER UNIQUE NOT NULL,
          video_path TEXT NOT NULL,
          title TEXT NOT NULL,
          category TEXT,
          description TEXT,
          has_audio BOOLEAN DEFAULT false,
          is_active BOOLEAN DEFAULT true,
          created_at TIMESTAMPTZ DEFAULT now(),
          updated_at TIMESTAMPTZ DEFAULT now()
        )`
      });
      console.log('hero_videos table created');
    } catch (e) {
      console.log('Could not create hero_videos:', e.message);
    }
  } else {
    console.log('hero_videos table: EXISTS');
  }
  
  // Check portfolio table
  const { data: portData, error: portError } = await supabase
    .from('animation_bahrain_portfolio')
    .select('*')
    .limit(1);
  
  if (portError && portError.code === '42P01') {
    console.log('portfolio table does not exist, creating...');
    try {
      await supabase.rpc('exec_sql', { 
        sql: `CREATE TABLE IF NOT EXISTS animation_bahrain_portfolio (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          position INTEGER UNIQUE NOT NULL,
          s3_filename TEXT NOT NULL,
          title TEXT NOT NULL,
          category TEXT,
          description TEXT,
          aspect_ratio TEXT DEFAULT '16:9',
          has_audio BOOLEAN DEFAULT false,
          is_active BOOLEAN DEFAULT true,
          created_at TIMESTAMPTZ DEFAULT now(),
          updated_at TIMESTAMPTZ DEFAULT now()
        )`
      });
      console.log('portfolio table created');
    } catch (e) {
      console.log('Could not create portfolio:', e.message);
    }
  } else {
    console.log('portfolio table: EXISTS');
  }
  
  // Seed hero videos
  const heroData2 = [
    { position: 1, video_path: '1.mp4', title: 'AURA AIR', category: 'Aviation', description: 'First class reimagined.', has_audio: true },
    { position: 2, video_path: '2.mp4', title: 'EIGHT', category: 'Automotive', description: 'BMW M850i.', has_audio: true },
    { position: 3, video_path: '3.mp4', title: 'MAJD', category: 'Fashion', description: 'Couture in motion.', has_audio: true },
    { position: 4, video_path: '4.mp4', title: 'VOLT', category: 'Product', description: 'The electric renaissance.', has_audio: false },
    { position: 5, video_path: '5.mp4', title: 'ASHRA', category: 'Hospitality', description: 'A hotel for the modern traveler.', has_audio: false },
    { position: 6, video_path: '6.mp4', title: 'NUR', category: 'Hospitality', description: 'Three stars, one story.', has_audio: false }
  ];
  
  for (const v of heroData2) {
    const { error } = await supabase
      .from('animation_bahrain_hero_videos')
      .upsert(v, { onConflict: 'position' });
    if (!error) console.log('seed hero:', v.title);
  }
  
  // Seed portfolio
  const portfolioData = [
    { position: 1, s3_filename: '1.mp4', title: 'AURA AIR', category: 'Aviation', description: 'First class reimagined.', aspect_ratio: '16:9', has_audio: true },
    { position: 2, s3_filename: '2.mp4', title: 'EIGHT', category: 'Automotive', description: 'BMW M850i in motion.', aspect_ratio: '16:9', has_audio: true },
    { position: 3, s3_filename: '3.mp4', title: 'MAJD', category: 'Fashion', description: 'Couture in motion.', aspect_ratio: '16:9', has_audio: true },
    { position: 4, s3_filename: '4.mp4', title: 'VOLT', category: 'Product', description: 'The electric renaissance.', aspect_ratio: '16:9', has_audio: false },
    { position: 5, s3_filename: '5.mp4', title: 'ASHRA', category: 'Hospitality', description: 'A hotel for the modern traveler.', aspect_ratio: '16:9', has_audio: false },
    { position: 6, s3_filename: '6.mp4', title: 'NUR', category: 'Hospitality', description: 'Three stars, one story.', aspect_ratio: '16:9', has_audio: false },
    { position: 7, s3_filename: '9:16 - 1.mp4', title: 'Vertical Film 1', category: 'Brand', description: 'Built for the feed.', aspect_ratio: '9:16', has_audio: false },
    { position: 8, s3_filename: '9:16 - 2.mp4', title: 'Vertical Film 2', category: 'Brand', description: 'Built for the feed.', aspect_ratio: '9:16', has_audio: false },
    { position: 9, s3_filename: '1080:1080.mp4', title: 'NOIR', category: 'Product', description: 'A perfume in motion.', aspect_ratio: '1:1', has_audio: false }
  ];
  
  for (const v of portfolioData) {
    const { error } = await supabase
      .from('animation_bahrain_portfolio')
      .upsert(v, { onConflict: 'position' });
    if (!error) console.log('seed portfolio:', v.title);
  }
  
  console.log('Done!');
}

setup().catch(console.error);
