import type { Locale } from "@/config/i18n";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: { [key: string]: () => Promise<any> } = {};

// 动态引入所有语言包
const requireContext = require.context("@/dictionaries", false, /\.json$/);

requireContext.keys().forEach((key: string) => {
  const locale = key.match(/\/(\w+)\.json$/)?.[1];
  if (locale) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dictionaries[locale] = () => requireContext(key);
  }
});

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
