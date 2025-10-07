import type FileNode from "@/interfaces/FileNode";
import { sortFiles } from "@/lib/utils";
import useFileExplorerStore from "@/stores/FileExplorerStore";

interface FileExplorerContentsProps {
    fileList: FileNode[];
}
export default function FileExplorerContents(props: FileExplorerContentsProps) {
    const {currentViewMode, currentSortMethod, currentSortMode} = useFileExplorerStore()
    return (
        <>
            <currentViewMode.layout fileList={sortFiles(props.fileList, currentSortMethod.value, currentSortMode.value)} />
        </>
    );
}