import useSearchBarStore from "@/stores/SearchBarStore";
import { Card, CardContent } from "../ui/card";
import AppBreadcrumb from "./breadcrumb";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";
import AppSearchBar from "./search-bar";

export default function HeaderCenter() {
  const isSearchBarOpen = useSearchBarStore((state) => state.isSearchBarOpen);
  const toggleSearchBar = useSearchBarStore((state) => state.toggleSearchBar);
  return (
    <div className="max-w-[700px] w-full flex items-center justify-center">
      <Card className="w-full py-2">
        <CardContent>
          {isSearchBarOpen ? <AppSearchBar /> : <AppBreadcrumb />}
        </CardContent>
      </Card>
      <Button
        variant="ghost"
        className="px-2 ml-1 cursor-pointer"
        onClick={() => toggleSearchBar()}
      >
        {isSearchBarOpen ? (
          <X className="w-5! h-5!" />
        ) : (
          <Search className="w-5! h-5!" />
        )}
      </Button>
    </div>
  );
}
