import useFileExplorerStore from "@/stores/FileExplorer/FileExplorerStore";
import { useEffect } from "react";
import FileExplorerContents from "./contents";
import { Button } from "../ui/button";
import { Upload } from "lucide-react";


export default function FileExplorer() {
      const {
        fileList, activePath,
          getDirectoryContents, history
      } = useFileExplorerStore();
      useEffect(() => {
        getDirectoryContents();
      }, [getDirectoryContents, activePath]);
      useEffect(() => {
        console.log(history)
      }, [history])
    return (
        <>
            <div className="flex items-center justify-between p-4 sticky top-16 bg-background z-10 border-b border-gray-700 mb-4">
              <div className="text-2xl font-bold">
                  {activePath}
              </div>
              <Button variant={"outline"} className="cursor-pointer" onClick={() => {}}>
                <Upload className="mr-1 h-4 w-4" />
                Upload
              </Button>
            </div>
            <FileExplorerContents fileList={fileList} />
        </>
    );
}