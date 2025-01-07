"use client";

import { defaultLocale, locales } from "@/config/i18n";
import enMeta from "@/dictionaries/en/meta.json";
import zhMeta from "@/dictionaries/zh/meta.json";
import { Link } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const translations = {
  en: enMeta,
  zh: zhMeta,
} as const;

type LocaleType = keyof typeof translations;

export default function GlobalNotFound() {
  const pathname = usePathname();
  const locale = (locales.find((loc) => pathname?.startsWith(`/${loc}`)) || defaultLocale) as LocaleType;
  const messages = translations[locale];

  return (
    <html lang={locale} className={inter.className}>
      <body className="bg-white dark:bg-gray-900" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-6">
              <h1 className="text-9xl font-bold text-gray-900 dark:text-white">404</h1>
              <h2 className="text-4xl font-semibold text-gray-700 dark:text-gray-300">{messages.notFoundPage.title}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">{messages.notFoundPage.description}</p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
                >
                  {messages.notFoundPage.backHome}
                </Link>
              </div>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
