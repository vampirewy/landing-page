"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Locale } from "@/config/i18n";
import { ChevronDown, Menu, Stars, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavDesktop from "./NavDesktop";
import NavDesktopButton from "./NavDesktopButton";
import NavLanguageSwitch from "./NavLanguageSwitch";

// 类型定义
type Language = "zh" | "en";
type LanguageConfig = {
  [key in Language]: {
    flag: string;
    name: string;
  };
};

type NavigationItem = {
  name: string;
  href: string;
  hasDropdown?: boolean;
  items?: string[];
};

const MobileNavigation = ({ navigation, currentLang }: { navigation: NavigationItem[]; currentLang: Language }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemName: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemName)) {
      newOpenItems.delete(itemName);
    } else {
      newOpenItems.add(itemName);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <nav className="flex flex-col space-y-2">
      {navigation.map((item) => (
        <div key={item.name}>
          {item.hasDropdown ? (
            <button
              onClick={() => toggleItem(item.name)}
              className="w-full flex items-center justify-between px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl"
            >
              {item.name}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${openItems.has(item.name) ? "rotate-180" : ""}`}
              />
            </button>
          ) : (
            <a
              href={item.href}
              className="flex items-center justify-between px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl"
            >
              {item.name}
            </a>
          )}

          {item.hasDropdown && (
            <div
              className={`ml-6 mt-2 space-y-1 overflow-hidden transition-all duration-200 ${
                openItems.has(item.name) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.items?.map((subItem) => (
                <a key={subItem} href="#" className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                  {subItem}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default function Navbar({ lang, dict }: { lang: Locale; dict: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"zh" | "en">("zh");

  const languages: LanguageConfig = {
    zh: { flag: "🇨🇳", name: "中文" },
    en: { flag: "🇺🇸", name: "English" },
  };

  // 导航项配置
  const navigation = [
    {
      name: currentLang === "zh" ? "产品" : "Products",
      href: "#",
      hasDropdown: true,
      items:
        currentLang === "zh"
          ? ["AI 助手", "文档处理", "图像生成", "API 接口"]
          : ["AI Assistant", "Doc Processing", "Image Generation", "API Services"],
    },
    {
      name: currentLang === "zh" ? "解决方案" : "Solutions",
      href: "#solutions",
      hasDropdown: true,
      items: currentLang === "zh" ? ["企业服务", "个人使用", "开发者"] : ["Enterprise", "Personal", "Developers"],
    },
    {
      name: currentLang === "zh" ? "定价" : "Pricing",
      href: "#pricing",
    },
    {
      name: currentLang === "zh" ? "资源" : "Resources",
      href: "#resources",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-gray-100/50 shadow-lg shadow-gray-100/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex h-20 lg:h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={"/"} className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center">
                <Stars className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {dict.navBarComponent.title}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavDesktop dict={dict}></NavDesktop>

            {/* Language Switcher - Desktop */}
            <NavLanguageSwitch currentLang={lang}></NavLanguageSwitch>
          </div>

          {/* Desktop Auth Buttons */}
          <NavDesktopButton dict={dict}></NavDesktopButton>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 backdrop-blur-xl bg-white/95">
                <SheetHeader>
                  <SheetTitle>{currentLang === "zh" ? "导航菜单" : "Navigation"}</SheetTitle>
                  <SheetDescription>
                    {currentLang === "zh"
                      ? "浏览我们的产品、解决方案和服务"
                      : "Browse our products, solutions, and services"}
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto py-6">
                    {/* Language Switcher - Mobile */}
                    <div className="px-6 mb-6">
                      <div className="text-sm font-medium text-gray-500 mb-2">
                        {currentLang === "zh" ? "选择语言" : "Choose Language"}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {(Object.entries(languages) as [Language, { flag: string; name: string }][]).map(
                          ([code, lang]) => (
                            <Button
                              key={code}
                              variant={currentLang === code ? "default" : "outline"}
                              className="w-full justify-start space-x-2"
                              onClick={() => setCurrentLang(code)}
                            >
                              <span className="text-lg">{lang.flag}</span>
                              <span>{lang.name}</span>
                            </Button>
                          )
                        )}
                      </div>
                    </div>

                    {/* Mobile Navigation Items */}
                    <MobileNavigation navigation={navigation} currentLang={currentLang} />

                    {/* Mobile Auth Buttons */}
                    <div className="border-t border-gray-100 p-6 space-y-4">
                      <Button className="w-full" variant="ghost" size="lg">
                        {currentLang === "zh" ? "登录" : "Login"}
                      </Button>
                      <Button
                        className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 shadow-md shadow-indigo-200"
                        size="lg"
                      >
                        {currentLang === "zh" ? "免费使用" : "Get Started"}
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
