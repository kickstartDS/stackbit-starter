import {
  Config,
  ContentObject,
  ContentObjectType,
  GlobalProps,
  PageComponentProps,
  PageLayout,
} from "@/types";
import { deepMapObject } from "./data-utils";
import { ConfigModel } from "../components/Config";

export function resolveStaticProps(
  urlPath: string,
  allData: ContentObject[]
): PageComponentProps {
  const originalPage = allData.find(
    (obj) => obj.__metadata.urlPath === urlPath
  ) as PageLayout;

  console.log("originalPage", originalPage, allData, urlPath);
  const globalProps: GlobalProps = {
    site: allData.find(
      (obj) => obj.__metadata.modelName === ConfigModel.name
    ) as unknown as Config,
  };

  return {
    ...originalPage,
    global: globalProps,
  };
}
