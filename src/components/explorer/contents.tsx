import type FileNode from "@/interfaces/FileNode";
import { sortFiles } from "@/lib/utils";
import useFileExplorerStore from "@/stores/FileExplorer/FileExplorerStore";
import { FolderOpen, FolderX, LoaderCircle } from "lucide-react";

interface FileExplorerContentsProps {
    fileList: FileNode[];
}
export default function FileExplorerContents(props: FileExplorerContentsProps) {
    const {currentViewMode, currentSortMethod, currentSortMode, loading, error} = useFileExplorerStore()
    return (
        (
            loading ? (
                <div className="p-4 my-20 text-center text-gray-400">
                    <LoaderCircle className="mx-auto mb-2 h-24 w-24 animate-spin text-gray-500" />
                    Loading...
                </div>
            ) : error ? (
                <div className="p-4 my-20 text-center text-gray-400">
                    <FolderX className="mx-auto mb-2 h-24 w-24 text-red-500" />
                    An error occurred.
                </div>
            ) : (props.fileList.length === 0 ? (
                    <div className="p-4 my-20 text-center text-gray-400">
                        <FolderOpen className="mx-auto mb-2 h-24 w-24 text-gray-500" />
                        This folder is empty.
                    </div>
                ) : (
                    <currentViewMode.layout fileList={sortFiles(props.fileList, currentSortMethod.value, currentSortMode.value)} />
                )
            )
        )
    );
}