"use client";

import { BenefitsSection } from "@/components/home/benefits-section";
import { CTASection } from "@/components/home/cta-section";
import { FAQSection } from "@/components/home/faq-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { PricingSection } from "@/components/home/pricing-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { UseCasesSection } from "@/components/home/use-cases-section";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homePage");

  const heroDict = {
    title: t("hero.title"),
    subtitle: t("hero.subtitle"),
    cta: t("hero.cta"),
    secondaryCta: t("hero.secondaryCta"),
  };

  const featuresDict = {
    title: t("features.title"),
    items: t.raw("features.items"),
  };

  const benefitsDict = {
    title: t("benefits.title"),
    items: t.raw("benefits.items"),
  };

  const useCasesDict = {
    title: t("useCases.title"),
    description: t("useCases.description"),
    cases: t.raw("useCases.cases"),
  };

  const testimonialsDict = {
    title: t("testimonials.title"),
    subtitle: t("testimonials.subtitle"),
    items: t.raw("testimonials.items"),
  };

  const pricingDict = {
    title: t("pricing.title"),
    subtitle: t("pricing.subtitle"),
    plans: t.raw("pricing.plans"),
  };

  const faqDict = {
    title: t("faq.title"),
    subtitle: t("faq.subtitle"),
    items: t.raw("faq.items"),
  };

  const ctaDict = {
    title: t("cta.title"),
    description: t("cta.description"),
    primaryAction: t("cta.primaryAction"),
    secondaryAction: t("cta.secondaryAction"),
  };

  return (
    <div className="relative mt-14 sm:mt-16">
      <HeroSection dict={heroDict} />
      <FeaturesSection dict={featuresDict} />
      <BenefitsSection dict={benefitsDict} />
      <UseCasesSection dict={useCasesDict} />
      <TestimonialsSection dict={testimonialsDict} />
      <PricingSection dict={pricingDict} />
      <FAQSection dict={faqDict} />
      <CTASection dict={ctaDict} />
    </div>
  );
}
