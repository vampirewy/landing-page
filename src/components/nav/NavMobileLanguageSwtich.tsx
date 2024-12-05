import { languages, Locale } from "@/config/i18n";
import { useLanguageSwitch } from "@/hooks/useLanguageSwitch";
import { NavBarComponent } from "@/types/dictionary";
import { Button } from "../ui/button";

export default function NavMobileLanguageSwitch({ dict, currentLang }: { dict: NavBarComponent; currentLang: Locale }) {
  const { handleLanguageChange, getCurrentLanguage } = useLanguageSwitch();
  const currentLanguage = getCurrentLanguage(currentLang);
  return (
    <div className="px-6 mb-6">
      <div className="text-sm font-medium text-gray-500 mb-2">{dict.chooseLanguage}</div>
      <div className="grid grid-cols-2 gap-2">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={currentLanguage?.code === lang.code ? "default" : "outline"}
            className="w-full justify-start space-x-2"
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
