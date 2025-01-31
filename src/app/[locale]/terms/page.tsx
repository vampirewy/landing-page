import { Locale } from "@/config/i18n";
import { Dictionary, Section } from "@/types/dictionary";
import { generateCommonMetadata } from "@/utils/metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await getMessages()) as Dictionary;

  return generateCommonMetadata({
    locale,
    path: "/terms",
    title: messages.termsPageMetaData.title,
    description: messages.termsPageMetaData.description,
  });
}

export default function TermsPage() {
  const t = useTranslations("terms");
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
      <div className="prose prose-lg dark:prose-invert">
        {t.raw("content").map((section: Section, index: number) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="mb-4">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
