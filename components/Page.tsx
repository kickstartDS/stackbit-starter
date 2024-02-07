"use client";

import * as React from "react";

import BaseLayout from "./Base";
import { DynamicComponent } from "./index";
import { PageLayout, PageComponentProps } from "@/types";

type ComponentProps = PageComponentProps & PageLayout;

const Component: React.FC<ComponentProps> = (props) => {
  const { global, ...page } = props;
  const { sections = [] } = page;

  return (
    <BaseLayout {...props}>
      <main id="main">
        {sections && sections.length > 0 && (
          <div>
            {sections.map((section, index) => {
              return <DynamicComponent key={index} {...section} />;
            })}
          </div>
        )}
      </main>
    </BaseLayout>
  );
};
export default Component;
