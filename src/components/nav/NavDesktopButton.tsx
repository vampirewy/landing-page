import { Button } from "../ui/button";

import { NavBarComponent } from "@/types/dictionary";

export default function NavDesktopButton({ dict }: { dict: NavBarComponent }) {
  return (
    <div className="hidden lg:flex lg:items-center lg:space-x-4">
      <Button variant="ghost" size="lg" className="font-medium">
        {dict.loginText}
      </Button>
      <Button
        size="lg"
        className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white shadow-md transition-all duration-200 font-medium"
      >
        {dict.startText}
      </Button>
    </div>
  );
}
