import { createClient } from '@supabase/supabase-js';
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
console.log('URL:', url);
console.log('Key:', key ? key.substring(0,8)+'...' : 'MISSING');
const supabase = createClient(url, key);

const { data: all, error } = await supabase
  .from('animation_bahrain_portfolio')
  .select('id, title, video_url, orientation, has_audio, is_active, sort_order')
  .order('sort_order');

console.log('=== FULL DUMP ===');
if (error) console.error('ERROR:', JSON.stringify(error));
else all.forEach(r => console.log(JSON.stringify(r)));

const { data: p, error: pe } = await supabase
  .from('animation_bahrain_portfolio')
  .select('id, title, video_url, sort_order')
  .ilike('title', '%perfume%');
console.log('=== PERFUME ===');
if (pe) console.error(JSON.stringify(pe));
else p.forEach(r => console.log(JSON.stringify(r)));
