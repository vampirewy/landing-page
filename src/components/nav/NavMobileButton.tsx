import { NavBarComponent } from "@/types/dictionary";
import { Button } from "../ui/button";

export default function NavMobileButton({ dict }: { dict: NavBarComponent }) {
  return (
    <div className="border-t border-gray-100 p-6 space-y-4">
      <Button className="w-full" variant="ghost" size="lg">
        {dict.loginText}
      </Button>
      <Button
        className="w-full bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white shadow-md transition-all duration-200"
        size="lg"
      >
        {dict.startText}
      </Button>
    </div>
  );
}
