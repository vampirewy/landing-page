import { Locale, getLocalizedPath } from "@/config/i18n";
import { Dictionary } from "@/types/dictionary";
import { GithubIcon, LinkedinIcon, MessagesSquareIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary["footer"] }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://twitter.com/company",
      icon: TwitterIcon,
      label: "Twitter",
    },
    {
      href: "https://github.com/company",
      icon: GithubIcon,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/company/yourcompany",
      icon: LinkedinIcon,
      label: "LinkedIn",
    },
    {
      href: "https://discord.gg/company",
      icon: MessagesSquareIcon,
      label: "Discord",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-16">
          {/* Quick Links Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">{dict.quickLinks}</h2>
            <nav className="flex flex-col space-y-3">
              <Link
                href={getLocalizedPath("/services", lang)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {dict.services}
              </Link>
              <Link
                href={getLocalizedPath("/about", lang)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {dict.aboutUs}
              </Link>
            </nav>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">{dict.legal}</h2>
            <nav className="flex flex-col space-y-3">
              <Link
                href={getLocalizedPath("/privacy", lang)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {dict.privacy}
              </Link>
              <Link
                href={getLocalizedPath("/terms", lang)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {dict.terms}
              </Link>
            </nav>
          </div>

          {/* Company Info & Contact Section */}
          <div className="space-y-8 sm:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white">{dict.about}</h2>
              <p className="text-gray-400 leading-relaxed max-w-md sm:max-w-sm lg:max-w-none">
                {dict.companyDescription}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white">{dict.contact}</h2>
              <nav className="flex flex-col space-y-3">
                <a href={`mailto:${dict.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {dict.email}
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <p className="text-center text-gray-500 text-sm sm:text-base">
            © {currentYear} {dict.companyName}. {dict.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
