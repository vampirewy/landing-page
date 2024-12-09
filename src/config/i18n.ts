interface Language {
  flag: string;
  name: string;
  code: string;
}

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "zh"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const languages: Language[] = [
  { flag: "🇨🇳", name: "中文", code: "zh" },
  { flag: "🇺🇸", name: "English", code: "en" },
];

export const isDefaultLocale = (locale: Locale): boolean => {
  return locale === i18n.defaultLocale;
};

export const getLocalizedPath = (path: string, locale: Locale) => {
  return locale === i18n.defaultLocale ? path : `/${locale}${path}`;
};