import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://uqlpxkgyrslqyxyikoij.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxbHB4a2d5cnNscXl4eWlrb2lqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDA2NTk2MCwiZXhwIjoyMDU5NjQxOTYwfQ.NCE4SxaoXEAynpu4fbqDzUKL4QnhxCej23kztLe28xk'
);

console.log('Testing connection...');
const { data, error } = await supabase.from('animation_bahrain_hero_videos').select('*').limit(1);
console.log('hero_videos:', error?.message || (data ? 'EXISTS' : 'MISSING'));
console.log('data:', data);
