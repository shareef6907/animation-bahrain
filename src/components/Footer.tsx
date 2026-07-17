import Link from 'next/link'

const sisterSites = [
  { href: "https://www.bahrainnights.com", label: "Bahrain Nights" },
  { href: "https://www.premieralive.com", label: "Premiera Live" },
];

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-20 border-t border-white/5">
      <div className="container-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Wordmark + tagline */}
          <div className="text-center lg:text-left">
            <p
              className="font-display text-lg tracking-wide gradient-text-warm"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Animation Bahrain
            </p>
            <p className="font-body text-xs text-white/30 mt-2">
              Premium brand films for the GCC
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { href: '/portfolio', label: 'Work' },
              { href: '/services/brand-films', label: 'Services' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-body text-sm text-white/40 hover:text-white/80 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Sister Sites */}
          <div className="flex flex-wrap gap-4 justify-center">
            {sisterSites.map((site) => (
              <a
                key={site.href}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-white/40 hover:text-amber-400 transition-colors"
              >
                {site.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-white/25">
            © {year} Animation Bahrain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
