import { Menu, X } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";

export const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Menubar className="bg-opacity dark:text-stone-50 dark:bg-opacity border-none shadow-none">
      <MenubarMenu>
        <MenubarTrigger onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <X /> : <Menu />}
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Add New Employee <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Remove Employee<MenubarShortcut>⌘W</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Dashboard</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share Dashboard</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Export Dashboard <MenubarShortcut>⌘E</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
