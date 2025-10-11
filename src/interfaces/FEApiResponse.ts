import type FileNode from "./FileNode";

export interface ApiResponse {
    count: number;
    items: FileNode[];
}