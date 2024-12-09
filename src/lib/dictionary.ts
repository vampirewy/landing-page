import type { Locale } from "@/config/i18n";
import { glob } from 'glob';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: { [key: string]: () => Promise<any> } = {};

const dictionaryFiles = glob.sync('./src/dictionaries/*.json');

dictionaryFiles.forEach((file) => {
  const locale = path.basename(file, '.json');
  dictionaries[locale] = () => import(`@/dictionaries/${locale}.json`).then(module => module.default);
});

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
