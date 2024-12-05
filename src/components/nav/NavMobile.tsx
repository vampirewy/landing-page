import { Locale } from "@/config/i18n";
import { NavBarComponent } from "@/types/dictionary";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import NavMobileButton from "./NavMobileButton";
import NavMobileLanguageSwitch from "./NavMobileLanguageSwtich";
import MobileNavigation from "./NavMobileNavigation";

export default function NavMobile({ dict, currentLang }: { dict: NavBarComponent; currentLang: Locale }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:w-96 backdrop-blur-xl bg-white/95">
          <SheetHeader>
            <SheetTitle>{dict.sheetTitle}</SheetTitle>
            <SheetDescription>{dict.sheetDescription}</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-6">
              <NavMobileLanguageSwitch dict={dict} currentLang={currentLang} />

              <MobileNavigation navigation={dict.navigation} />

              <NavMobileButton dict={dict} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
