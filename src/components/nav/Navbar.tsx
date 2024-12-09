"use client";
import { getLocalizedPath, Locale } from "@/config/i18n";
import { NavBarComponent } from "@/types/dictionary";
import { Stars } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavDesktop from "./NavDesktop";
import NavDesktopButton from "./NavDesktopButton";
import NavLanguageSwitch from "./NavLanguageSwitch";
import NavMobile from "./NavMobile";

export default function Navbar({ lang, dict }: { lang: Locale; dict: NavBarComponent }) {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={getLocalizedPath("/", lang)} className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center">
                <Stars className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {dict.title}
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
          <NavMobile dict={dict} currentLang={lang}></NavMobile>
        </div>
      </nav>
    </header>
  );
}
