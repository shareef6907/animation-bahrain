import { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import BlogSubscribeForm from "./BlogSubscribeForm";

export const metadata: Metadata = {
  title: "Blog | Animation Bahrain",
  description:
    "Animation insights, industry trends, and behind-the-scenes from Bahrain's animation studio.",
};

const placeholderPosts = [
  {
    category: "Industry Insights",
    date: "June 2026",
  },
  {
    category: "Behind the Scenes",
    date: "June 2026",
  },
  {
    category: "Technology",
    date: "June 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center px-6 bg-abyss">
        <Reveal>
          <h1
            className="font-editorial text-6xl md:text-8xl text-fawn mb-6 text-center"
            style={{ fontWeight: 400 }}
          >
            Insights
          </h1>
        </Reveal>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32 lg:py-40 px-6 bg-night">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2
                className="font-editorial text-3xl md:text-4xl text-fawn mb-4"
                style={{ fontWeight: 400 }}
              >
                Our first posts are coming soon
              </h2>
              <p className="font-mono text-base max-w-prose text-fawn-muted">
                Subscribe to be notified when we publish new content.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <BlogSubscribeForm />
          </Reveal>

          {/* Placeholder Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {placeholderPosts.map((post, index) => (
              <Reveal key={index} delay={0.2 + index * 0.1}>
                <div className="bg-surface rounded-2xl p-8">
                  <span className="font-mono text-xs text-amber uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-editorial text-xl text-fawn mt-4 mb-2">
                    Coming Soon
                  </h3>
                  <p className="font-mono text-xs text-fawn-muted">
                    {post.date}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40 px-6 bg-abyss">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2
              className="font-editorial text-3xl md:text-4xl text-fawn mb-8"
              style={{ fontWeight: 400 }}
            >
              Have a project in mind?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <MagneticButton href="/contact">Get in Touch</MagneticButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
