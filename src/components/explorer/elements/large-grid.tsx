import type FileNode from "@/interfaces/FileNode";

export default function FileExplorerLargeGridElement(props: {file: FileNode}) {
    return (
        <div key={props.file.path} className="border rounded">
            <div className="flex items-center justify-center text-5xl p-2">
                {props.file.is_dir ? "📁" : "📄"}
            </div>
            <div className="ml-auto text-sm bg-gray-800 border-t-gray-500 p-2">
                {props.file.name}
            </div>
        </div>
    )
}