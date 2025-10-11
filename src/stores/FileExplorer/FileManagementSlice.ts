
import { toast } from "sonner";
import { type StateCreator } from "zustand";
import type FileNode from "@/interfaces/FileNode";
import type { IFEFileManagementSlice } from "@/interfaces/FEFileManagementSlice";
import type { ApiResponse } from "@/interfaces/FEApiResponse";
import type { FileExplorerState } from "./FileExplorerStore";

const createFEFileManagementSlice: StateCreator<IFEFileManagementSlice> = ((set, get) => ({
    loading: false,
    time: 0,
    preventFetching: false,
    error: false,
    fileList: [],    
    activePath: "/home/rodolrojas/papapipa",
    setFileList: (fileList: FileNode[]) => {
        set({ fileList });
    },
    setActivePath: (directory: string) => {
        set({ activePath: directory });
    },
    moveToUpperDirectory: () => {
        const { activePath } = get();
        if (activePath === "/") return; // Already at root
        const pathParts = activePath.split("/").filter(part => part.length > 0);
        pathParts.pop(); // Remove the last part
        const newPath = "/" + pathParts.join("/") + (pathParts.length > 0 ? "/" : "");
        set({ activePath: newPath });
    },
    getDirectoryContents: async (path?: string) => {
        if ( get().preventFetching ) {
            set({ preventFetching: false })
            return;
        }
        const { activePath } = get();
        const targetPath = (path) ? path : activePath;
        try {
            set({ loading: true });
            const response = await fetch(`http://localhost:3000/list?path=${encodeURIComponent(targetPath)}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors"
            });
            if (!response.ok) throw new Error("Failed to fetch directory contents");
            const data = (await response.json()) as ApiResponse;
            set({
                error: false,
                fileList: (data.items || []),                
            });
            if (path) {
                set({ preventFetching: true })
                get().setActivePath(targetPath)
            } else{
                (get() as FileExplorerState).addToHistory(targetPath)
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message || "An error occurred while fetching directory contents");
            console.error(error);
            set({
                error: true,
                fileList: []
            });
        } finally {
            set({ loading: false });
        }
    }
}));

export default createFEFileManagementSlice;