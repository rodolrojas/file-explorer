import useFileExplorerStore from "@/stores/FileExplorer/FileExplorerStore";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export default function HeaderLeftControls() {
  const {
    goBack,
    goForward,
    moveToUpperDirectory,
    hasPreviousRoutes,
    hasNextRoutes,
  } = useFileExplorerStore();
  return (
    <div className="flex items-center justify-center">
      <Button
        variant="ghost"
        className="px-1! cursor-pointer"
        title="Back"
        onClick={(e) => {
          e.preventDefault();
          goBack();
        }}
        disabled={hasPreviousRoutes()}
      >
        <ChevronLeft className="w-6! h-6!" />
      </Button>
      <Button
        variant="ghost"
        className="px-1! cursor-pointer"
        title="Next"
        onClick={(e) => {
          e.preventDefault();
          goForward();
        }}
        disabled={hasNextRoutes()}
      >
        <ChevronRight className="w-6! h-6!" />
      </Button>
      <Separator orientation="vertical" className="mx-2 h-6" />
      <Button
        variant="ghost"
        className="px-1! cursor-pointer"
        title="Parent"
        onClick={(e) => {
          e.preventDefault();
          moveToUpperDirectory();
        }}
      >
        <ArrowUp className="w-6! h-6!" />
      </Button>
    </div>
  );
}
