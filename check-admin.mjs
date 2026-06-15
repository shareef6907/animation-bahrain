import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://uqlpxkgyrslqyxyikoij.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxbHB4a2d5cnNscXl4eWlrb2lqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDA2NTk2MCwiZXhwIjoyMDU5NjQxOTYwfQ.NCE4SxaoXEAynpu4fbqDzUKL4QnhxCej23kztLe28xk'
);

const { data, error } = await supabase.auth.admin.listUsers();
console.log('Users:', data?.users?.map(u => u.email));
console.log('Error:', error);
