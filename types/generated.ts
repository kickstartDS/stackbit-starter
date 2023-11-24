import { BaseContentObject } from "./base";

import { Header as DsaHeader } from "@kickstartds/ds-agency/header";
import { Footer as DsaFooter } from "@kickstartds/ds-agency/footer";
import { Section as DsaSection } from "@kickstartds/ds-agency/section";

import { Hero as DsaHero } from "@kickstartds/ds-agency/hero";
import { Cta as DsaCta } from "@kickstartds/ds-agency/cta";
import { Mosaic as DsaMosaic } from "@kickstartds/ds-agency/mosaic";
import { CtaPaid as DsaCtaPaid } from "@kickstartds/ds-agency/cta-paid";
import { Faq as DsaFaq } from "@kickstartds/ds-agency/faq";
import { ImageStory as DsaImageStory } from "@kickstartds/ds-agency/image-story";
import { Split as DsaSplit } from "@kickstartds/ds-agency/split";
import { Stats as DsaStats } from "@kickstartds/ds-agency/stats";
import { StatsPaid as DsaStatsPaid } from "@kickstartds/ds-agency/stats-paid";
import { Features as DsaFeatures } from "@kickstartds/ds-agency/features";
import { Gallery as DsaGallery } from "@kickstartds/ds-agency/gallery";
import { Headline as DsaHeadline } from "@kickstartds/ds-agency/headline";
import { TeaserCard as DsaTeaserCard } from "@kickstartds/ds-agency/teaser-card";
import { Testimonials as DsaTestimonials } from "@kickstartds/ds-agency/testimonials";
import { TestimonialsPaid as DsaTestimonialsPaid } from "@kickstartds/ds-agency/testimonials-paid";
import { Text as DsaText } from "@kickstartds/ds-agency/text";
import { VideoCurtain as DsaVideoCurtain } from "@kickstartds/ds-agency/video-curtain";
import { ImageText as DsaImageText } from "@kickstartds/ds-agency/image-text";
import { Logos as DsaLogos } from "@kickstartds/ds-agency/logos";
import { LogosPaid as DsaLogosPaid } from "@kickstartds/ds-agency/logos-paid";

export type PageModelType = PageLayout;

export const PAGE_MODEL_NAMES = ["page"];

export type SectionModels = Section;

export type ContentObject =
  | PageLayout
  | Section
  | Hero
  | Cta
  | Mosaic
  | CtaPaid
  | Faq
  | ImageStory
  | Split
  | Stats
  | StatsPaid
  | Features
  | Gallery
  | Headline
  | TeaserCard
  | Testimonials
  | TestimonialsPaid
  | Text
  | VideoCurtain
  | ImageText
  | Logos
  | LogosPaid;

export type ContentObjectType =
  | "page"
  | "section"
  | "hero"
  | "cta"
  | "mosaic"
  | "cta-paid"
  | "faq"
  | "image-story"
  | "split"
  | "stats"
  | "stats-paid"
  | "features"
  | "gallery"
  | "headline"
  | "teaser-card"
  | "testimonials"
  | "testimonials-paid"
  | "text"
  | "video-curtain"
  | "image-text"
  | "logos"
  | "logos-paid";

export type PageLayout = BaseContentObject & {
  type: "page";
  title: string;
  sections?: SectionModels[];
  metaTitle?: string;
  metaDescription?: string;
  addTitleSuffix?: boolean;
  socialImage?: string;
  metaTags?: MetaTag[];
  colors?: "colors-a" | "colors-b" | "colors-c" | "colors-d" | "colors-e";
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

export type Section = BaseContentObject &
  React.ComponentProps<typeof DsaSection> & { type: "section" };

export type Hero = BaseContentObject &
  React.ComponentProps<typeof DsaHero> & { type: "hero" };
export type Cta = BaseContentObject &
  React.ComponentProps<typeof DsaCta> & { type: "cta" };
export type Mosaic = BaseContentObject &
  React.ComponentProps<typeof DsaMosaic> & { type: "mosaic" };
export type CtaPaid = BaseContentObject &
  React.ComponentProps<typeof DsaCtaPaid> & { type: "cta-paid" };
export type Faq = BaseContentObject &
  React.ComponentProps<typeof DsaFaq> & { type: "faq" };
export type ImageStory = BaseContentObject &
  React.ComponentProps<typeof DsaImageStory> & { type: "image-story" };
export type Split = BaseContentObject &
  React.ComponentProps<typeof DsaSplit> & { type: "split" };
export type Stats = BaseContentObject &
  React.ComponentProps<typeof DsaStats> & { type: "stats" };
export type StatsPaid = BaseContentObject &
  React.ComponentProps<typeof DsaStatsPaid> & { type: "stats-paid" };
export type Features = BaseContentObject &
  React.ComponentProps<typeof DsaFeatures> & { type: "features" };
export type Gallery = BaseContentObject &
  React.ComponentProps<typeof DsaGallery> & { type: "gallery" };
export type Headline = BaseContentObject &
  React.ComponentProps<typeof DsaHeadline> & { type: "headline" };
export type TeaserCard = BaseContentObject &
  React.ComponentProps<typeof DsaTeaserCard> & { type: "teaser-card" };
export type Testimonials = BaseContentObject &
  React.ComponentProps<typeof DsaTestimonials> & { type: "testimonials" };
export type TestimonialsPaid = BaseContentObject &
  React.ComponentProps<typeof DsaTestimonialsPaid> & {
    type: "testimonials-paid";
  };
export type Text = BaseContentObject &
  React.ComponentProps<typeof DsaText> & { type: "text" };
export type VideoCurtain = BaseContentObject &
  React.ComponentProps<typeof DsaVideoCurtain> & { type: "video-curtain" };
export type ImageText = BaseContentObject &
  React.ComponentProps<typeof DsaImageText> & { type: "image-text" };
export type Logos = BaseContentObject &
  React.ComponentProps<typeof DsaLogos> & { type: "logos" };
export type LogosPaid = BaseContentObject &
  React.ComponentProps<typeof DsaLogosPaid> & { type: "logos-paid" };
