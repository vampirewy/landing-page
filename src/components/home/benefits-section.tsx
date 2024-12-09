import { HomePage } from "@/types/dictionary";
import { Code, Shield, Zap } from "lucide-react";

interface BenefitsSectionProps {
  dict: HomePage["benefits"];
}

const icons = [Zap, Shield, Code];

export function BenefitsSection({ dict }: BenefitsSectionProps) {
  return (
    <div className="py-12 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">{dict.title}</h2>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-y-8 sm:gap-y-16 lg:grid-cols-3 sm:gap-x-8">
            {dict.items.map((benefit, index) => {
              const Icon = icons[index];
              return (
                <div key={benefit.title} className="relative flex flex-col sm:items-center sm:text-center">
                  <dt className="flex flex-row sm:flex-col items-center text-lg font-semibold leading-7 sm:justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="ml-3 sm:ml-0 sm:mt-4">{benefit.title}</span>
                  </dt>
                  <dd className="mt-2 sm:mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
                    <p>{benefit.description}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
