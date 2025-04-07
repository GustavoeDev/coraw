// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export const TOKEN_KEY = "token";

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get(TOKEN_KEY)?.value;

  const protectedRoutes = [
    "/articles",
    "/new",
    "/admin/dashboard",
    "/admin/article/edit",
  ];

  const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);

  if (isProtectedRoute && !token) {
    const url = new URL("/signin", request.url);
    url.searchParams.set("unauthorized", "true");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/articles", "/new", "/admin/:path*"],
};
