import { Locale } from "@/config/i18n";

export async function loadDictionary(locale: Locale) {
  const meta = await import(`@/dictionaries/${locale}/meta.json`);
  const nav = await import(`@/dictionaries/${locale}/nav.json`);
  const terms = await import(`@/dictionaries/${locale}/terms.json`);
  const privacy = await import(`@/dictionaries/${locale}/privacy.json`);
  const footer = await import(`@/dictionaries/${locale}/footer.json`);
  const home = await import(`@/dictionaries/${locale}/home.json`);
  const notFound = await import(`@/dictionaries/${locale}/notFound.json`);

  return {
    ...meta.default,
    ...nav.default,
    ...terms.default,
    ...privacy.default,
    ...footer.default,
    ...home.default,
    ...notFound.default,
  };
}
