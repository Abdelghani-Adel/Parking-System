import { NextRequest, NextResponse } from "next/server";
import { decodeToken, protectedRoutes, TOKEN_KEY } from "./utils/auth";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Allow public routes.
  if (pathname.startsWith("/login") || pathname === "/unauthorized") {
    return NextResponse.next();
  }

  // Extract the token.
  const token = req.cookies.get(TOKEN_KEY)?.value;

  // If no token, redirect to login.
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Decode the token to get the user role.
  const user = decodeToken(token);

  const allowedRoles = protectedRoutes[pathname];

  // Route is protected && User is not authorized.
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  // Allow access to the requested resource.
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|/favicon.ico|/images).*)"],
};
