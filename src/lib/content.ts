import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import type { MDXRemoteProps } from 'next-mdx-remote';
import type { ReactElement } from 'react';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
  date?: string;
  author?: string;
  image?: string;
  tags?: string[];
  draft?: boolean;
  [key: string]: unknown;
}

/** Raw parsed MDX — before compilation */
export interface ParsedContent {
  frontmatter: ContentMeta;
  rawContent: string;
}

/** Compiled MDX — `content` is a React element, render directly in RSC */
export interface MdxContent {
  frontmatter: ContentMeta;
  content: ReactElement;
}

/**
 * Returns all slugs (filenames without extension) in a content directory.
 */
export function getAllSlugs(dir: string): string[] {
  const fullPath = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => file.replace(/\.(mdx|md)$/, ''));
}

/**
 * Returns frontmatter metadata for all content items in a directory.
 * Sorted by date descending, draft items excluded in production.
 */
export function getAllContent(dir: string): ContentMeta[] {
  const slugs = getAllSlugs(dir);
  const items: ContentMeta[] = [];

  for (const slug of slugs) {
    const fullPath = [
      path.join(CONTENT_DIR, dir, `${slug}.mdx`),
      path.join(CONTENT_DIR, dir, `${slug}.md`),
    ].find((p) => fs.existsSync(p));
    if (!fullPath) continue;
    const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
    items.push({ slug, ...data } as ContentMeta);
  }

  items.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  const isProduction = process.env.NODE_ENV === 'production';
  return items.filter((item) => (isProduction ? item.draft !== true : true));
}

/**
 * Returns frontmatter metadata for a single content item.
 */
export function getContentMeta(dir: string, slug: string): ContentMeta | null {
  const fullPath = [
    path.join(CONTENT_DIR, dir, `${slug}.mdx`),
    path.join(CONTENT_DIR, dir, `${slug}.md`),
  ].find((p) => fs.existsSync(p));
  if (!fullPath) return null;
  const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
  return { slug, ...data } as ContentMeta;
}

/**
 * Returns raw markdown content for a slug.
 */
export function getRawContent(dir: string, slug: string): string | null {
  const fullPath = [
    path.join(CONTENT_DIR, dir, `${slug}.mdx`),
    path.join(CONTENT_DIR, dir, `${slug}.md`),
  ].find((p) => fs.existsSync(p));
  if (!fullPath) return null;
  return fs.readFileSync(fullPath, 'utf8');
}

/**
 * Returns compiled MDX content with React element for rendering.
 * Use inside a server component — the `content` field is a React element.
 */
export async function getContent(dir: string, slug: string): Promise<MdxContent | null> {
  const rawContent = getRawContent(dir, slug);
  if (!rawContent) return null;

  const { content: mdxElement, frontmatter } = await compileMDX<Record<string, unknown>>({
    source: rawContent,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkFrontmatter],
        rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      },
    },
    components: {},
  });

  return {
    frontmatter: { slug, ...frontmatter } as ContentMeta,
    content: mdxElement,
  };
}

/**
 * Returns related content items from the same directory,
 * matching shared tags (excluding the current slug).
 */
export function getRelatedContent(
  dir: string,
  slug: string,
  limit = 3
): ContentMeta[] {
  const current = getContentMeta(dir, slug);
  if (!current || !current.tags) return [];

  const all = getAllContent(dir);
  return all
    .filter(
      (item) =>
        item.slug !== slug &&
        item.tags?.some((tag: string) => current.tags?.includes(tag))
    )
    .slice(0, limit);
}

export type { MDXRemoteProps } from 'next-mdx-remote';