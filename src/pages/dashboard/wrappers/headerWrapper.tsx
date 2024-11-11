import { ModeToggle } from "@/components/ui/mode-toggle";
import { HamburgerMenu } from "./hamburgerMenu";

export const HeaderWrapper = () => {
  return (
    <div className="py-2 px-2 flex flex-row justify-between content-center">
      <div className="flex flex-row gap-2 items-center">
        <HamburgerMenu />
        <text className="text-stone-950 dark:text-stone-200 font-bold text-xl">
          Mock Dashboard<span className="text-green-500">.</span>
        </text>
      </div>
      <ModeToggle />
    </div>
  );
};
