export type WorkAspectRatio = "horizontal" | "vertical" | "square";

export interface WorkItem {
  slug: string;
  title: string;
  presenter: string;
  client: string;
  category: string;
  aspectRatio: WorkAspectRatio;
  videoUrl: string;
  posterUrl: string;
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
    videoUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-1.mp4",
    posterUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-1.jpg",
    order: 1,
  },
  {
    slug: "slide-2",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "horizontal",
    videoUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-2.mp4",
    posterUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-2.jpg",
    order: 2,
  },
  {
    slug: "slide-3",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "horizontal",
    videoUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-3.mp4",
    posterUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-3.jpg",
    order: 3,
  },
  {
    slug: "slide-4",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "horizontal",
    videoUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-4.mp4",
    posterUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-4.jpg",
    order: 4,
  },
  {
    slug: "slide-5",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "horizontal",
    videoUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-5.mp4",
    posterUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-5.jpg",
    order: 5,
  },
  {
    slug: "slide-6",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "horizontal",
    videoUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-6.mp4",
    posterUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-6.jpg",
    order: 6,
  },
  {
    slug: "slide-7",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "vertical",
    videoUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-7.mp4",
    posterUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-7.jpg",
    order: 7,
  },
  {
    slug: "slide-8",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "vertical",
    videoUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-8.mp4",
    posterUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-8.jpg",
    order: 8,
  },
  {
    slug: "slide-9",
    title: "",
    presenter: "",
    client: "",
    category: "",
    aspectRatio: "square",
    videoUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-9.mp4",
    posterUrl:
      "https://events-bahrain.s3.us-east-1.amazonaws.com/animation/slide-9.jpg",
    order: 9,
  },
];
