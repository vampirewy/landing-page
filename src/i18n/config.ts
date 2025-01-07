import { Locale } from "@/config/i18n";
import { loadDictionary } from "@/utils/dictionary";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: await loadDictionary(locale as Locale),
}));
