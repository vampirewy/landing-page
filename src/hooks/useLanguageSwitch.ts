import { i18n, languages, Locale } from "@/config/i18n";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export function useLanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = useCallback(
    (newLang: string) => {
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
      if (!basePath) basePath = process.env.NEXT_PUBLIC_ROOT_URL || "/";
      // 构建新路径
      const newPath = newLang === i18n.defaultLocale ? basePath : `/${newLang}${basePath}`;
      // 导航到新路径
      router.push(newPath);
      // 强制页面刷新以确保语言切换生效
      router.refresh();
    },
    [router, pathname]
  );

  const getCurrentLanguage = useCallback((currentLang: Locale) => {
    return languages.find((lang) => lang.code === currentLang);
  }, []);

  return {
    handleLanguageChange,
    getCurrentLanguage,
  };
}
