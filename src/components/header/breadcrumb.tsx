import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useFileExplorerStore from "@/stores/FileExplorerStore";
import { Fragment } from "react/jsx-runtime";

export default function AppBreadcrumb() {
  const {activePath} = useFileExplorerStore();

  const pathSegments = activePath.split("/").filter(Boolean);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
                {segment}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < pathSegments.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
         {pathSegments.length > 0 && <BreadcrumbSeparator />}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
