export interface IFEHistoryManagementSlice {
    history: string[];
    historyIndex: number;
    goBack: () => void;
    goForward: () => void;
    addToHistory: (path: string) => void;
}