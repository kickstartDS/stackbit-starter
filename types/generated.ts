import { BaseContentObject } from "./base";

import { Header as DsaHeader } from "@kickstartds/ds-agency/header";
import { Footer as DsaFooter } from "@kickstartds/ds-agency/footer";

import { BlogTeaser as DsaBlogTeaser } from "@kickstartds/ds-agency/blog-teaser";
import { BlogAside as DsaBlogAside } from "@kickstartds/ds-agency/blog-aside";
import { BlogHead as DsaBlogHead } from "@kickstartds/ds-agency/blog-head";

import { Section as DsaSection } from "@kickstartds/ds-agency/section";

import { Cta as DsaCta } from "@kickstartds/ds-agency/cta";
import { Faq as DsaFaq } from "@kickstartds/ds-agency/faq";
import { Features as DsaFeatures } from "@kickstartds/ds-agency/features";
import { Feature as DsaFeature } from "@kickstartds/ds-agency/feature";
import { Gallery as DsaGallery } from "@kickstartds/ds-agency/gallery";
import { Headline as DsaHeadline } from "@kickstartds/ds-agency/headline";
import { Split as DsaSplit } from "@kickstartds/ds-agency/split";
import { Stats as DsaStats } from "@kickstartds/ds-agency/stats";
import { Stat as DsaStat } from "@kickstartds/ds-agency/stat";
import { TeaserCard as DsaTeaserCard } from "@kickstartds/ds-agency/teaser-card";
import { Testimonials as DsaTestimonials } from "@kickstartds/ds-agency/testimonials";
import { Testimonial as DsaTestimonial } from "@kickstartds/ds-agency/testimonial";
import { Text as DsaText } from "@kickstartds/ds-agency/text";
import { ImageText as DsaImageText } from "@kickstartds/ds-agency/image-text";
import { Logos as DsaLogos } from "@kickstartds/ds-agency/logos";
import { Logo as DsaLogo } from "@kickstartds/ds-agency/logo";

export type PageModelType = PageLayout;

export const PAGE_MODEL_NAMES = ["page", "blog_overview", "blog_post"];

export type SectionModels = Section;

export type ContentObject =
  | PageLayout
  | BlogOverviewLayout
  | BlogPostLayout
  | BlogTeaser
  | BlogAside
  | BlogHead
  | Section
  | Cta
  | Faq
  | Features
  | Feature
  | Gallery
  | Headline
  | Split
  | Stats
  | Stat
  | TeaserCard
  | Testimonials
  | Testimonial
  | Text
  | ImageText
  | Logos
  | Logo;

export type ContentObjectType =
  | "page"
  | "blog_overview"
  | "blog_post"
  | "blog_teaser"
  | "blog_aside"
  | "blog_head"
  | "section"
  | "cta"
  | "faq"
  | "features"
  | "feature"
  | "gallery"
  | "headline"
  | "split"
  | "stats"
  | "stat"
  | "teaser_card"
  | "testimonials"
  | "testimonial"
  | "text"
  | "image_text"
  | "logos"
  | "logo";

export type PageLayout = BaseContentObject & {
  type: "page";
  title: string;
  sections?: SectionModels[];
  // metaTitle?: string;
  // metaDescription?: string;
  // addTitleSuffix?: boolean;
  // socialImage?: string;
  // metaTags?: MetaTag[];
};

export type BlogOverviewLayout = BaseContentObject & {
  type: "page";
  title: string;
  latest?: BlogTeaser;
  more?: BlogTeaser[];
  // seo?: Seo;
  sections?: SectionModels[];
};

export type BlogPostLayout = BaseContentObject & {
  type: "page";
  title: string;
  head?: BlogTeaser;
  aside?: BlogAside;
  content?: string;
  cta?: Cta;
  // seo?: ;
  sections?: SectionModels[];
};

export type Config = BaseContentObject & {
  type: "Config";
  fixedLabel?: string;
  favicon?: string;
  header?: Header;
  footer?: Footer;
  titleSuffix?: string;
  defaultSocialImage?: string;
  defaultMetaTags?: MetaTag[];
};

export type MetaTag = BaseContentObject & {
  type: "MetaTag";
  property?:
    | "og:title"
    | "og:type"
    | "og:image"
    | "og:image:alt"
    | "og:url"
    | "og:description"
    | "og:locale"
    | "og:site_name"
    | "og:video"
    | "twitter:card"
    | "twitter:site"
    | "twitter:creator"
    | "twitter:description"
    | "twitter:title"
    | "twitter:image"
    | "twitter:image:alt"
    | "twitter:player";
  content?: string;
};

export type Header = BaseContentObject &
  React.ComponentProps<typeof DsaHeader> & { type: "header" };
export type Footer = BaseContentObject &
  React.ComponentProps<typeof DsaFooter> & { type: "footer" };

export type BlogTeaser = BaseContentObject &
  React.ComponentProps<typeof DsaBlogTeaser> & { type: "blog_teaser" };
export type BlogAside = BaseContentObject &
  React.ComponentProps<typeof DsaBlogAside> & { type: "blog_aside" };
export type BlogHead = BaseContentObject &
  React.ComponentProps<typeof DsaBlogHead> & { type: "blog_head" };

export type Section = BaseContentObject &
  React.ComponentProps<typeof DsaSection> & { type: "section" };

export type Cta = BaseContentObject &
  React.ComponentProps<typeof DsaCta> & { type: "cta" };
export type Faq = BaseContentObject &
  React.ComponentProps<typeof DsaFaq> & { type: "faq" };
export type Features = BaseContentObject &
  React.ComponentProps<typeof DsaFeatures> & { type: "features" };
export type Feature = BaseContentObject &
  React.ComponentProps<typeof DsaFeature> & { type: "feature" };
export type Gallery = BaseContentObject &
  React.ComponentProps<typeof DsaGallery> & { type: "gallery" };
export type Headline = BaseContentObject &
  React.ComponentProps<typeof DsaHeadline> & { type: "headline" };
export type Split = BaseContentObject &
  React.ComponentProps<typeof DsaSplit> & { type: "split" };
export type Stats = BaseContentObject &
  React.ComponentProps<typeof DsaStats> & { type: "stats" };
export type Stat = BaseContentObject &
  React.ComponentProps<typeof DsaStat> & { type: "stat" };
export type TeaserCard = BaseContentObject &
  React.ComponentProps<typeof DsaTeaserCard> & { type: "teaser_card" };
export type Testimonials = BaseContentObject &
  React.ComponentProps<typeof DsaTestimonials> & { type: "testimonials" };
export type Testimonial = BaseContentObject &
  React.ComponentProps<typeof DsaTestimonial> & {
    type: "testimonial";
  };
export type Text = BaseContentObject &
  React.ComponentProps<typeof DsaText> & { type: "text" };
export type ImageText = BaseContentObject &
  React.ComponentProps<typeof DsaImageText> & { type: "image_text" };
export type Logos = BaseContentObject &
  React.ComponentProps<typeof DsaLogos> & { type: "logos" };
export type Logo = BaseContentObject &
  React.ComponentProps<typeof DsaLogo> & { type: "logo" };
