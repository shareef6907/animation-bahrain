import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://uqlpxkgyrslqyxyikoij.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxbHB4a2d5cnNscXl4eWlrb2lqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDA2NTk2MCwiZXhwIjoyMDU5NjQxOTYwfQ.NCE4SxaoXEAynpu4fbqDzUKL4QnhxCej23kztLe28xk'
);

const heroVideos = [
  { position: 1, video_path: '1.mp4', title: 'AURA AIR', category: 'Aviation', description: 'First class reimagined.', has_audio: true },
  { position: 2, video_path: '2.mp4', title: 'EIGHT', category: 'Automotive', description: 'BMW M850i.', has_audio: true },
  { position: 3, video_path: '3.mp4', title: 'MAJD', category: 'Fashion', description: 'Couture in motion.', has_audio: true },
  { position: 4, video_path: '4.mp4', title: 'VOLT', category: 'Product', description: 'The electric renaissance.', has_audio: false },
  { position: 5, video_path: '5.mp4', title: 'ASHRA', category: 'Hospitality', description: 'A hotel for the modern traveler.', has_audio: false },
  { position: 6, video_path: '6.mp4', title: 'NUR', category: 'Hospitality', description: 'Three stars, one story.', has_audio: false }
];

console.log('Inserting hero videos...');
for (const v of heroVideos) {
  const { error } = await supabase.from('animation_bahrain_hero_videos').insert(v);
  console.log(v.title, error ? error.message : 'OK');
}
