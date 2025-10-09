import type FileNode from "@/interfaces/FileNode";
import { sortFiles } from "@/lib/utils";
import useFileExplorerStore from "@/stores/FileExplorerStore";
import { FolderOpen } from "lucide-react";

interface FileExplorerContentsProps {
    fileList: FileNode[];
}
export default function FileExplorerContents(props: FileExplorerContentsProps) {
    const {currentViewMode, currentSortMethod, currentSortMode} = useFileExplorerStore()
    return (
        <>
            {
                props.fileList.length === 0 ? (
                    <div className="p-4 text-center text-gray-400">
                        <FolderOpen className="mx-auto mb-2 h-24 w-24 text-gray-500" />
                        This folder is empty.
                    </div>
                ) : (
                    <currentViewMode.layout fileList={sortFiles(props.fileList, currentSortMethod.value, currentSortMode.value)} />
                )
            }
        </>
    );
}