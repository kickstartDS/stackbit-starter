"use client";

// @ts-expect-error
import IconSprite from "@kickstartds/ds-agency/icon-sprite";
import DsaProviders from "@kickstartds/ds-agency/providers";
import { Section as DsaSection } from "@kickstartds/ds-agency/section";
import { SectionContext } from "@kickstartds/base/lib/section";

import "@/helpers/client";
import { ComponentProps, FC, PropsWithChildren, useContext } from "react";
import { DynamicComponent } from "@/components";

const SectionProvider: FC<PropsWithChildren<any>> = (props) => {
  const PreviousSection = useContext(SectionContext) as typeof DsaSection;
  const Section: React.FC<
    React.PropsWithChildren<ComponentProps<typeof DsaSection>>
  > = (props) => {
    const { components, ...rest } = props;
    return (
      <PreviousSection {...rest}>
        {components?.map((component: any, index: number) => (
          <DynamicComponent key={index} {...component} />
        ))}
      </PreviousSection>
    );
  };
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
