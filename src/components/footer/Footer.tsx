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

  const legalLinks = [
    {
      href: getLocalizedPath("/terms", lang),
      label: dict.terms,
    },
    {
      href: getLocalizedPath("/privacy", lang),
      label: dict.privacy,
    },
  ];

  return (
    <footer className="mt-32 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {currentYear} {dict.companyName}. {dict.rightsReserved}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
