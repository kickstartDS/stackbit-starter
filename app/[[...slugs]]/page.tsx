import { DynamicComponent } from "../../components";
import { resolveStaticProps } from "../../helpers/static-props-resolvers";
import { allContent } from "../../helpers/content";
// import { PageComponentProps } from "@/types";
// import { ParsedUrlQuery } from "querystring";

type PageProps = {
  params: { slugs: string[] | undefined };
};
export default async function Page({ params }: PageProps) {
  const { props } = await fetchData(params.slugs?.join("/") || "");

  return <DynamicComponent {...props} />;
}

async function fetchData(slug: string) {
  const allData = allContent();
  const urlPath = "/" + slug;
  const props = resolveStaticProps(urlPath, allData);
  console.log(allData, urlPath, props);
  return { props };
}

// interface IParams extends ParsedUrlQuery {
//   slug: string[];
// }

// const Page: React.FC<PageComponentProps> = (props) => {
//   const { params } = props;
//   return <DynamicComponent {...props} />;
// };

// export function getStaticPaths() {
//   const allData = allContent();
//   const paths = allData.map((obj) => obj.__metadata.urlPath).filter(Boolean);
//   return { paths, fallback: false };
//}

// export function getStaticProps({ params }: { params: IParams }) {
//   const allData = allContent();
//   const urlPath = "/" + (params.slug || []).join("/");
//   const props = resolveStaticProps(urlPath, allData);
//   return { props };
// }
