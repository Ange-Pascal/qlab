import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protège seulement certaines routes
  if (pathname.startsWith("/instructor")) {
    const xsrfToken = request.cookies.get("XSRF-TOKEN");

    if (!xsrfToken) {
      return NextResponse.redirect(new URL("/connexion", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/instructor/:path*"], // Active uniquement sur cette route
};
