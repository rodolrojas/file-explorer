import type ISidebarMenuItem from "@/interfaces/SidebarMenuItem";
import {
  Download,
  FileText,
  Home,
  Image,
  LayoutDashboard,
  Music2,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";

const SidebarShortcutMenuItems: ISidebarMenuItem[] = [
  {
    label: "Home",
    url: "/",
    icon: <Home size={16} />,
  },
  {
    label: "Desktop",
    url: "/desktop",
    icon: <LayoutDashboard size={16} />,
  },
  {
    label: "Documents",
    url: "/documents",
    icon: <FileText size={16} />,
  },
  {
    label: "Pictures",
    url: "/pictures",
    icon: <Image size={16} />,
  },
  {
    label: "Music",
    url: "/music",
    icon: <Music2 size={16} />,
  },
  {
    label: "Downloads",
    url: "/downloads",
    icon: <Download size={16} />,
  },
];

const ShortcutsMenu = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Shortcuts</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {SidebarShortcutMenuItems.map((item) => (
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

export default ShortcutsMenu;
