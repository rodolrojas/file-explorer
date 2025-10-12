import type { IFEHistoryManagementSlice } from "@/interfaces/FEHistoryManagementSlice";
import type { StateCreator } from "zustand";
import type { FileExplorerState } from "./FileExplorerStore";

const createFEHistoryManagementSlice: StateCreator<
  IFEHistoryManagementSlice
> = (set, get) => ({
  history: [],
  historyIndex: -1,
  goBack: () => {
    const { history, historyIndex } = get();
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      set({ historyIndex: newIndex });
      const newPath = history[newIndex];
      (get() as FileExplorerState).getDirectoryContents(newPath);
    }
  },
  goForward: () => {
    const { history, historyIndex } = get();
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      set({ historyIndex: newIndex });
      const newPath = history[newIndex];
      (get() as FileExplorerState).getDirectoryContents(newPath);
    }
  },
  addToHistory: (path: string) => {
    const { history, historyIndex } = get();
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(path);
    set({ history: newHistory, historyIndex: newHistory.length - 1 });
  },
  hasPreviousRoutes: () => {
    return !(get().historyIndex > 0);
  },
  hasNextRoutes: () => {
    const { history, historyIndex } = get();
    return !(historyIndex < history.length - 1);
  },
});

export default createFEHistoryManagementSlice;
