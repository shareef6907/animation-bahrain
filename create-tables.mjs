import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://uqlpxkgyrslqyxyikoij.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxbHB4a2d5cnNscXl4eWlrb2lqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDA2NTk2MCwiZXhwIjoyMDU5NjQxOTYwfQ.NCE4SxaoXEAynpu4fbqDzUKL4QnhxCej23kztLe28xk'
);

const SQL = `
CREATE TABLE IF NOT EXISTS animation_bahrain_hero_videos (
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
);

CREATE TABLE IF NOT EXISTS animation_bahrain_portfolio (
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
  updated_at TIMESTAMPTZ DEFAULT now());

ALTER TABLE animation_bahrain_hero_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE animation_bahrain_portfolio ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read active hero" ON animation_bahrain_hero_videos FOR SELECT USING (is_active = true);
CREATE POLICY "Public read active portfolio" ON animation_bahrain_portfolio FOR SELECT USING (is_active = true);
CREATE POLICY "Authenticated full access hero" ON animation_bahrain_hero_videos FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated full access portfolio" ON animation_bahrain_portfolio FOR ALL TO authenticated USING (true) WITH CHECK (true);
`;

async function createTables() {
  // Execute raw SQL using postgrest
  const statements = SQL.split(';').filter(s => s.trim());
  
  for (const stmt of statements) {
    if (!stmt.trim()) continue;
    console.log('Executing:', stmt.substring(0, 50) + '...');
    const { error } = await supabase.rpc('exec_sql', { sql: stmt });
    if (error) {
      console.log('Error:', error.message);
    } else {
      console.log('OK');
    }
  }
}

createTables().then(() => console.log('Done!')).catch(console.error);
