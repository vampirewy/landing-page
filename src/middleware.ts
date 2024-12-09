import { i18n, isDefaultLocale, Locale } from "@/config/i18n";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 跳过静态资源和API路由
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes("/images/") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 检查路径是否已包含语言代码
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 如果已经包含语言代码，不做处理
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 从cookie或请求头中获取首选语言
  const locale = request.cookies.get("NEXT_LOCALE")?.value || i18n.defaultLocale;

  // 如果是根路径且语言是英文，重定向到 /en
  if (pathname === process.env.NEXT_PUBLIC_ROOT_URL && isDefaultLocale(locale as Locale)) {
    return NextResponse.rewrite(new URL(`/${locale}`, request.url));
  }

  // 如果是其他路径且语言是英文，重写URL（不改变浏览器地址）
  if (isDefaultLocale(locale as Locale)) {
    return NextResponse.rewrite(new URL(`/${locale}${pathname}`, request.url));
  }

  // 对于其他语言，重定向到带有语言代码的路径
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
