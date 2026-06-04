import { notFound } from "next/navigation";
import { works } from "@/data/work";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return {};
  return {
    title: `${work.title} | Animation Bahrain`,
    description: `${work.category} for ${work.client}`,
  };
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
        style={{ height: "70vh" }}
      >
        <video
          src={work.videoUrl}
          poster={work.posterUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-contain bg-black"
        />
      </div>

      {/* Title block */}
      <div className="bg-night px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            {work.category}
          </span>
          <h1
            className="font-editorial font-black uppercase leading-none tracking-[-0.02em] text-[#FFD60A] mt-2"
            style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
          >
            {work.title}
          </h1>
          <p className="font-mono text-base text-white/60 mt-4">
            {work.client}
          </p>
        </div>
      </div>

      {/* Placeholder case study */}
      <div className="bg-abyss px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-sm text-fawn-muted">
            Case study coming soon.
          </p>
        </div>
      </div>
    </main>
  );
}