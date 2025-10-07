import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Logo from "../Logo";
import ShortcutsMenu from "./menu/Shortcuts";
import BookmarksMenu from "./menu/Bookmarks";
import AppSidebarFooter from "./AppSidebarFooter";
import { Separator } from "../ui/separator";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <ShortcutsMenu />
        <Separator />
        <BookmarksMenu />
      </SidebarContent>
      <AppSidebarFooter />
    </Sidebar>
  );
}
