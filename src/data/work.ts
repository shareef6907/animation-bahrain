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
    slug: "placeholder-1",
    title: "NOIR",
    presenter: "ANIMATION BAHRAIN PRESENTS",
    client: "Bahrain Nights Maison",
    category: "Brand Film",
    aspectRatio: "horizontal",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    posterUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    order: 1,
  },
  {
    slug: "placeholder-2",
    title: "VELOCITY",
    presenter: "ANIMATION BAHRAIN PRESENTS",
    client: "Pirelli Gulf",
    category: "Motion Graphics",
    aspectRatio: "horizontal",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    posterUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    order: 2,
  },
  {
    slug: "placeholder-3",
    title: "CLARITY",
    presenter: "ANIMATION BAHRAIN PRESENTS",
    client: "Batelco",
    category: "Explainer",
    aspectRatio: "vertical",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    posterUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    order: 3,
  },
  {
    slug: "placeholder-4",
    title: "MERIDIAN",
    presenter: "ANIMATION BAHRAIN PRESENTS",
    client: "Bahrain Economic Development Board",
    category: "3D Animation",
    aspectRatio: "horizontal",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    posterUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    order: 4,
  },
  {
    slug: "placeholder-5",
    title: "HORIZON",
    presenter: "ANIMATION BAHRAIN PRESENTS",
    client: "National Bank of Bahrain",
    category: "2D Animation",
    aspectRatio: "square",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    posterUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    order: 5,
  },
  {
    slug: "placeholder-6",
    title: "FLUX",
    presenter: "ANIMATION BAHRAIN PRESENTS",
    client: "STC Bahrain",
    category: "Motion Graphics",
    aspectRatio: "horizontal",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    posterUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    order: 6,
  },
  {
    slug: "placeholder-7",
    title: "SIGNAL",
    presenter: "ANIMATION BAHRAIN PRESENTS",
    client: "Ministry of Youth",
    category: "Explainer",
    aspectRatio: "vertical",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    posterUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    order: 7,
  },
  {
    slug: "placeholder-8",
    title: "PRISM",
    presenter: "ANIMATION BAHRAIN PRESENTS",
    client: "Aluminium Bahrain",
    category: "Brand Film",
    aspectRatio: "horizontal",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    posterUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    order: 8,
  },
  {
    slug: "placeholder-9",
    title: "BEACON",
    presenter: "ANIMATION BAHRAIN PRESENTS",
    client: "Bahrain International Airport",
    category: "3D Animation",
    aspectRatio: "horizontal",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    posterUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    order: 9,
  },
];