import type FileNode from "@/interfaces/FileNode";
import FileExplorerSmallGridElement from "../elements/small-grid";

export default function FileExplorerSmallGridLayout(props: {fileList: FileNode[]}) {
    return (
        <div className="grid grid-cols-4 gap-4">
            {props.fileList.map((file: FileNode) => (
                <FileExplorerSmallGridElement key={file.path} file={file} />
            ))}
        </div>
    )
}