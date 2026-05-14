import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ClientComponents } from "@/components/ClientComponents";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

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

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    metadataBase: new URL("https://animationbahrain.com"),
    title: {
      default: "Animation Bahrain | Cinematic Animation Studio Manama",
      template: "%s | Animation Bahrain",
    },
    description:
      "Bahrain's premier cinematic animation studio. We craft 2D, 3D, and motion graphics content for F1 sponsors, telecoms, banks and government across the GCC.",
  };
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} className={`${editorial.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise-overlay antialiased">
        <ClientComponents>
          <Navigation locale={lang} />
          <main className="min-h-screen">{children}</main>
          <Footer locale={lang} />
        </ClientComponents>
      </body>
    </html>
  );
}