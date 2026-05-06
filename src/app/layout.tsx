import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ClientComponents } from "@/components/ClientComponents";

const editorial = Fraunces({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.animationbahrain.com"),
  title: {
    default: "Animation Bahrain | Cinematic Animation Studio Manama",
    template: "%s | Animation Bahrain",
  },
  description:
    "Bahrain's premier cinematic animation studio. We craft 2D, 3D, and motion graphics content for F1 sponsors, telecoms, banks and government across the GCC.",
  keywords: [
    "animation studio bahrain",
    "animation bahrain",
    "motion graphics bahrain",
    "2D animation bahrain",
    "3D animation bahrain",
    "brand films bahrain",
    "product films bahrain",
    "animation company manama",
    "animation studio gcc",
    "Bahrain animation studio",
    "video production bahrain",
    "commercial animation bahrain",
    "cinematic animation",
    "animation production bahrain",
  ],
  authors: [{ name: "Animation Bahrain" }],
  creator: "Animation Bahrain",
  publisher: "Animation Bahrain",
  openGraph: {
    type: "website",
    locale: "en_BH",
    url: "https://www.animationbahrain.com",
    siteName: "Animation Bahrain",
    title: "Animation Bahrain | Cinematic Animation Studio Manama",
    description:
      "Bahrain's premier cinematic animation studio. We craft 2D, 3D, and motion graphics content for brands across the GCC.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Animation Bahrain - Cinematic Animation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animation Bahrain | Cinematic Animation Studio",
    description:
      "Bahrain's premier cinematic animation studio. We craft 2D, 3D, and motion graphics content for brands across the GCC.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.animationbahrain.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "VideoProductionStudio"],
  "@id": "https://www.animationbahrain.com",
  name: "Animation Bahrain",
  alternateName: "Bahrain Nights - Animation Division",
  url: "https://www.animationbahrain.com",
  description:
    "Bahrain's premier cinematic animation studio. Creating 2D, 3D, motion graphics, brand films, and product films for brands across the GCC.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BH",
    addressLocality: "Manama",
    addressRegion: "Capital Governorate",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.2235,
    longitude: 50.5876,
  },
  telephone: "+973-3900-7750",
  email: "hello@animationbahrain.com",
  priceRange: "BD 500 - BD 15000+",
  openingHours: "Mo-Sa 09:00-18:00",
  sameAs: [
    "https://www.instagram.com/bh.nights",
    "https://www.bahrainnights.com",
    "https://www.filmproductionbahrain.com",
  ],
  areaServed: [
    { "@type": "Country", name: "Bahrain" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Kuwait" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bahrain Nights",
  url: "https://www.bahrainnights.com",
  member: [
    {
      "@type": "Organization",
      name: "Animation Bahrain",
      url: "https://www.animationbahrain.com",
    },
    {
      "@type": "Organization",
      name: "Film Production Bahrain",
      url: "https://www.filmproductionbahrain.com",
    },
    {
      "@type": "Organization",
      name: "Events Bahrain",
      url: "https://www.eventsbahrain.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${editorial.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="noise-overlay antialiased">
        <ClientComponents>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientComponents>
      </body>
    </html>
  );
}
