import { Button } from "@/components/ui/button";
import { HeroSection as HeroSectionType } from "@/types/dictionary";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  dict: HeroSectionType;
}

export function HeroSection({ dict }: HeroSectionProps) {
  return (
    <div className="relative">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-gray-100 dark:to-white">
            {dict.title}
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300">
            {dict.subtitle}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Button
              size="lg"
              className="w-full sm:w-auto gap-2 bg-gradient-to-r from-gray-900 via-gray-800 to-black hover:from-black hover:to-gray-900 text-white shadow-lg"
            >
              {dict.cta}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2 border-gray-300 hover:border-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800/50 shadow-lg backdrop-blur-sm"
            >
              {dict.secondaryCta}
              <Play className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      {/* 背景装饰 */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
}
