import Link from "next/link";

const services = [
  { href: "/services/2d-animation", label: "2D Animation" },
  { href: "/services/3d-animation", label: "3D Animation" },
  { href: "/services/brand-films", label: "Brand Films" },
  { href: "/services/motion-graphics", label: "Motion Graphics" },
  { href: "/services/explainer-videos", label: "Explainer Videos" },
  { href: "/services/product-films", label: "Product Films" },
];

const industries = [
  { href: "/industries/formula-1", label: "Formula 1" },
  { href: "/industries/telecom", label: "Telecom" },
  { href: "/industries/banking", label: "Banking & Finance" },
  { href: "/industries/government", label: "Government" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="bg-night border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber flex items-center justify-center shrink-0">
                <span className="font-editorial text-abyss font-bold text-lg">A</span>
              </div>
              <span className="font-editorial text-fawn text-lg tracking-tight">Animation Bahrain</span>
            </Link>
            <p className="font-mono text-xs text-fawn-muted leading-relaxed mb-4 max-w-xs">
              A Bahrain Nights brand — cinematic animation for the GCC's leading brands, agencies, and institutions.
            </p>
            <div className="font-mono text-xs text-fawn-muted space-y-1">
              <p>Bahrain Nights, CR 113587-1</p>
              <p>Hidd, Kingdom of Bahrain</p>
              <p>+973 3900 7750</p>
              <p>hello@animationbahrain.com</p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="font-mono text-[10px] text-fawn-muted/60">
                Also from Bahrain Nights:{" "}
                <a href="https://www.bahrainnights.com" target="_blank" rel="noopener" className="hover:text-amber transition-colors">BahrainNights.com</a>,{" "}
                <a href="https://www.cinematicwebworks.com" target="_blank" rel="noopener" className="hover:text-amber transition-colors">CinematicWebWorks</a>,{" "}
                <a href="https://www.eventsbahrain.com" target="_blank" rel="noopener" className="hover:text-amber transition-colors">EventsBahrain</a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs text-amber uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="font-mono text-xs text-fawn-muted hover:text-amber transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-mono text-xs text-amber uppercase tracking-widest mb-6">Industries</h4>
            <ul className="space-y-3">
              {industries.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="font-mono text-xs text-fawn-muted hover:text-amber transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs text-amber uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="font-mono text-xs text-fawn-muted hover:text-amber transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-fawn-muted">
            &copy; {new Date().getFullYear()} Animation Bahrain — A Bahrain Nights brand
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-mono text-xs text-fawn-muted hover:text-amber transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="font-mono text-xs text-fawn-muted hover:text-amber transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
