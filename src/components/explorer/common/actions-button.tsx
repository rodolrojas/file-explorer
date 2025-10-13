import ContextMenuProvider from "@/components/contextMenu/providers/ContextMenuProvider";
import { Button } from "@/components/ui/button";
import type { IFileElementActionsButtonProps } from "@/interfaces/FileElementActionsButtonProps";
import clsx from "clsx";
import { EllipsisVertical } from "lucide-react";

export default function FileElementActionsButton(
  props: IFileElementActionsButtonProps,
) {
  return (
    <ContextMenuProvider file={props.file}>
      <Button
        variant="ghost"
        size="icon"
        className={clsx(props.className, "p-1 cursor-pointer")}
      >
        <EllipsisVertical className="h-4 w-4 text-gray-500" />
      </Button>
    </ContextMenuProvider>
  );
}
