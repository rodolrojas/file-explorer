import type FileNode from "@/interfaces/FileNode";
import FileExplorerLargeGridElement from "../elements/large-grid";

export default function FileExplorerLargeGridLayout(props: {fileList: FileNode[]}) {
    return (
        <div className="grid grid-cols-4 gap-4">
            {props.fileList.map((file: FileNode) => (
                <FileExplorerLargeGridElement key={file.path} file={file} />
            ))}
        </div>
    )
}