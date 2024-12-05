import { Button } from "../ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NavDesktopButton({ dict }: { dict: any }) {
  return (
    <div className="hidden lg:flex lg:items-center lg:space-x-4">
      <Button variant="ghost" size="lg" className="font-medium">
        {dict.navBarComponent.loginText}
      </Button>
      <Button
        size="lg"
        className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 transition-all duration-200 shadow-md shadow-indigo-200 font-medium"
      >
        {dict.navBarComponent.startText}
      </Button>
    </div>
  );
}
