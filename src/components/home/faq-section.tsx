import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HomePage } from "@/types/dictionary";

interface FAQSectionProps {
  dict: HomePage["faq"];
}

export function FAQSection({ dict }: FAQSectionProps) {
  return (
    <div className="py-12 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">{dict.title}</h2>
          <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300">{dict.subtitle}</p>
        </div>
        <div className="mx-auto mt-8 sm:mt-16 lg:mt-20 max-w-3xl">
          <Accordion type="single" defaultValue="item-0" collapsible className="w-full space-y-4">
            {dict.items.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="bg-white dark:bg-gray-800 px-6 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="text-left py-4 text-base sm:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 pb-4 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
