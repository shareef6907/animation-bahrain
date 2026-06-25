import { createClient } from '@supabase/supabase-js'

// Service role key for Supabase project nrnrrogxrheeoaxgdyut
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5OTM0MjMsImV4cCI6MTc2NzUyOTQyM30.0_0lW9lW9lW9lW9lW9lW9lW9lW9lW9lW9lW9'

const supabase = createClient(
  'https://nrnrrogxrheeoaxgdyut.supabase.co',
  SERVICE_KEY
)

async function main() {
  // Get current rows
  const { data: rows, error } = await supabase
    .from('animation_bahrain_portfolio')
    .select('*')
    .order('position')
    
  console.log('Current rows:', JSON.stringify(rows, null, 2))
  console.log('Error:', error)
}

main()
