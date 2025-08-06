import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith("/instructor")) {
    const token = request.cookies.get("XSRF-TOKEN")?.value;

    // Vérifie l'existence du cookie. Tu peux aussi décoder un JWT ici si tu en utilises un
    if (!token) {
      return NextResponse.redirect(new URL("/connexion", request.url));
    }

    // Optionnel : appel vers /api/user si tu veux vérifier le rôle dynamiquement
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/instructor/:path*"],
};
