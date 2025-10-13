export interface FileMenuElement {
  id: string;
  command: CallableFunction;
  label: string;
  icon: any;
  shortcut?: string;
  disabled?: boolean;
  color?: string;
}
