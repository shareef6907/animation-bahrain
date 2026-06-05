"use client";

const sisterSites = [
  {
    name: "BahrainNights.com",
    url: "bahrainnights.com",
    description:
      "We showcase all the happenings in Bahrain and the Gulf.",
  },
  {
    name: "EventsBahrain.com",
    url: "eventsbahrain.com",
    description:
      "Professional event production and equipment rental service in Bahrain.",
  },
  {
    name: "FilmProductionBahrain.com",
    url: "filmproductionbahrain.com",
    description: "Professional filming for corporates.",
  },
  {
    name: "StudentPhotos.com",
    url: "studentphotos.com",
    description:
      "A high-security e-commerce platform for students worldwide to input their Student IDs and purchase their photos.",
  },
  {
    name: "CinematicWebWorks.com",
    url: "cinematicwebworks.com",
    description:
      "Complete web development. Superfast, 100% custom-coded.",
  },
];

export function AboutSection() {
  return (
    <section className="w-full bg-black py-32 lg:py-48">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <h2
          className="font-display text-4xl lg:text-6xl text-white text-center tracking-tight mb-12 lg:mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          About Us
        </h2>

        {/* Company description */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <p
            className="text-white/90 text-base lg:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Bahrain Nights is a professional Film Production and Events
            Production company based in Bahrain. When it comes to creating
            content for marketing, we stand out in every way. We animate
            with the help of AI, then blend in professional footage our
            filmmakers capture using cinema cameras with the animations to
            deliver a professional, cinematic video output.
          </p>
          <p
            className="text-white/60 text-sm lg:text-base mt-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Explore our other departments below.
          </p>
        </div>

        {/* Sister sites grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sisterSites.map((site) => (
            <a
              key={site.url}
              href={`https://${site.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 lg:p-8 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/5 transition group"
            >
              <h3
                className="font-display text-xl lg:text-2xl text-white tracking-tight group-hover:text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {site.name}
              </h3>
              <p
                className="text-white/60 text-sm mt-3 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {site.description}
              </p>
              <span
                className="inline-block mt-4 text-xs uppercase tracking-wide text-white/40 group-hover:text-white/80"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Visit →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}