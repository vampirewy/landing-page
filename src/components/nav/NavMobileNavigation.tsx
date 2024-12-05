import { NavigationItem } from "@/types/dictionary";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function MobileNavigation({ navigation }: { navigation: NavigationItem[] }) {
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
}
