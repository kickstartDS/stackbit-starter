"use client";

import * as React from "react";

import BaseLayout from "./Base";
import { DynamicComponent } from "./index";
import { PageLayout, PageComponentProps } from "@/types";

type PageProps = PageComponentProps & PageLayout;

const Page: React.FC<PageProps> = (props) => {
  const { global, ...page } = props;
  const { sections = [] } = page;

  return (
    <BaseLayout {...props}>
      <main id="main">
        {sections &&
          sections.length > 0 &&
          sections.map((section, index) => {
            return <DynamicComponent key={index} {...section} />;
          })}
      </main>
    </BaseLayout>
  );
};
export default Page;
