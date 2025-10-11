import type FileNode from "./FileNode";

export interface ViewModeItem {
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    layout: React.ComponentType<{ fileList: FileNode[] }>;
}