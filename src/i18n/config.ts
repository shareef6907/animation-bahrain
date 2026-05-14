export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export const localeConfigs: Record<
  Locale,
  { dir: "ltr" | "rtl";lang: string; name: string }
> = {
  en: { dir: "ltr", lang: "en-US", name: "English" },
  ar: { dir: "rtl", lang: "ar-BH", name: "العربية" },
};