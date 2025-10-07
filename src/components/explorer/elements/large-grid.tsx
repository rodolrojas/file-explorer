import { Button } from "@/components/ui/button";
import type FileNode from "@/interfaces/FileNode";
import { EllipsisVertical } from "lucide-react";

export default function FileExplorerLargeGridElement(props: {file: FileNode}) {
    return (
        <div key={props.file.path} className="border rounded">
            <div className="flex items-center justify-center text-5xl p-2 min-h-32 relative">
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 p-1 cursor-pointer">
                    <EllipsisVertical className="h-4 w-4 text-gray-500" />
                </Button>
                {props.file.is_dir ? "📁" : "📄"}
            </div>
            <div className="ml-auto text-sm bg-gray-800 border-t-gray-500 p-2">
                {props.file.name}
            </div>
        </div>
    )
}