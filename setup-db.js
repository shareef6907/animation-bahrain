const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function setup() {
  console.log('Setting up Supabase tables...');
  
  // Create hero_videos table
  const { error: e1 } = await supabase.rpc('exec_sql', { 
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
  console.log('hero_videos:', e1?.message || 'OK');
  
  // Create portfolio table
  const { error: e2 } = await supabase.rpc('exec_sql', { 
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
  console.log('portfolio:', e2?.message || 'OK');
  
  // Seed hero videos
  const heroData = [
    { position: 1, video_path: '1.mp4', title: 'AURA AIR', category: 'Aviation', description: 'First class reimagined. A cinematic spec film exploring premium aviation.', has_audio: true },
    { position: 2, video_path: '2.mp4', title: 'EIGHT', category: 'Automotive', description: 'BMW M850i. A study in motion and machine.', has_audio: true },
    { position: 3, video_path: '3.mp4', title: 'MAJD', category: 'Fashion', description: 'Couture in motion. A cinematic fashion study.', has_audio: true },
    { position: 4, video_path: '4.mp4', title: 'VOLT', category: 'Product', description: 'The electric renaissance. A study in silent power.', has_audio: false },
    { position: 5, video_path: '5.mp4', title: 'ASHRA', category: 'Hospitality', description: 'A hotel for the modern traveler.', has_audio: false },
    { position: 6, video_path: '6.mp4', title: 'NUR', category: 'Hospitality', description: 'Three stars, one story. A culinary cinematic study.', has_audio: false }
  ];
  
  for (const v of heroData) {
    const { error } = await supabase
      .from('animation_bahrain_hero_videos')
      .upsert(v, { onConflict: 'position' });
    console.log('seed hero', v.title, error?.message || 'OK');
  }
  
  // Seed portfolio
  const portfolioData = [
    { position: 1, s3_filename: '1.mp4', title: 'AURA AIR', category: 'Aviation', description: 'First class reimagined.', aspect_ratio: '16:9', has_audio: true },
    { position: 2, s3_filename: '2.mp4', title: 'EIGHT', category: 'Automotive', description: 'BMW M850i in motion.', aspect_ratio: '16:9', has_audio: true },
    { position: 3, s3_filename: '3.mp4', title: 'MAJD', category: 'Fashion', description: 'Couture in motion.', aspect_ratio: '16:9', has_audio: true },
    { position: 4, s3_filename: '4.mp4', title: 'VOLT', category: 'Product', description: 'The electric renaissance.', aspect_ratio: '16:9', has_audio: false },
    { position: 5, s3_filename: '5.mp4', title: 'ASHRA', category: 'Hospitality', description: 'A hotel for the modern traveler.', aspect_ratio: '16:9', has_audio: false },
    { position: 6, s3_filename: '6.mp4', title: 'NUR', category: 'Hospitality', description: 'Three stars, one story.', aspect_ratio: '16:9', has_audio: false },
    { position: 7, s3_filename: '9:16 - 1.mp4', title: 'Vertical Film', category: 'Brand', description: 'Built for the feed.', aspect_ratio: '9:16', has_audio: false },
    { position: 8, s3_filename: '9:16 - 2.mp4', title: 'Vertical Film', category: 'Brand', description: 'Built for the feed.', aspect_ratio: '9:16', has_audio: false },
    { position: 9, s3_filename: '1080:1080.mp4', title: 'NOIR', category: 'Product', description: 'A perfume in motion.', aspect_ratio: '1:1', has_audio: false }
  ];
  
  for (const v of portfolioData) {
    const { error } = await supabase
      .from('animation_bahrain_portfolio')
      .upsert(v, { onConflict: 'position' });
    console.log('seed portfolio', v.title, error?.message || 'OK');
  }
  
  console.log('Done!');
}

setup().catch(console.error);