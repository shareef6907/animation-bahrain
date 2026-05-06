import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/industries/f1-bahrain-grand-prix") {
    return NextResponse.redirect(
      new URL("/industries/formula-1", request.url),
      301
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/industries/f1-bahrain-grand-prix"],
};
