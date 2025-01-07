interface Language {
  flag: string;
  name: string;
  code: string;
}

export const locales = ["en", "zh"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];

export const languages: Language[] = [
  { flag: "🇨🇳", name: "中文", code: "zh" },
  { flag: "🇺🇸", name: "English", code: "en" },
];

export const i18n = {
  locales,
  defaultLocale,
  localePrefix: "as-needed" as const,
  localeDetection: false,
};
