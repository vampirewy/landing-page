import { Locale, defaultLocale } from "@/config/i18n";
import { Metadata } from "next";

interface GenerateMetadataParams {
  locale: Locale;
  path?: string;
  title: string;
  description?: string;
}

export function generateCommonMetadata({ locale, path = "", title, description }: GenerateMetadataParams): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonicalPath = locale === defaultLocale ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

  return {
    title,
    ...(description && { description }),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalPath,
    },
  };
}
