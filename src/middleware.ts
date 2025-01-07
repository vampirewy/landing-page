import { defaultLocale, i18n, locales } from "@/config/i18n";
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(i18n);

function getPathWithoutLocale(pathname: string, locale: string): string {
  return pathname.substring(`/${locale}`.length);
}

function hasLocalePrefix(pathname: string): boolean {
  return locales.some((locale) => pathname.startsWith(`/${locale}/`));
}

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (hasLocalePrefix(pathname)) {
    const locale = pathname.split("/")[1];

    if (locale === defaultLocale) {
      const url = request.nextUrl.clone();
      url.pathname = getPathWithoutLocale(pathname, locale);
      return Response.redirect(url);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/"],
};
