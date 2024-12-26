// 主页元数据接口
interface HomePageMetaData {
  title: string;
  description: string;
}

// 导航项子项接口
interface NavigationItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  items?: string[];
}

// 导航栏组件接口
interface NavBarComponent {
  title: string;
  navigation: NavigationItem[];
  loginText: string;
  startText: string;
  sheetTitle: string;
  sheetDescription: string;
  chooseLanguage: string;
}

// Hero Section 接口
interface HeroSection {
  title: string;
  subtitle: string;
  cta: string;
  secondaryCta: string;
}

// Features Section 接口
interface FeaturesSection {
  title: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}

// Testimonial 接口
interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
}

// Price 接口
interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

// FAQ 接口
interface FAQ {
  question: string;
  answer: string;
}

// Section 接口
interface Section {
  title: string;
  content: string;
}

// Terms 接口
interface Terms {
  title: string;
  content: Section[];
}

// Privacy 接口
interface Privacy {
  title: string;
  content: Section[];
}

// HomePage 接口
interface HomePage {
  hero: HeroSection;
  features: FeaturesSection;
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  useCases: {
    title: string;
    description: string;
    cases: Array<{
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: PricingPlan[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: FAQ[];
  };
}

// 字典总接口
export interface Dictionary {
  homePageMetaData: HomePageMetaData;
  navBarComponent: NavBarComponent;
  homePage: HomePage;
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
  };
  terms: Terms;
  privacy: Privacy;
}

export type {
  FeaturesSection,
  HeroSection,
  HomePage,
  HomePageMetaData,
  NavBarComponent,
  NavigationItem,
  Privacy,
  Section,
  Terms,
};
