import type FileNode from "@/interfaces/FileNode";
import FileExplorerListElement from "../elements/list";
import clsx from "clsx";

const tableHeaderStyles = "table-cell font-semibold text-gray-500 px-4 py-2 border-b border-gray-800 vertical-align-middle";

export default function FileExplorerListLayout(props: {fileList: FileNode[]}) {
    return (
        <div className="table w-full gap-2 grid-cols-6">
            <div className="table-row">
                <div className={clsx(tableHeaderStyles, 'w-7/12')}>
                    Name
                </div>
                <div className={clsx(tableHeaderStyles)}>
                    Size
                </div>
                <div className={clsx(tableHeaderStyles)}>
                    Type
                </div>
                <div className={clsx(tableHeaderStyles)}>
                    Modified
                </div>
            </div>
            {props.fileList.map((file: FileNode) => (
                <FileExplorerListElement key={file.path} file={file} />
            ))}
        </div>
    )
}