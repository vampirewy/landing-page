/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "@/i18n/routing";
import { NavBarComponent } from "@/types/dictionary";
import { ChevronDown } from "lucide-react";

export default function NavDesktop({ dict }: { dict: NavBarComponent }) {
  return (
    <>
      {dict.navigation.map((item: any) => (
        <div key={item.name} className="relative group">
          <Link
            href={item.href}
            className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-gray-50"
          >
            <span>{item.name}</span>
            {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
          </Link>
          {item.hasDropdown && (
            <div className="absolute top-full left-0 w-48 mt-2 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100/50 backdrop-blur-xl">
              <div className="py-2">
                {item.items?.map((subItem: any) => (
                  <a key={subItem} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    {subItem}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
