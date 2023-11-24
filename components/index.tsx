"use client";

import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { Annotated } from "./Annotated";
import { ContentObject, GlobalProps } from "@/types";
import { Section } from "@kickstartds/base/lib/section";

type DynamicComponentProps = ContentObject & {
  global?: GlobalProps;
};

export const DynamicComponent: React.FC<DynamicComponentProps> = (props) => {
  const modelName = props.type;

  // Resolve component by content type
  if (!modelName) {
    throw new Error(
      `Object does not have a 'type' property: ${JSON.stringify(
        props,
        null,
        2
      )}`
    );
  }

  let Component = components[modelName] as ComponentType;
  if (!Component) {
    throw new Error(`No component matches type: '${modelName}'`);
  }

  return (
    <Annotated content={props}>
      <Component {...props} />
    </Annotated>
  );
};

export const components = {
  section: Section,
  hero: dynamic(() =>
    import("@kickstartds/ds-agency/hero").then((mod) => mod.Hero)
  ),
  cta: dynamic(() =>
    import("@kickstartds/ds-agency/cta").then((mod) => mod.Cta)
  ),
  mosaic: dynamic(() =>
    import("@kickstartds/ds-agency/mosaic").then((mod) => mod.Mosaic)
  ),
  "cta-paid": dynamic(() =>
    import("@kickstartds/ds-agency/cta-paid").then((mod) => mod.CtaPaid)
  ),
  faq: dynamic(() =>
    import("@kickstartds/ds-agency/faq").then((mod) => mod.Faq)
  ),
  features: dynamic(() =>
    import("@kickstartds/ds-agency/features").then((mod) => mod.Features)
  ),
  gallery: dynamic(() =>
    import("@kickstartds/ds-agency/gallery").then((mod) => mod.Gallery)
  ),
  headline: dynamic(() =>
    import("@kickstartds/ds-agency/headline").then((mod) => mod.Headline)
  ),
  "image-story": dynamic(() =>
    import("@kickstartds/ds-agency/image-story").then((mod) => mod.ImageStory)
  ),
  split: dynamic(() =>
    import("@kickstartds/ds-agency/split").then((mod) => mod.Split)
  ),
  stats: dynamic(() =>
    import("@kickstartds/ds-agency/stats").then((mod) => mod.Stats)
  ),
  "stats-paid": dynamic(() =>
    import("@kickstartds/ds-agency/stats-paid").then((mod) => mod.StatsPaid)
  ),
  "teaser-card": dynamic(() =>
    import("@kickstartds/ds-agency/teaser-card").then((mod) => mod.TeaserCard)
  ),
  testimonials: dynamic(() =>
    import("@kickstartds/ds-agency/testimonials").then(
      (mod) => mod.Testimonials
    )
  ),
  "testimonials-paid": dynamic(() =>
    import("@kickstartds/ds-agency/testimonials-paid").then(
      (mod) => mod.TestimonialsPaid
    )
  ),
  text: dynamic(() =>
    import("@kickstartds/ds-agency/text").then((mod) => mod.Text)
  ),
  "video-curtain": dynamic(() =>
    import("@kickstartds/ds-agency/video-curtain").then(
      (mod) => mod.VideoCurtain
    )
  ),
  "image-text": dynamic(() =>
    import("@kickstartds/ds-agency/image-text").then((mod) => mod.ImageText)
  ),
  logos: dynamic(() =>
    import("@kickstartds/ds-agency/logos").then((mod) => mod.Logos)
  ),
  "logos-paid": dynamic(() =>
    import("@kickstartds/ds-agency/logos-paid").then((mod) => mod.LogosPaid)
  ),
  page: dynamic(() => import("./Page")),
};
