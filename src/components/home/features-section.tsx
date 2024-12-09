import { FeaturesSection as FeaturesSectionType } from "@/types/dictionary";
import { Brain, FileText, Image, Workflow } from "lucide-react";

interface FeaturesSectionProps {
  dict: FeaturesSectionType;
}

const icons = [Brain, FileText, Image, Workflow];

export function FeaturesSection({ dict }: FeaturesSectionProps) {
  return (
    <div className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">{dict.title}</h2>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-y-8 sm:gap-y-16 lg:max-w-none lg:grid-cols-4 sm:gap-x-8">
            {dict.items.map((feature, index) => {
              const Icon = icons[index];
              return (
                <div key={feature.title} className="relative flex flex-col">
                  <dt className="flex items-center text-lg font-semibold leading-7">
                    <Icon className="h-5 w-5 flex-none text-blue-600 mr-3" aria-hidden="true" />
                    {feature.title}
                  </dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">{feature.description}</p>
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
