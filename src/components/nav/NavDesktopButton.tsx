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
        className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 transition-all duration-200 shadow-md shadow-indigo-200 font-medium"
      >
        {dict.startText}
      </Button>
    </div>
  );
}
