import type React from "react";
import { Folder, FolderOpen } from "lucide-react";
import clsx from "clsx";
import type FileNode from "@/interfaces/FileNode";
import { Tree } from "@/interfaces/FileNode";
import { useState } from "react";

const getFolderTree = (node: FileNode): FileNode | undefined => {
  if (node.is_dir) {
    return {
      ...node,
      children: node.children
        ? (node.children
            .filter((child) => child.is_dir)
            .map((child) => getFolderTree(child)) as FileNode[])
        : undefined,
    };
  }
};

interface NodeItemProps {
  node: FileNode;
}

interface NodeTreeProps {
  node: FileNode;
  is_open?: boolean;
}

const NodeItem: React.FC<NodeItemProps> = ({ node }) => {
  const [is_open, setIsOpen] = useState(false);
  const [is_active, setIsActive] = useState(false);
  const iconClasses = clsx([`mr-2 h-4 w-4`]);
  const openFolder = () => {
    setIsOpen(!is_open);
    setIsActive(!is_active);
  };
  return (
    <li className="list-none select-none" key={node.full_path}>
      <a
        className={clsx(
          `flex w-full justify-start items-center cursor-pointer py-1`,
          {
            "": !is_active,
            "font-semibold": is_active,
          }
        )}
        href="#"
        onClick={() => setIsOpen(!is_open)}
      >
        {is_open ? (
          <FolderOpen className={iconClasses} />
        ) : (
          <Folder className={iconClasses} />
        )}
        {node.name}
      </a>
      {node.children?.map((child) => (
        <NodeTree key={child.full_path} node={child} is_open={is_open} />
      ))}
    </li>
  );
};

const NodeTree: React.FC<NodeTreeProps> = ({ node, is_open }) => {
  if (node.is_dir) {
    return (
      <>
        <ul className={clsx(`list-none pl-4`, { hidden: !is_open })}>
          <NodeItem node={node} />
        </ul>
      </>
    );
  }
};

const FolderTree = () => {
  const tree = getFolderTree(Tree);
  return (
    <div className="p-4 -ml-4">
      <h2 className="mb-4 text-lg font-bold">Folder Tree</h2>
      {tree && <NodeTree node={tree} is_open={true} />}
    </div>
  );
};

export default FolderTree;
