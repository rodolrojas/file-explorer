import type FileNode from "@/interfaces/FileNode";

export default function FileExplorerSmallGridElement(props: {file: FileNode}) {
    return (
        <div key={props.file.path} className="p-2 border rounded flex items-center">
            {props.file.is_dir ? "📁" : "📄"} {props.file.name}
        </div>
    )
}