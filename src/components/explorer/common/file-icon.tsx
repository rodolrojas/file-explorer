import type FileNode from "@/interfaces/FileNode";
import { getFileIcon } from "@/lib/fileIcon";

interface FileItemIconProps extends React.HTMLAttributes<HTMLDivElement> {
    file: FileNode;
    size: number;
}

export default function FileItemIcon(props: FileItemIconProps) {
    const FileIcon = getFileIcon(props.file);
    return <FileIcon.component style={{ color: FileIcon.color }} {...props} />;
}