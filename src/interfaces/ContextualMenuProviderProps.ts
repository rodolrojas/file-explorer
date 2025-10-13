import type FileNode from "./FileNode";

export interface IContextualMenuProviderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  file: FileNode;
}
