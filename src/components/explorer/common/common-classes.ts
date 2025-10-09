import clsx from "clsx";

const FileItemDefaultClasses = clsx("select-none cursor-pointer");

const loadFileItemClasses = (classes: string) => clsx(FileItemDefaultClasses, classes);

export { loadFileItemClasses };