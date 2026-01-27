import { NextResponse } from "next/server";

export function proxy(req) {
  const isLogged = req.cookies.get("admin_auth")?.value;

  // Normalize path (remove trailing slash)
  const pathname = req.nextUrl.pathname.replace(/\/$/, "");
  const isAdminRoute = pathname.startsWith("/admin");
  console.log("Proxy - isLogged:", isLogged, "Path:", req.nextUrl.pathname);
  console.log("Proxy - isAdminRoute:", isAdminRoute);
  // Debug: log raw Cookie header to see what the browser sends to the server
  try {
    const rawCookies = req.headers.get("cookie");
    console.log("Proxy - raw Cookie header:", rawCookies);
  } catch (e) {
    console.log("Proxy - could not read raw Cookie header:", e?.message || e);
  }

  // Allow unauthenticated access to these admin public routes
  const publicAdminPaths = ["/admin/login", "/admin/register"];

  if (isAdminRoute && !isLogged && !publicAdminPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};
