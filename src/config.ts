import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://vrblogs.pages.dev/", // replace this with your deployed domain
  author: "Flora Viegas ",
  profile: "https://github.com/ffauna",
  desc: "A minimal blog about VR for my final degree project",
  title: "VR Blogs",
  ogImage: "https://www.cs.us.es/user/themes/quark/images/favicon.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "es", // html lang code. Set this empty and default will be "en"
  langTag: ["es-ES"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Template used for ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/ffauna/VRblogs",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  }
];
