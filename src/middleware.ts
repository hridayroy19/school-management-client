import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";

const authRoutes = ["/login"];

const roleBasedPrivateRoutes: Record<string, RegExp[]> = {
  STUDENT: [/^\/dashboard\/student/],
  ADMIN: [/^\/dashboard\/admin/],
  TEACHER: [/^\/dashboard\/teacher/],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userInfo = await getCurrentUser();

  // Not logged in → only login allowed
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(
      new URL(`/login?redirectPath=${pathname}`, request.url)
    );
  }

  // Logged in → check if user has access
  const allowedRoutes = roleBasedPrivateRoutes[userInfo.role];
  if (allowedRoutes && allowedRoutes.some((route) => pathname.match(route))) {
    return NextResponse.next();
  }

  // 
  const defaultRedirect =
    userInfo.role === "ADMIN"
      ? "/dashboard/admin"
      : userInfo.role === "TEACHER"
        ? "/dashboard/teacher"
        : "/dashboard/student";

  return NextResponse.redirect(new URL(defaultRedirect, request.url));
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/dashboard/admin/:path*",
    "/dashboard/student/:path*",
    "/dashboard/teacher/:path*",
  ],
};
