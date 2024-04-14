import { defineConfig } from "vitepress"
import footnote from "markdown-it-footnote"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "ortfo",
  description: "Make & manage your own homemade portfolio easily",
  markdown: {
    config: (md) => {
      md.use(footnote)
    },
  },
  themeConfig: {
    search: {
      provider: "local",
    },
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "ortfo/db", link: "/db/" },
    ],

    outline: {
      level: "deep",
    },

    sidebar: {
      "/guide/": {
        items: [
          {
            base: "/guide/",
            text: "Getting started",
            items: [
              { text: "What is ortfo?", link: "/what-is-ortfo" },
              { text: "Quick start", link: "/getting-started" },
              { text: "JSON Schemas", link: "/json-schemas" },
            ],
          },
          {
            base: "/db/",
            text: "ortfo/db",
            items: [
              { text: "Introduction", link: "/" },
              { text: "Scattered mode", link: "/scattered-mode" },
              { text: "Exporters", link: "/exporters/" },
            ],
          },
        ],
      },
      "/db/": {
        base: "/db/",
        items: [
          {
            text: "Getting started",
            link: "/getting-started",
          },
          {
            text: "Your first description.md file",
            link: "/your-first-description-file",
          },
          {
            text: "Scattered mode",
            link: "/scattered-mode",
          },
          {
            text: "Markdown",
            link: "/markdown",
          },
          {
            text: "Database format",
            link: "/database-format",
          },
          {
            text: "Exporters",
            base: "/db/exporters/",
            items: [
              {
                text: "Introduction",
                link: "/",
              },
              {
                text: "Built-in exporters (SSH, FTP, Git, Cloud services)",
                link: "/builtin",
              },
              {
                text: "The custom exporter",
                link: "/custom",
              },
              {
                text: "Writing your own exporter",
                link: "/development",
              },
            ],
          },
          {
            text: "CLI Reference",
            base: "/db/commands/",
            items: [
              { text: "Global options", link: "/" },
              { text: "add", link: "/add" },
              { text: "build", link: "/build" },
              { text: "schemas", link: "/schemas" },
              { text: "replicate", link: "/replicate" },
              { text: "completion", link: "/completion" },
            ],
          },

          {
            text: "Type definitions for Python, Rust and TypeScript",
            link: "/client-libraries",
          },
        ],
      },
    },

    socialLinks: [{ icon: "github", link: "https://github.com/ortfo" }],
  },
})
