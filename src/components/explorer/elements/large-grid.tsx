import type FileNode from "@/interfaces/FileNode";
import FileElementActionsButton from "../common/actions-button";
import { loadFileItemClasses } from "../common/common-classes";
import FileItemIcon from "../common/file-icon";
import FileItemActionsProvider from "../providers/FileItemActionsProvider";

export default function FileExplorerLargeGridElement(props: {
  file: FileNode;
}) {
  return (
    <FileItemActionsProvider file={props.file}>
      <div
        key={props.file.path}
        className={loadFileItemClasses("border border-gray-800 rounded")}
      >
        <div className="flex items-center justify-center text-5xl p-2 min-h-64 relative">
          <FileElementActionsButton
            file={props.file}
            className="absolute top-1 right-1 p-1 cursor-pointer"
          />
          <FileItemIcon file={props.file} size={52} />
        </div>
        <div className="ml-auto text-sm bg-gray-800 border-t-gray-500 p-2">
          {props.file.name}
        </div>
      </div>
    </FileItemActionsProvider>
  );
}
