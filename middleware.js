import { NextResponse } from "next/server";

export function middleware(req) {
  const isLogged = req.cookies.get("admin_auth")?.value;

  // Normalize path (remove trailing slash)
  const pathname = req.nextUrl.pathname.replace(/\/$/, "");
  const isAdminRoute = pathname.startsWith("/admin");
  console.log("Middleware - isLogged:", isLogged, "Path:", req.nextUrl.pathname);
  console.log("Middleware - isAdminRoute:", isAdminRoute);

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
