import { NavBarComponent } from "@/types/dictionary";
import { Button } from "../ui/button";

export default function NavMobileButton({ dict }: { dict: NavBarComponent }) {
  return (
    <div className="border-t border-gray-100 p-6 space-y-4">
      <Button className="w-full" variant="ghost" size="lg">
        {dict.loginText}
      </Button>
      <Button
        className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 shadow-md shadow-indigo-200"
        size="lg"
      >
        {dict.startText}
      </Button>
    </div>
  );
}
