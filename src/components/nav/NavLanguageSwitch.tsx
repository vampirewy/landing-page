import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages, Locale } from "@/config/i18n";
import { useLanguageSwitch } from "@/hooks/useLanguageSwitch";
import { Check, ChevronDown, Globe } from "lucide-react";
import { Button } from "../ui/button";

export default function NavLanguageSwitch({ currentLang }: { currentLang: Locale }) {
  const { handleLanguageChange, getCurrentLanguage } = useLanguageSwitch();
  const currentLanguage = getCurrentLanguage(currentLang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-2 rounded-full hover:bg-gray-100">
          <Globe className="w-4 h-4" />
          <span>{currentLanguage?.flag}</span>
          <span>{currentLanguage?.name}</span>
          <ChevronDown className="w-4 h-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex items-center space-x-2 ${currentLang === lang.code ? "bg-gray-50" : ""}`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span>{lang.name}</span>
            {currentLang === lang.code && <Check className="ml-auto h-4 w-4 text-indigo-600" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
