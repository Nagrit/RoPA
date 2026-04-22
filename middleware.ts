import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;
  const userRole = request.cookies.get("user-role")?.value; 
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === "/login";

  // 1. ❌ Not logged in → force login
  if (!token && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isLoginPage) {
    const dashboard = userRole === "ADMIN" ? "/dashboard" : "/dashboard";
    return NextResponse.redirect(new URL(dashboard, request.url));
  }

  // 3. 🛡️ Role Protection (Prevent User from hitting /admin)
  if (pathname.startsWith("/admin") && userRole !== "ADMIN") {
    // Redirect non-admins away from admin pages
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};