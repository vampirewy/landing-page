import { BenefitsSection } from "@/components/home/benefits-section";
import { CTASection } from "@/components/home/cta-section";
import { FAQSection } from "@/components/home/faq-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { PricingSection } from "@/components/home/pricing-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { UseCasesSection } from "@/components/home/use-cases-section";
import { Locale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <div className="relative mt-14 sm:mt-16">
      <HeroSection dict={dict.homePage.hero} />
      <FeaturesSection dict={dict.homePage.features} />
      <BenefitsSection dict={dict.homePage.benefits} />
      <UseCasesSection dict={dict.homePage.useCases} />
      <TestimonialsSection dict={dict.homePage.testimonials} />
      <PricingSection dict={dict.homePage.pricing} />
      <FAQSection dict={dict.homePage.faq} />
      <CTASection dict={dict.homePage.cta} />
    </div>
  );
}
