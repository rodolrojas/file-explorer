import type FileNode from "./FileNode";

export interface IFileElementActionsButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  file: FileNode;
}
