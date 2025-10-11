import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import useFileExplorerStore from "@/stores/FileExplorer/FileExplorerStore";
import { viewModes } from "@/stores/FileExplorer/ViewOptionsSlice";

export default function ViewDropdown() {

  const { currentViewMode, setViewMode } = useFileExplorerStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Change view mode">
          <currentViewMode.icon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>View files as</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {viewModes.map((mode) => (
          <DropdownMenuItem
            key={mode.label}
            onClick={() => { console.log(mode); setViewMode(mode)}}
            className={currentViewMode.label === mode.label ? "font-semibold" : ""}
          >
            <mode.icon className="mr-2 h-4 w-4" />
            {mode.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
