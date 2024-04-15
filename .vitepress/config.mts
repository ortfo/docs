import { DefaultTheme, defineConfig } from "vitepress"
import footnote from "markdown-it-footnote"
import deflists from "markdown-it-deflist"
import { faviconHead } from "./favicon"
import subcommand from "../db/commands/[subcommand].paths"

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
        text: "Database format",
        link: "/db/database-format",
      },
    ],
  },
  {
    text: "Features",
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
        text: "Built-in exporters (SSH, FTP, Git, Cloud services)",
        link: "/db/exporters/builtin",
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
    text: "Type definitions for Python, Rust and TypeScript",
    link: "/db/client-libraries",
  },
  {
    text: "Release notes",
    link: "/db/changelog",
  },
] satisfies DefaultTheme.SidebarItem[]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "ortfo",
  description: "Make & manage your own homemade portfolio easily",
  srcExclude: ["**/README.md", "ortfodb/**/*.md"],
  head: [
    ...faviconHead(),
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
      // Waiting for https://github.com/shikijs/textmate-grammars-themes/pull/48
      // light: "snazzy-light",
      light: "github-light",
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
      "/guide/": [
        {
          base: "/guide/",
          text: "Getting started",
          items: [
            { text: "What is ortfo?", link: "/what-is-ortfo" },
            { text: "Quick start", link: "/getting-started" },
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
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/ortfo" }],
  },
})
