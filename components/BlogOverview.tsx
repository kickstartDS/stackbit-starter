import {
  TagLabelContext,
  TagLabelContextDefault,
} from "@kickstartds/base/lib/tag-label";
import { BlogOverview as BlogOverviewComponent } from "@kickstartds/ds-agency/blog-overview";
import { BlogOverviewLayout, PageComponentProps } from "@/types";
import BaseLayout from "./Base";

type PageProps = PageComponentProps & BlogOverviewLayout;

const Tag = ({ label, ...props }: any) => (
  <TagLabelContextDefault label={label?.entry} {...props} />
);

const BlogOverview: React.FC<PageProps> = (props) => {
  const { global, ...page } = props;
  const { latest, more = [] } = page;

  return (
    <BaseLayout {...props}>
      <main id="main">
        {/* @ts-expect-error */}
        <TagLabelContext.Provider value={Tag}>
          <BlogOverviewComponent
            seo={{
              title: "Lorem Ipsum",
            }}
            latest={latest}
            more={more}
          />
        </TagLabelContext.Provider>
      </main>
    </BaseLayout>
  );
};

export default BlogOverview;
