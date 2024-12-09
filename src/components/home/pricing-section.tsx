import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HomePage } from "@/types/dictionary";
import { Check } from "lucide-react";

interface PricingSectionProps {
  dict: HomePage["pricing"];
}

export function PricingSection({ dict }: PricingSectionProps) {
  return (
    <div className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">{dict.title}</h2>
          <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300">{dict.subtitle}</p>
        </div>

        <div className="mx-auto mt-8 sm:mt-16 lg:mt-20 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-8">
          {dict.plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl p-6 sm:p-8 shadow-sm",
                plan.popular
                  ? "bg-gray-900 text-white ring-1 ring-gray-900 dark:bg-gray-800 dark:ring-gray-700"
                  : "bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6 rounded-full bg-gray-700 px-3 py-1 text-xs font-semibold text-white">
                  Popular
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-lg font-semibold leading-8">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span
                      className={cn(
                        "text-sm font-semibold leading-6 ml-1",
                        plan.popular ? "text-gray-300" : "text-gray-600 dark:text-gray-400"
                      )}
                    >
                      /mo
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    "mt-6 text-base leading-7",
                    plan.popular ? "text-gray-300" : "text-gray-600 dark:text-gray-400"
                  )}
                >
                  {plan.description}
                </p>

                <ul role="list" className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check
                        className={cn(
                          "h-6 w-5 flex-none",
                          plan.popular ? "text-gray-300" : "text-gray-900 dark:text-gray-300"
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={cn(
                          "text-sm leading-6",
                          plan.popular ? "text-gray-300" : "text-gray-600 dark:text-gray-400"
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className={cn(
                  "mt-8 w-full shadow-md",
                  plan.popular ? "text-white bg-gradient-to-r from-violet-600 to-indigo-600" : ""
                )}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
