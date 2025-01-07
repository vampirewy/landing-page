import { Button } from "@/components/ui/button";
import { CTASection as CTASectionType } from "@/types/dictionary";
import { ArrowRight, MessageSquare } from "lucide-react";

interface CTASectionProps {
  dict: CTASectionType;
}

export function CTASection({ dict }: CTASectionProps) {
  return (
    <div className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">{dict.title}</h2>
          <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300">{dict.description}</p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-to-r from-gray-900 via-gray-800 to-black hover:from-black hover:to-gray-900 text-white shadow-lg">
              {dict.primaryAction}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 border-gray-300 hover:border-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800/50 shadow-lg backdrop-blur-sm">
              {dict.secondaryAction}
              <MessageSquare className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
