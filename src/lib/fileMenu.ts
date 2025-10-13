import {
  ClipboardPaste,
  Copy,
  FolderOpenDot,
  List,
  Scissors,
  TextCursor,
  Trash2,
} from "lucide-react";
import { type FileMenuElement } from "./../interfaces/FileMenuElement";

type FileMenuElementGroup = FileMenuElement[];

export const FileMenuElementGroups: FileMenuElementGroup[] = [
  [
    {
      id: "open",
      command: () => {
        console.log("Open file");
      },
      label: "Open",
      icon: FolderOpenDot,
    },
    {
      id: "copy",
      command: () => {
        console.log("Copy file");
      },
      label: "Copy",
      icon: Copy,
    },
    {
      id: "cut",
      command: () => {
        console.log("Cut file");
      },
      label: "Cut",
      icon: Scissors,
    },
    {
      id: "paste",
      command: () => {
        console.log("Paste file");
      },
      label: "Paste",
      icon: ClipboardPaste,
    },
    {
      id: "rename",
      command: () => {
        console.log("Rename file");
      },
      label: "Rename file",
      icon: TextCursor,
    },
    {
      id: "getProperties",
      command: () => {
        console.log("Get file properties");
      },
      label: "Get Properties",
      icon: List,
    },
  ],
  [
    {
      id: "delete",
      command: () => {
        console.log("Delete file");
      },
      color: "red",
      label: "Delete",
      icon: Trash2,
    },
  ],
];
