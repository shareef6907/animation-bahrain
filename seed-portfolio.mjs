import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://uqlpxkgyrslqyxyikoij.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxbHB4a2d5cnNscXl4eWlrb2lqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDA2NTk2MCwiZXhwIjoyMDU5NjQxOTYwfQ.NCE4SxaoXEAynpu4fbqDzUKL4QnhxCej23kztLe28xk'
);

const portfolio = [
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

console.log('Inserting portfolio videos...');
for (const v of portfolio) {
  const { error } = await supabase.from('animation_bahrain_portfolio').insert(v);
  console.log(v.title, error ? error.message : 'OK');
}
