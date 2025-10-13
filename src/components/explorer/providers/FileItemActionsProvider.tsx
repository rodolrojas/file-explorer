import ContextMenuProvider from "@/components/contextMenu/providers/ContextMenuProvider";
import type FileNode from "@/interfaces/FileNode";
import useFileExplorerStore from "@/stores/FileExplorer/FileExplorerStore";
import React from "react";

interface FileItemActionsProviderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  file: FileNode;
}

export default function FileItemActionsProvider(
  props: FileItemActionsProviderProps,
) {
  const { setActivePath } = useFileExplorerStore();

  const handleDoubleClick = (event: React.MouseEvent, file: FileNode) => {
    event.preventDefault();
    console.log("Double click detected on file:", file);
    if (file.is_dir) {
      const pathTarget = file.path;
      setActivePath(pathTarget);
    }
  };

  return (
    <ContextMenuProvider
      {...props}
      file={props.file}
      onDoubleClick={(event) => handleDoubleClick(event, props.file)}
    >
      {props.children}
    </ContextMenuProvider>
  );
}
