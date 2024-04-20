import deflists from "markdown-it-deflist"
import footnote from "markdown-it-footnote"
import lightTheme from "tm-themes/themes/one-light.json" assert { type: "json" }
import { DefaultTheme, defineConfig } from "vitepress"
import subcommand from "../db/commands/[subcommand].paths"
import { faviconHead } from "./favicon"
import { seoTags } from "./seo"

const ortfodbSidebar = [
  {
    text: "Introduction",
    items: [
      {
        text: "Getting started",
        link: "/db/getting-started",
      },
      {
        text: "Your first description.md file",
        link: "/db/your-first-description-file",
      },
      {
        text: "Building your database",
        link: "/db/building",
      },
      {
        text: "Database format",
        link: "/db/database-format",
      },
    ],
  },
  {
    text: "Features",
    link: "/db/features",
    items: [
      {
        text: "Scattered mode",
        link: "/db/scattered-mode",
      },
      {
        text: "Markdown",
        link: "/db/markdown",
      },
      {
        text: "Tags",
        link: "/db/tags",
      },
      {
        text: "Technologies",
        link: "/db/technologies",
      },
      {
        text: "Internationalization",
        link: "/db/internationalization",
      },
      {
        text: "Thumbnail generation",
        link: "/db/thumbnails",
      },
      {
        text: "Primary colors extraction",
        link: "/db/colors",
      },
      {
        text: "Complex layouts",
        link: "/db/layouts",
      },
      {
        text: "JSON Schemas",
        link: "/db/json-schemas",
      },
      {
        text: "Client libraries",
        link: "/db/client-libraries",
      },
    ],
  },
  {
    text: "Exporters",
    items: [
      {
        text: "Introduction",
        link: "/db/exporters/introduction",
      },
      {
        text: "Uploading to...",
        link: "/db/exporters/uploading",
        items: [
          {
            text: "Cloud storage services",
            link: "/db/exporters/uploading#cloud-service-providers",
          },
          {
            text: "Web servers",
            link: "/db/exporters/uploading#web-servers",
          },
          {
            text: "Git repositories",
            link: "/db/exporters/uploading#git-repositories",
          },
        ],
      },
      {
        text: "Using a static site generator",
        link: "/db/exporters/static-site-generators",
        items: ["Hugo", "11ty"].map((name) => ({
          text: name,
          link: `/db/exporters/static-site-generators#${name.toLowerCase()}`,
        })),
      },
      {
        text: "Exporting to other formats",
        link: "/db/exporters/formats",
        // items: [
        //   {
        //     text: "SQL",
        //     link: "/db/exporters/formats#sql",
        //   },
        // ],
      },
      {
        text: "Other exporters",
        link: "/db/exporters/misc",
        items: ["copy", "localize", "webhook"].map((name) => ({
          text: name,
          link: `/db/exporters/misc#${name}`,
        })),
      },
      {
        text: "The custom exporter",
        link: "/db/exporters/custom",
      },
      {
        text: "Writing your own exporter",
        link: "/db/exporters/development",
      },
    ],
  },

  {
    text: "CLI Reference",
    collapsed: true,
    items: [
      { text: "Global options", link: "/db/commands/global-options" },
      ...subcommand
        .paths()
        .filter(
          ({ params: { subcommand } }) =>
            !["README", "global-options"].includes(subcommand)
        )
        .map(({ params: { subcommand } }) => ({
          text: subcommand.replace("-", " "),
          link: `/db/commands/${subcommand}`,
        })),
    ],
  },

  {
    text: "Release notes",
    link: "/db/changelog",
  },
] satisfies DefaultTheme.SidebarItem[]

const defaultSidebar = [
  {
    text: "Getting started",
    items: [
      { text: "What is ortfo?", link: "/guide/what-is-ortfo" },
      { text: "Quick start", link: "/guide/getting-started" },
      { text: "Who's using ortfo?", link: "/users" },
    ],
  },
  {
    text: "ortfo/db 🗄",
    items: ortfodbSidebar,
  },
  {
    text: "ortfo/mk 📦",
    items: [{ text: "To be done…", link: "#" }],
  },
  {
    text: "ortfo/gui 💻",
    items: [
      { text: "Work in progress…", link: "https://github.com/ortfo/gui" },
    ],
  },
]
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "ortfo",
  description: "Make & manage your own homemade portfolio easily",
  srcExclude: ["**/README.md", "ortfodb/**/*.md"],
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
      },
    ],
    ...faviconHead(),
    ...seoTags,
    [
      "script",
      {
        defer: "defer",
        "data-domain": "ortfo.org",
        src: "https://stats.ewen.works/js/script.js",
      },
    ],
  ],
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    config: (md) => {
      md.use(footnote)
      md.use(deflists)
    },
    theme: {
      // Waiting for https://github.com/shikijs/textmate-grammars-themes/pull/48 to use 'one-light' instead of having to import it
      light: {
        ...lightTheme,
        settings: lightTheme.tokenColors,
        fg: lightTheme.colors["foreground"],
        bg: lightTheme.colors["background"],
        type: "light",
      },
      // light: "one-light",
      dark: "one-dark-pro",
    },
  },
  themeConfig: {
    search: {
      provider: "algolia",
      options: {
        appId: "JR0U8XYO7J",
        apiKey: "8707647349521501105dcd81174f1560",
        indexName: "ortfo",
      },
    },
    editLink: {
      pattern: "https://github.com/ortfo/website/edit/main/:path",
    },
    logo: {
      dark: "/logo-dark.svg",
      light: "/logo-light.svg",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "ortfo/db", link: "/db/" },
    ],

    outline: {
      level: "deep",
    },

    sidebar: {
      "/db/": ortfodbSidebar,
      "/guide/": defaultSidebar,
      "/users": defaultSidebar,
    },

    socialLinks: [{ icon: "github", link: "https://github.com/ortfo" }],
  },
})
