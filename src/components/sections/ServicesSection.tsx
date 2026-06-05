export default function ServicesSection() {
  return (
    <section className="bg-night py-24 px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
        <p className="text-white/60 mb-12 max-w-lg">
          We craft cinematic content that moves brands forward.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Brand Films", desc: "Long-form cinematic storytelling for brands that want to own a mood." },
            { title: "Product Films", desc: "30-second spots that make products impossible to ignore." },
            { title: "Animation", desc: "2D and 3D animation that brings ideas to life." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-abyss border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-white/60 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
