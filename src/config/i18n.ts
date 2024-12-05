interface Language {
  flag: string;
  name: string;
  code: string;
}

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "zh"] as const,
} as const;

export type Locale = (typeof i18n)["locales"][number];

// 添加一个辅助函数来检查是否是默认语言
export function isDefaultLocale(locale: Locale): boolean {
  return locale === i18n.defaultLocale;
}

export const languages: Language[] = [
  { flag: "🇨🇳", name: "中文", code: "zh" },
  { flag: "🇺🇸", name: "English", code: "en" },
];
