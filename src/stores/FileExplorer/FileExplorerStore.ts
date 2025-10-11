
import { create } from "zustand";
import createFEViewOptionsSlice from "./ViewOptionsSlice";
import type { IFEFileManagementSlice } from "@/interfaces/FEFileManagementSlice";
import type { IFEViewOptionsSlice } from "@/interfaces/FEViewOptionsSlice";
import createFEFileManagementSlice from "./FileManagementSlice";
import createFEHistoryManagementSlice from "./HistoryManagementSlice";
import type { IFEHistoryManagementSlice } from "@/interfaces/FEHistoryManagementSlice";

export type FileExplorerState = IFEFileManagementSlice & IFEViewOptionsSlice & IFEHistoryManagementSlice

const useFileExplorerStore = create<FileExplorerState>((...a) => ({
    ...createFEViewOptionsSlice(...a),
    ...createFEFileManagementSlice(...a),
    ...createFEHistoryManagementSlice(...a),
}));

export default useFileExplorerStore;