import { NextRequest, NextResponse } from "next/server";
import { getUserFromCookies, protectedRoutes } from "./utils/auth";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Extract the token.
  const user = getUserFromCookies();

  // If no token, redirect to login.
  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // const allowedRoles = protectedRoutes[pathname];

  // // Route is protected && User is not authorized.
  // if (allowedRoles && !allowedRoles.includes(user?.role)) {
  //   return NextResponse.redirect(new URL("/unauthorized", req.url));
  // }

  // Allow access to the requested resource.
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!login|unauthorized|images|favicon.ico|_next/static|_next/image).*)",
  ],
};
