export interface IFEHistoryManagementSlice {
  history: string[];
  historyIndex: number;
  goBack: () => void;
  goForward: () => void;
  hasPreviousRoutes: () => boolean;
  hasNextRoutes: () => boolean;
  addToHistory: (path: string) => void;
}
