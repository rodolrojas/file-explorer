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

  const [pathSegments, length] = (() => {
    if(activePath === "/") return [["/"] as Array<string>, 1];
    const pathSegments = ["/"].concat(activePath.split("/").filter(Boolean).flat());
    return [pathSegments as Array<string>, pathSegments.length];
  })();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              {
                index === length - 1 ? (
                <BreadcrumbPage>{segment}</BreadcrumbPage>
              ) : (
              <BreadcrumbLink href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
                {segment}
              </BreadcrumbLink>
              )
              }
            </BreadcrumbItem>
            {index < length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
