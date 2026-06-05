export default function IndustriesSection() {
  return (
    <section className="bg-abyss py-24 px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
        <p className="text-white/60 mb-12 max-w-lg">
          From aviation to luxury hospitality, we have worked across the GCC.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Aviation", "Automotive", "Hospitality", "Luxury"].map((industry) => (
            <div
              key={industry}
              className="bg-night border border-white/10 rounded-lg p-6 flex items-center justify-center"
            >
              <span className="text-white/80 font-semibold">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
