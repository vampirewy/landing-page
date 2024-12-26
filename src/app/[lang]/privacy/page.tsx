import { Locale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { Section } from "@/types/dictionary";

export default async function PrivacyPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">{dict.privacy.title}</h1>
      <div className="prose prose-lg dark:prose-invert">
        {dict.privacy.content.map((section: Section, index: number) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="mb-4">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
