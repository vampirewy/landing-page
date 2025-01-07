import { defaultLocale } from "@/config/i18n";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || defaultLocale;
  return {
    locale,
    messages: (await import(`@/dictionaries/${locale}.json`)).default,
  };
});
