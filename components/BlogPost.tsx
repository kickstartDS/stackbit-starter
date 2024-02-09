import { BlogPost as BlogPostComponent } from "@kickstartds/ds-agency/blog-post";
import { BlogPostLayout, PageComponentProps } from "@/types";
import BaseLayout from "./Base";

type PageProps = PageComponentProps & BlogPostLayout;

const BlogPost: React.FC<PageProps> = (props) => {
  const { global, ...page } = props;
  const { cta, aside, head, content } = page;
  return (
    <BaseLayout {...props}>
      <main id="main">
        <BlogPostComponent
          cta={cta}
          seo={{
            title: "Lorem Ipsum",
          }}
          aside={aside}
          head={head}
          content={content}
        />
      </main>
    </BaseLayout>
  );
};

export default BlogPost;
