import { NextResponse } from "next/server";

export function middleware(req) {
  const isLogged = req.cookies.get("admin_auth")?.value;

  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  if (!isLogged && isAdminRoute && !req.nextUrl.pathname.includes("/admin/login")) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};
