import { Locale, defaultLocale } from "@/config/i18n";
import { loadDictionary } from "@/utils/dictionary";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = ((await requestLocale) || defaultLocale) as Locale;
  return {
    locale,
    messages: await loadDictionary(locale),
  };
});
