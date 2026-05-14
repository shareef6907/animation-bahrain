import { locales, defaultLocale } from "@/i18n/config";

export function middleware(request: Request) {
  const pathname = new URL(request.url).pathname;
  // Skip files and api routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files
  ) {
    return;
  }
  // Already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;
  // Redirect root to default locale
  if (pathname === "/") {
    return Response.redirect(new URL(`/${defaultLocale}`, request.url), 302);
  }
  // Prefix remaining paths with default locale
  return Response.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url),
    302
  );
}

export const config = {
  matcher: ["/((?!_next/api|.*\\..*).*)"],
};