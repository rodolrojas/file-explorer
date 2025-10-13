import type FileNode from "@/interfaces/FileNode";
import FileElementActionsButton from "../common/actions-button";
import { loadFileItemClasses } from "../common/common-classes";
import FileItemIcon from "../common/file-icon";
import FileItemActionsProvider from "../providers/FileItemActionsProvider";

export default function FileExplorerSmallGridElement(props: {
  file: FileNode;
}) {
  return (
    <FileItemActionsProvider file={props.file}>
      <div
        key={props.file.path}
        className={loadFileItemClasses(
          "p-2 border border-gray-800 rounded flex items-center justify-between",
        )}
      >
        <div className="flex items-center text-sm">
          <FileItemIcon file={props.file} size={18} className="ml-2 mr-3" />
          {props.file.name}
        </div>
        <FileElementActionsButton file={props.file} />
      </div>
    </FileItemActionsProvider>
  );
}
