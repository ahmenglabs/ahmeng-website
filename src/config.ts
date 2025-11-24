export const SITE = {
  website: "https://ahmenglabs.codes/", // replace this with your deployed domain
  author: "Ahmeng Labs Team",
  profile: "https://ahmenglabs.codes/",
  desc: "Perkumpulan orang-orang newbie.",
  title: "Ahmeng Labs",
  ogImage: "logo.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Jakarta", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
