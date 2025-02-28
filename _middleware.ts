import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode("8werKVBCpy1IbzUo1DcYb8pFRBIrIekT");

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Exclude the sign-in page and Next.js static assets
  if (pathname.startsWith("/auth/sign-in") || pathname.startsWith("/_next/")) {
    return NextResponse.next();
  }

  // Get the token from cookies
  const token = req.cookies.get("token")?.value;

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  // Verify the token for all other routes
  try {
    await jwtVerify(token, SECRET_KEY);
  } catch (error) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images).*)"],
};
