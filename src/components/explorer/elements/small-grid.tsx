import type FileNode from "@/interfaces/FileNode";
import FileItemIcon from "../common/file-icon";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";
import FileItemActionsProvider from "../providers/FileItemActionsProvider";
import { loadFileItemClasses } from "../common/common-classes";

export default function FileExplorerSmallGridElement(props: {file: FileNode}) {
    return (
        <FileItemActionsProvider file={props.file}>
            <div key={props.file.path} className={loadFileItemClasses("p-2 border rounded flex items-center justify-between")}>
                <div className="flex items-center text-sm">
                    <FileItemIcon file={props.file} size={18} className="ml-2 mr-3" />
                    {props.file.name}
                </div>
                <Button variant="ghost" size="icon" className="p-1 cursor-pointer">
                    <EllipsisVertical className="h-4 w-4 text-gray-500" />
                </Button>
            </div>
        </FileItemActionsProvider>
    )
}