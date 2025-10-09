import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import useFileExplorerStore from "@/stores/FileExplorerStore";

export default function HeaderLeftControls() {
  const {moveToUpperDirectory} = useFileExplorerStore();
  return (
    <div className="flex items-center justify-center">
      <Button variant="ghost" className="px-1! cursor-pointer" title="Back">
        <ChevronLeft className="w-6! h-6!" />
      </Button>
      <Button variant="ghost" className="px-1! cursor-pointer" title="Next">
        <ChevronRight className="w-6! h-6!" />
      </Button>
      <Separator orientation="vertical" className="mx-2 h-6" />
      <Button variant="ghost" className="px-1! cursor-pointer" title="Parent" onClick={(e) => { moveToUpperDirectory() }}>
        <ArrowUp className="w-6! h-6!" />
      </Button>
    </div>
  );
}
