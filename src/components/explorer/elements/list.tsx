import type FileNode from "@/interfaces/FileNode";
import { formatBytes, formatDate, getFileType } from "@/lib/utils";
import clsx from "clsx";
import FileItemIcon from "../common/file-icon";
import FileItemActionsProvider from "../providers/FileItemActionsProvider";
import { loadFileItemClasses } from "../common/common-classes";

const tableCellStyles = "table-cell px-4 py-2 border-b border-gray-800 vertical-align-middle text-[90%]";

export default function FileExplorerListElement(props: {file: FileNode}) {
    return (        
        <FileItemActionsProvider file={props.file} className={loadFileItemClasses("table-row hover:bg-gray-900 transition-all")}>
            <div className={clsx(tableCellStyles)}>
                <FileItemIcon file={props.file} size={20} className="inline mr-2" />
                {props.file.name}
            </div>
            <div className={clsx(tableCellStyles)}>
                {formatBytes(parseInt(props.file.size))}
            </div>
            <div className={clsx(tableCellStyles)}>
                {getFileType(props.file)}
            </div>
            <div className={clsx(tableCellStyles)}>
                {formatDate(props.file.mod_time)}
            </div>
        </FileItemActionsProvider>
    )
}