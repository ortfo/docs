import { HeadConfig } from "vitepress"

const values = [
  { "og:url": "https://ortfo.org" },
  { "og:title": "ortfo — make portfolio sites with lots of projects" },
  {
    "og:description":
      "A great portfolio website building experience, no technical knowledge required. Work in progress.",
  },
  { "og:type": "website" },
  {
    "og:image": "https://ortfo.org/preview-image.png",
  },
  { "twitter:card": "sumary_large_image" },
  { "twitter:creator": "@ewen_lbh" },
] as Array<Record<string, string>>

export const seoTags: HeadConfig[] = values.map((entry) => {
  const [name, content] = Object.entries(entry)[0]
  return [
    "meta",
    { [name.startsWith("og:") ? "property" : "name"]: name, content },
  ]
})
