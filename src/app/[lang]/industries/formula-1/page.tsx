import { getContent } from '@/lib/content';
import type { Metadata } from 'next';
import React from 'react';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const content = await getContent(`${lang}/industries`, 'formula-1');
  if (!content) return {};
  return {
    title: content.frontmatter.title,
    description: content.frontmatter.description,
  };
}

export default async function FormulaOnePage({ params }: PageProps) {
  const { lang } = await params;
  const content = await getContent(`${lang}/industries`, 'formula-1');

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Content not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{content.frontmatter.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{content.frontmatter.description}</p>
          <div className="prose prose-lg max-w-none">
            {content.content as React.ReactElement}
          </div>
        </div>
      </section>
    </main>
  );
}