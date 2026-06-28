import { createClient } from '@supabase/supabase-js';
const url = 'https://nrnrrogxrheeoaxgdyut.supabase.co';
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!key) { console.error('No service role key'); process.exit(1); }
const supabase = createClient(url, key);

const { data: all, error } = await supabase
  .from('animation_bahrain_portfolio')
  .select('id, title, video_url, orientation, has_audio, is_active, sort_order')
  .order('sort_order');

console.log('=== FULL DUMP ===');
if (error) { console.error('DUMP ERROR:', JSON.stringify(error)); }
else { all.forEach(r => console.log(JSON.stringify(r))); }

const { data: p, error: pe } = await supabase
  .from('animation_bahrain_portfolio')
  .select('id, title, video_url, sort_order')
  .ilike('title', '%perfume%');

console.log('=== PERFUME ===');
if (pe) { console.error('PERFUME ERROR:', JSON.stringify(pe)); }
else { p.forEach(r => console.log(JSON.stringify(r))); }
