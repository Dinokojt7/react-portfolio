// src/proxy.ts
import { NextResponse } from "next/server";

const validProjectSlugs = [
  "izinto-cross-platform-ecommerce-app",
  "brandclique-dashboard-app",
  "readme-prettier-web-tool",
];

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname } = url;

  // Skip proxy for specific paths
  if (
    pathname === "/" ||
    pathname === "/404" ||
    pathname === "/manifest.json" ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Only check project routes
  if (pathname.startsWith("/project/")) {
    const slug = pathname.replace("/project/", "").split("/")[0].split("?")[0];

    if (!validProjectSlugs.includes(slug)) {
      return NextResponse.rewrite(new URL("/404", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/project/:path*"],
};
