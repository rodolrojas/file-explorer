import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuLabel,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ListChevronsDownUp } from "lucide-react";
import { DropdownMenuRadioGroup } from "@radix-ui/react-dropdown-menu";
import useFileExplorerStore, { sortMethods, sortModes } from "@/stores/FileExplorerStore";

export default function SortDropdown() {
  
  const {currentSortMethod, currentSortMode, setSortMethod, setSortMode} = useFileExplorerStore();
  const [findAndSetSortMethod, findAndSetSortMode] = [
    (value: string) => {
      const method = sortMethods.find((method) => method.value === value);
      if (method) {
          setSortMethod(method);
      }
  },
    (value: string) => {
      const mode = sortModes.find((mode) => mode.value === value);
      if (mode) {
          setSortMode(mode);
      }
  }
]
  return (
    <div className="ml-2 flex items-center">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Change sort mode">
                    <ListChevronsDownUp />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={currentSortMethod.value} onValueChange={(value) => findAndSetSortMethod(value)}>
                    {sortMethods.map((mode) => (
                        <DropdownMenuRadioItem
                            key={mode.value}
                            value={mode.value}
                            onClick={() => findAndSetSortMethod(mode.value)}
                        >
                            {mode.label}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={currentSortMode.value} onValueChange={(value) => findAndSetSortMode(value)}>
                    {sortModes.map((mode) => (
                        <DropdownMenuRadioItem
                            key={mode.value}
                            value={mode.value}
                            onClick={() => findAndSetSortMode(mode.value)}
                        >
                            {mode.label}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  );
}
