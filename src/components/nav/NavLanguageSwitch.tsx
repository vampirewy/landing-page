import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale } from "@/config/i18n";
import { Check, ChevronDown, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface Language {
  flag: string;
  name: string;
  code: string;
}

export default function NavLanguageSwitch({ currentLang }: { currentLang: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const languages: Language[] = [
    { flag: "🇨🇳", name: "中文", code: "zh" },
    { flag: "🇺🇸", name: "English", code: "en" },
  ];

  const handleLanguageChange = (newLang: string) => {
    // 获取不带语言代码的基础路径
    let basePath = pathname;
    const langCodes = languages.map((lang) => lang.code);
    // 移除现有的语言代码前缀（如果存在）
    for (const code of langCodes) {
      if (basePath.startsWith(`/${code}`)) {
        basePath = basePath.replace(`/${code}`, "");
        break;
      }
    }
    // 如果基础路径为空，设置为根路径
    if (!basePath) basePath = "/";
    // // 构建新路径
    const newPath = newLang === "en" ? basePath : `/${newLang}${basePath}`;
    // // 导航到新路径
    router.push(newPath);
    // // 强制页面刷新以确保语言切换生效
    router.refresh();
  };

  // 获取当前语言的显示信息
  const currentLanguage = languages.find((lang) => lang.code === currentLang);

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
