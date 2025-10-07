import HeaderCenter from "./header-center";
import HeaderLeftControls from "./header-left-controls";
import HeaderRightControls from "./header-right-controls";

export default function AppHeader() {
  return (
    <header className="w-full h-16 flex items-center justify-between p-4 border-gray-700 bg-background dark:border-gray-800 border-b sticky top-0 application-header">
      <HeaderLeftControls />
      <HeaderCenter />
      <HeaderRightControls />
    </header>
  );
}
