import type FileNode from "@/interfaces/FileNode";
import { formatBytes, formatDate, getFileType } from "@/lib/utils";
import clsx from "clsx";

const tableCellStyles = "table-cell px-4 py-2 border-b border-gray-800 vertical-align-middle text-[90%]";

export default function FileExplorerListElement(props: {file: FileNode}) {
    return (        
        <div key={props.file.path} className="table-row">
            <div className={clsx(tableCellStyles)}>
                {props.file.is_dir ? "📁" : "📄"} &nbsp;
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
        </div>
    )
}