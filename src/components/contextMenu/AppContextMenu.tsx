import type { IContextualMenuProps } from "@/interfaces/ContextualMenuProps";
import { FileMenuElementGroups } from "@/lib/fileMenu";
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "../ui/context-menu";

export default function AppContextMenu(props: IContextualMenuProps) {
  const renderGroup = (group: (typeof FileMenuElementGroups)[number]) => {
    return group.map((element) => (
      <ContextMenuItem
        key={element.id}
        onSelect={() => {
          element.command(props.file);
        }}
        disabled={element.disabled}
        className={element.color ? `text-${element.color}-700` : ""}
      >
        <element.icon
          className={element.color ? `text-${element.color}-700` : ""}
        />{" "}
        {element.label}
      </ContextMenuItem>
    ));
  };

  return (
    <ContextMenuContent className="min-w-30">
      {FileMenuElementGroups.map((group, index) => (
        <>
          {renderGroup(group)}
          {console.log(index, FileMenuElementGroups.length - 1)}
          {console.log(index < FileMenuElementGroups.length - 1)}
          {index < FileMenuElementGroups.length - 1 ? (
            <ContextMenuSeparator key={`sep-${index}`} />
          ) : null}
        </>
      ))}
    </ContextMenuContent>
  );
}
