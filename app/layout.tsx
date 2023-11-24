"use client";

// @ts-expect-error
import IconSprite from "@kickstartds/ds-agency/icon-sprite";
import DsaProviders from "@kickstartds/ds-agency/providers";
import { Section as DsaSection } from "@kickstartds/ds-agency/section";
import { SectionContext } from "@kickstartds/base/lib/section";

import "@/helpers/client";
import { ComponentProps, FC, PropsWithChildren } from "react";
import { DynamicComponent } from "@/components";

const Section: React.FC<React.PropsWithChildren> = (
  props: ComponentProps<typeof DsaSection>
) => {
  const { components, ...rest } = props;
  return (
    <DsaSection {...rest}>
      {components?.map((component: any, index: number) => (
        <DynamicComponent key={index} {...component} />
      ))}
    </DsaSection>
  );
};

const SectionProvider: FC<PropsWithChildren<any>> = (props) => {
  return <SectionContext.Provider value={Section} {...props} />;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <IconSprite />
        <DsaProviders>
          <SectionProvider>{children}</SectionProvider>
        </DsaProviders>
      </body>
    </html>
  );
}
