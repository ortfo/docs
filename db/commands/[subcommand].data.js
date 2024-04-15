import { createContentLoader } from "vitepress"

export default createContentLoader("ortfodb/docs/*.md", {
  render: true,
})
