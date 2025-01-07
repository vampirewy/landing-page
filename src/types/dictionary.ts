export interface NavigationItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  items?: string[];
}

export interface NavBarComponent {
  title: string;
  navigation: NavigationItem[];
  loginText: string;
  startText: string;
  sheetTitle: string;
  sheetDescription: string;
  chooseLanguage: string;
}

export interface Section {
  title: string;
  content: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  cta: string;
  secondaryCta: string;
}

export interface FeaturesSection {
  title: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}

export interface BenefitsSection {
  title: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}

export interface UseCasesSection {
  title: string;
  description: string;
  cases: Array<{
    title: string;
    description: string;
  }>;
}

export interface CTASection {
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
}

export interface TestimonialsSection {
  title: string;
  subtitle: string;
  items: Array<{
    content: string;
    author: string;
    role: string;
    company: string;
  }>;
}

export interface PricingSection {
  title: string;
  subtitle: string;
  plans: Array<{
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    popular?: boolean;
  }>;
}

export interface FAQSection {
  title: string;
  subtitle: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
}

interface MetaData {
  title: string;
  description: string;
}

export type Dictionary = Record<string, string | Record<string, unknown>> & {
  homePageMetaData: MetaData;
  privacyPageMetaData: MetaData;
  termsPageMetaData: MetaData;
  navBarComponent: {
    title: string;
    navigation: NavigationItem[];
    loginText: string;
    startText: string;
    sheetTitle: string;
    sheetDescription: string;
    chooseLanguage: string;
  };
  footer: {
    about: string;
    companyDescription: string;
    email: string;
    quickLinks: string;
    services: string;
    aboutUs: string;
    contact: string;
    legal: string;
    privacy: string;
    terms: string;
    followUs: string;
    companyName: string;
    rightsReserved: string;
    pricing: string;
    resources: string;
    copyright: string;
  };
  homePage: {
    hero: HeroSection;
    features: FeaturesSection;
    benefits: BenefitsSection;
    useCases: UseCasesSection;
    cta: CTASection;
    testimonials: TestimonialsSection;
    pricing: PricingSection;
    faq: FAQSection;
  };
  privacy: {
    title: string;
    content: Section[];
  };
  terms: {
    title: string;
    content: Section[];
  };
};
