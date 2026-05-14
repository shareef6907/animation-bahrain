"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { localeNames } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] as Locale;
  const otherLocale: Locale = currentLocale === "en" ? "ar" : "en";
  const otherLocaleName = localeNames[otherLocale];

  // Replace the locale prefix in the current path
  const otherPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);

  return (
    <Link
      href={otherPath}
      className="font-mono text-xs text-fawn-muted hover:text-amber transition-colors tracking-wider uppercase"
      aria-label={`Switch to ${otherLocaleName}`}
    >
      {otherLocaleName}
    </Link>
  );
}