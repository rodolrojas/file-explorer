import type FileNode from "./FileNode";

export interface IFEFileManagementSlice {
    loading: boolean;
    error: boolean;
    preventFetching: boolean;
    time: number;
    fileList: FileNode[];
    activePath: string;
    moveToUpperDirectory: () => void;
    setFileList: (fileList: FileNode[]) => void;
    getDirectoryContents: (path?: string) => void;
    setActivePath: (directory: string) => void;
}