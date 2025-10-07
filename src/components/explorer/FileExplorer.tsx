import useFileExplorerStore from "@/stores/FileExplorerStore";
import { useEffect } from "react";
import FileExplorerContents from "./contents";


export default function FileExplorer() {
      const {
        fileList, activePath,
          getDirectoryContents,
      } = useFileExplorerStore();
      useEffect(() => {
        getDirectoryContents();
      }, [getDirectoryContents]);
    return (
        <>
            <div className="p-4 text-2xl font-bold">
                {activePath}
            </div>
            <FileExplorerContents fileList={fileList} />
        </>
    );
}