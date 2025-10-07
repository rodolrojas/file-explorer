import FileExplorerLargeGridLayout from "@/components/explorer/layouts/large-grid";
import FileExplorerListLayout from "@/components/explorer/layouts/list";
import FileExplorerSmallGridLayout from "@/components/explorer/layouts/small-grid";
import type FileNode from "@/interfaces/FileNode";
import { LayoutGrid, LayoutList, ListOrdered, Square } from "lucide-react";
import { create } from "zustand";

interface FileExplorerState {
    fileList: FileNode[];
    activePath: string;
    currentViewMode: ViewModeItem;
    currentSortMethod: SortMethodItem;
    currentSortMode: SortModeItem;
    setSortMethod: (sortMethod: SortMethodItem) => void;
    setSortMode: (sortMode: SortModeItem) => void;
    setViewMode: (viewMode: ViewModeItem) => void;
    setFileList: (fileList: FileNode[]) => void;
    getDirectoryContents: () => void;
    setActivePath: (directory: string) => void;
}
interface ApiResponse {
    count: number;
    items: FileNode[];
}
interface ViewModeItem {
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    layout: React.ComponentType<{ fileList: FileNode[] }>;
}
interface SortMethodItem {
    label: string;
    value: 'name' | 'size' | 'type' | 'modified';
}
interface SortModeItem {
    label: string;
    value: 'asc' | 'desc';
}

export const viewModes: ViewModeItem[] = [
    { label: "List",  icon: LayoutList, layout: FileExplorerListLayout },
    { label: "Details", icon: ListOrdered, layout: FileExplorerSmallGridLayout },
    { label: "Small Grid", icon: LayoutGrid, layout: FileExplorerSmallGridLayout },
    { label: "Large Grid", icon: Square, layout: FileExplorerLargeGridLayout },
];

export const sortMethods:SortMethodItem[] = [
    { label: "Name",       value: "name" },
    { label: "Modified",   value: "modified" },
    { label: "Size",       value: "size" },
    { label: "Type",       value: "type" },
];

export const sortModes:SortModeItem[] = [
    { label: "Ascendent",       value: "asc" },
    { label: "Descendent",   value: "desc" },
];

const useFileExplorerStore = create<FileExplorerState>((set, get) => ({
    fileList: [],
    activePath: "/home/rodolrojas",
    currentViewMode: viewModes[0],
    currentSortMethod: sortMethods[0],
    currentSortMode: sortModes[0],
    setViewMode: (viewMode: ViewModeItem) => {
        set({ currentViewMode: viewMode });
    },
    setSortMethod: (sortMethod: SortMethodItem) => {
        set({ currentSortMethod: sortMethod });
    },
    setSortMode: (sortMode: SortModeItem) => {
        set({ currentSortMode: sortMode });
    },
    setFileList: (fileList: FileNode[]) => {
        set({ fileList });
    },
    setActivePath: (directory: string) => {
        set({ activePath: directory });
    },
    getDirectoryContents: async () => {
        const { activePath } = get();
        try {
            const response = await fetch(`http://localhost:3000/list?path=${encodeURIComponent(activePath)}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors"
            });
            if (!response.ok) throw new Error("Failed to fetch directory contents");
            const data = (await response.json()) as ApiResponse;
            set({ fileList: data.items });
        } catch (error) {
            console.error(error);
            set({ fileList: [] });
        }
    }
}));

export default useFileExplorerStore;