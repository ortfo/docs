// This constant is automatically updated by running `bun run favicons:inject`
const CONTENT = `
<head>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff"></head>
`

import { HeadConfig } from "vitepress"
import * as html from "htmlparser2"

export function faviconHead(): HeadConfig[] {
  const head = html
    .parseDocument(CONTENT)
    .children.find((c) => c.type === "tag" && c.name === "head")!
  if (head.type !== "tag") return []
  const items = head.children
    .map(
      (c) =>
        (c.type === "tag" ? [c.name, c.attribs] : []) as [
          string,
          Record<string, string>
        ]
    )
    .filter((c) => c.length > 0)
  return items
}
