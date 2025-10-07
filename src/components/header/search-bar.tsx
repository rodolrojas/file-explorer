import useSearchBarStore from "@/stores/SearchBarStore";
import { Search } from "lucide-react";

export default function AppSearchBar() {
  const searchTerm = useSearchBarStore((state) => state.searchTerm);
  const setSearchTerm = useSearchBarStore((state) => state.setSearchTerm);
  return (
    <div className="flex items-center justify-between">
      <div className="relative w-4 h-[20px]">
        <Search className="absolute w-5! h-5! top-0" />
      </div>
      <input
        autoFocus
        type="text"
        value={searchTerm}
        onInput={setSearchTerm}
        placeholder="Search for a file or a directory..."
        className="
                    text-sm
                    block w-full h-[20px] p-0 ml-4
                    rounded-none !bg-transparent border-0
                    shadow-none ring-0 outline-0
                    "
      />
    </div>
  );
}
