export default function MinimalFooter() {
  const services = [
    "2D Animation",
    "3D Animation",
    "Brand Films",
    "Motion Graphics",
    "Explainer Videos",
    "Product Films",
  ];

  return (
    <footer className="bg-black py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Services list */}
        <h3
          className="text-center text-white/80 tracking-wide mb-8"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "24px",
          }}
        >
          Services We Provide
        </h3>
        <ul className="flex flex-wrap justify-center gap-6">
          {services.map((service) => (
<li
              key={service}
              className="text-white/60 hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-body)", fontSize: "14px" }}
            >
              {service}
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p
          className="text-center mt-12 text-white/40"
          style={{ fontFamily: "var(--font-body)", fontSize: "12px" }}
        >
          © 2026 Animation Bahrain · Part of Bahrain Nights Group · CR 113587-1
</p>
      </div>
    </footer>
  );
}
