import type ISidebarMenuItem from "@/interfaces/SidebarMenuItem";
import { Folder } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";

const SidebarBookmarksMenuItems: ISidebarMenuItem[] = [
  {
    label: "debian",
    url: "/downloads/debian",
    icon: <Folder size={16} />,
  },
  {
    label: "ubuntu",
    url: "/downloads/ubuntu",
    icon: <Folder size={16} />,
  },
  {
    label: "Facturas",
    url: "/documents/facturas",
    icon: <Folder size={16} />,
  },
  {
    label: "memazos",
    url: "/pictures/memazos",
    icon: <Folder size={16} />,
  },
];

const BookmarksMenu = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Bookmarks</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {SidebarBookmarksMenuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton asChild>
                <a href={item.url} className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default BookmarksMenu;
