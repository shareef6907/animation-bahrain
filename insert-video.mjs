import { createClient } from '@supabase/supabase-js'

// Try the OLD project that was mentioned in brief
const supabase = createClient(
  'https://pngnqlypyyqetklpcpjs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuZ25xbHlweXlxZXRrbHBqcyIsInJvbGUiOiJzZXJ2aWNlX3JvbGUiLCJpYXQiOjE3NDYxNjQ4NDIsImV4cCI6MTc2NzUyOTQyMn0.CZwt1_jQ1at汪汪'
)

async function main() {
  // Try to read portfolio
  const { data, error } = await supabase
    .from('animation_bahrain_portfolio')
    .select('*')
    .order('sort_order')
    .limit(3)
  
  console.log('Old project portfolio:', JSON.stringify(data, null, 2))
  console.log('Error:', error)
}

main()
