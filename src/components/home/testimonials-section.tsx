import { HomePage } from "@/types/dictionary";
import { QuoteIcon } from "lucide-react";

interface TestimonialsSectionProps {
  dict: HomePage["testimonials"];
}

export function TestimonialsSection({ dict }: TestimonialsSectionProps) {
  return (
    <div className="py-12 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">{dict.title}</h2>
          <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300">{dict.subtitle}</p>
        </div>
        <div className="mx-auto mt-8 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {dict.items.map((testimonial) => (
              <div
                key={testimonial.author}
                className="flex flex-col justify-between rounded-2xl bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700"
              >
                <div>
                  <QuoteIcon className="h-8 w-8 text-gray-400 mb-4" aria-hidden="true" />
                  <p className="text-base leading-7 text-gray-900 dark:text-gray-100">{testimonial.content}</p>
                </div>
                <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
