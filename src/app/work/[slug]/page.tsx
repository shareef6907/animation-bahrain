import { notFound } from "next/navigation";
import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Array.from({ length: 6 }, (_, i) => ({ slug: String(i + 1) }));
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const position = parseInt(slug, 10);

  if (isNaN(position) || position < 1 || position > 6) {
    notFound();
  }

  const { data } = supabaseAdmin
    ? await supabaseAdmin
        .from("animation_bahrain_hero_videos")
        .select("*")
        .eq("position", position)
        .single()
    : { data: null };

  if (!data) notFound();

  return (
    <main className="bg-black min-h-screen">
      {/* Full-bleed video */}
      <div className="relative w-full bg-black" style={{ height: "100vh" }}>
        <video
          src={data.video_path}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Back button */}
      <div className="absolute top-8 left-8 z-30">
        <Link
          href="/"
          className="h-10 w-10 rounded-full border border-white/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-12 left-8 right-8 z-20">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-mono mb-2">
          {data.category}
        </p>
        <h1 className="text-white font-bold leading-none"
          style={{ fontSize: "clamp(36px, 6vw, 80px)" }}>
          {data.title}
        </h1>
        {data.description && (
          <p className="text-white/70 text-base mt-3 max-w-xl">{data.description}</p>
        )}
      </div>
    </main>
  );
}
