import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  const { data: heroVideos } = await supabase
    .from('animation_bahrain_hero_videos')
    .select('*')
    .order('position')

  const { data: portfolioVideos } = await supabase
    .from('animation_bahrain_portfolio')
    .select('*')
    .order('position')

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="font-display text-4xl">Admin Dashboard</h1>
          <Link href="/admin/login" className="text-white/60 hover:text-white">
            Sign Out
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border border-zinc-800 rounded">
            <h2 className="font-display text-2xl mb-4">Hero Videos</h2>
            <p className="text-white/60 mb-4">{heroVideos?.length || 0} videos</p>
            <Link href="/admin/hero" className="text-amber hover:underline">
              Manage →
            </Link>
          </div>

          <div className="p-6 border border-zinc-800 rounded">
            <h2 className="font-display text-2xl mb-4">Portfolio</h2>
            <p className="text-white/60 mb-4">{portfolioVideos?.length || 0} videos</p>
            <Link href="/admin/portfolio" className="text-amber hover:underline">
              Manage →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}