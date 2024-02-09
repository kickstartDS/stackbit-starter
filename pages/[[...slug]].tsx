import { DynamicComponent } from "../components";
import { resolveStaticProps } from "../helpers/static-props-resolvers";
import { allContent } from "../helpers/content";
import { ParsedUrlQuery } from "querystring";
import { PageComponentProps } from "@/types";

interface IParams extends ParsedUrlQuery {
  slug: string[];
}

const Page: React.FC<PageComponentProps> = (props) => {
  console.log("Page props", props);

  return (
    <>
      <h1>Test</h1>
      <DynamicComponent {...props} />
    </>
  );
};

export function getStaticPaths() {
  const allData = allContent();
  const paths = allData.map((obj) => obj.__metadata.urlPath).filter(Boolean);
  return { paths, fallback: false };
}

export function getStaticProps({ params }: { params: IParams }) {
  const allData = allContent();
  const urlPath = "/" + (params.slug || []).join("/");
  const props = resolveStaticProps(urlPath, allData);
  return { props };
}

export default Page;
