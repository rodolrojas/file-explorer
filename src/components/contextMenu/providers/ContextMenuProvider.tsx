import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import type { IContextualMenuProviderProps } from "@/interfaces/ContextualMenuProviderProps";
import AppContextMenu from "../AppContextMenu";

export default function ContextMenuProvider(
  props: IContextualMenuProviderProps,
) {
  return (
    <ContextMenu>
      <ContextMenuTrigger {...props}>{props.children}</ContextMenuTrigger>
      <AppContextMenu file={props.file} />
    </ContextMenu>
  );
}
