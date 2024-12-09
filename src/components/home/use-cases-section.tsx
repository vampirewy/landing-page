import { HomePage } from "@/types/dictionary";
import { Building2, Code2, Palette } from "lucide-react";

interface UseCasesSectionProps {
  dict: HomePage["useCases"];
}

const icons = [Building2, Code2, Palette];

export function UseCasesSection({ dict }: UseCasesSectionProps) {
  return (
    <div className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">{dict.title}</h2>
          <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">
            {dict.description}
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {dict.cases.map((useCase, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={useCase.title}
                  className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700"
                >
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="ml-3 text-lg font-semibold leading-7">{useCase.title}</h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
                    {useCase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 