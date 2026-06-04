import { notFound } from "next/navigation";
import { works } from "@/data/work";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) notFound();

  return (
    <main className="bg-black min-h-screen">
      {/* Full-bleed video stage */}
      <div
        className="relative w-full flex items-center justify-center bg-black"
        style={{ height: "100vh" }}
      >
        <video
          src={work.videoUrl}
          poster={work.posterUrl ?? undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-contain bg-black"
        />
      </div>

      {/* Back button */}
      <div className="absolute top-8 left-8 z-30">
        <Link
          href="/"
          className="h-10 w-10 rounded-full border border-white/40 flex items-center justify-center text-white transition-all duration-200 hover:bg-white hover:text-black hover:border-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
