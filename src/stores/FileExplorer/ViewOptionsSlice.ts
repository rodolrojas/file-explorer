import FileExplorerLargeGridLayout from "@/components/explorer/layouts/large-grid";
import FileExplorerListLayout from "@/components/explorer/layouts/list";
import FileExplorerSmallGridLayout from "@/components/explorer/layouts/small-grid";
import type { IFEViewOptionsSlice } from "@/interfaces/FEViewOptionsSlice";
import type { SortMethodItem } from "@/interfaces/SortMethodItem";
import type { SortModeItem } from "@/interfaces/SortModeItem";
import type { ViewModeItem } from "@/interfaces/ViewModeItem";
import { LayoutGrid, LayoutList, ListOrdered, Square } from "lucide-react";
import { type StateCreator } from "zustand";

export const viewModes: ViewModeItem[] = [
    { label: "List",  icon: LayoutList, layout: FileExplorerListLayout },
    { label: "Details", icon: ListOrdered, layout: FileExplorerSmallGridLayout },
    { label: "Small Grid", icon: LayoutGrid, layout: FileExplorerSmallGridLayout },
    { label: "Large Grid", icon: Square, layout: FileExplorerLargeGridLayout },
];

export const sortMethods: SortMethodItem[] = [
    { label: "Name",       value: "name" },
    { label: "Modified",   value: "modified" },
    { label: "Size",       value: "size" },
    { label: "Type",       value: "type" },
];

export const sortModes: SortModeItem[] = [
    { label: "Ascendent",       value: "asc" },
    { label: "Descendent",   value: "desc" },
];

const createFEViewOptionsSlice:StateCreator<IFEViewOptionsSlice> = (set) => ({
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
});

export default createFEViewOptionsSlice;