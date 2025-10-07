import SortDropdown from "./sort-dropdown";
import ViewDropdown from "./view-dropdown";

export default function HeaderRightControls() {
  return (
    <div className="flex items-center justify-center">
      <ViewDropdown />
      <SortDropdown />
    </div>
  );
}
