export type WorkAspectRatio = "horizontal" | "vertical" | "square";

export interface WorkItem {
  slug: string;
  title: string;
  presenter: string;
  client: string;
  category: string;
  aspectRatio: WorkAspectRatio;
  videoUrl: string;
  posterUrl: string | null;
  order: number;
}

export const works: WorkItem[] = [
  {
    slug: "slide-1",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "horizontal",
    videoUrl: "/videos/slide-1.mp4",
    posterUrl: null,
    order: 1,
  },
  {
    slug: "slide-2",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "horizontal",
    videoUrl: "/videos/slide-2.mp4",
    posterUrl: null,
    order: 2,
  },
  {
    slug: "slide-3",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "horizontal",
    videoUrl: "/videos/slide-3.mp4",
    posterUrl: null,
    order: 3,
  },
  {
    slug: "slide-4",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "horizontal",
    videoUrl: "/videos/slide-4.mp4",
    posterUrl: null,
    order: 4,
  },
  {
    slug: "slide-5",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "horizontal",
    videoUrl: "/videos/slide-5.mp4",
    posterUrl: null,
    order: 5,
  },
  {
    slug: "slide-6",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "horizontal",
    videoUrl: "/videos/slide-6.mp4",
    posterUrl: null,
    order: 6,
  },
  {
    slug: "slide-7",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "vertical",
    videoUrl: "/videos/slide-7.mp4",
    posterUrl: null,
    order: 7,
  },
  {
    slug: "slide-8",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "vertical",
    videoUrl: "/videos/slide-8.mp4",
    posterUrl: null,
    order: 8,
  },
  {
    slug: "slide-9",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "square",
    videoUrl: "/videos/slide-9.mp4",
    posterUrl: null,
    order: 9,
  },
];
