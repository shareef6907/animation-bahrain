import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://nrnrrogxrheeoaxgdyut.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ybnJyb2d4cmhlZW9heGdkeXV0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjgwOTExMSwiZXhwIjoyMDgyMzg1MTExfQ.R7b3H-2noh9jGfxxnhwH4SMAk0JMKNwMaCYVFX1RPq4'
)

async function main() {
  // Try to query leads table
  const { data, error } = await supabase
    .from('animation_bahrain_leads')
    .select('*')
    .limit(1)
  
  console.log('Leads:', JSON.stringify(data, null, 2))
  console.log('Error:', error)
  
  // Try to see tables via RPC
  const { data: rpc } = await supabase.rpc('exec_sql', { sql: "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'" })
  console.log('RPC tables:', JSON.stringify(rpc, null, 2))
}

main()
