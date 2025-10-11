import type { SortMethodItem } from "./SortMethodItem";
import type { SortModeItem } from "./SortModeItem";
import type { ViewModeItem } from "./ViewModeItem";

export interface IFEViewOptionsSlice {
  currentViewMode: ViewModeItem;
  currentSortMethod: SortMethodItem;
  currentSortMode: SortModeItem;
  setSortMethod: (sortMethod: SortMethodItem) => void;
  setSortMode: (sortMode: SortModeItem) => void;
  setViewMode: (viewMode: ViewModeItem) => void;
}