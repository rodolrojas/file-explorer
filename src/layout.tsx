import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import Header from "./components/header/AppHeader";
import useSearchBarStore from "./stores/SearchBarStore";
import Wrapper from "./components/Wrapper";
import { Toaster } from "sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  const closeSearchBar = useSearchBarStore((state) => state.closeSearchBar);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target as HTMLElement).closest(".application-header"))
      closeSearchBar();
  };

  return (
    <>
      <SidebarProvider onClick={handleClick}>
        <AppSidebar />
        <main className="w-full min-h-screen pl-0 transition-all">
          <Header></Header>
          <Wrapper>
            {children}
          </Wrapper>
        </main>
      </SidebarProvider>
      <Toaster />
    </>
  );
}
