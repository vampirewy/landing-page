import { Locale, defaultLocale, locales } from "@/config/i18n";
import { Metadata } from "next";

interface GenerateMetadataParams {
  locale: Locale;
  path?: string;
  title: string;
  description?: string;
}

function generateLanguageAlternates(locale: Locale, path: string, baseUrl: string, canonicalPath: string) {
  return locales.reduce(
    (acc, lang) => ({
      ...acc,
      [lang]: locale === lang ? canonicalPath : `${baseUrl}/${lang}${path}`,
    }),
    {}
  );
}

export function generateCommonMetadata({ locale, path = "", title, description }: GenerateMetadataParams): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const canonicalPath = locale === defaultLocale ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;
  const defaultPath = `${baseUrl}${path}`;

  const languages = generateLanguageAlternates(locale, path, baseUrl, canonicalPath);

  return {
    title,
    ...(description && { description }),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalPath,
      languages: {
        ...languages,
        "x-default": defaultPath,
      },
    },
  };
}
