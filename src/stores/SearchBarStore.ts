import { create } from "zustand";

interface SearchBarState {
  searchTerm: string;
  isSearchBarOpen: boolean;
  setSearchTerm: (event: React.FormEvent<HTMLInputElement>) => void;
  toggleSearchBar: () => void;
  closeSearchBar: () => void;
}
const useSearchBarStore = create<SearchBarState>((set) => ({
  searchTerm: "",
  isSearchBarOpen: false,
  setSearchTerm: (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    set({ searchTerm: target.value });
  },
  toggleSearchBar: () =>
    set((state) => ({ isSearchBarOpen: !state.isSearchBarOpen })),
  closeSearchBar: () => {
    set({ isSearchBarOpen: false });
  },
}));

export default useSearchBarStore;
