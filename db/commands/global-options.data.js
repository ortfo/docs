import { createContentLoader } from "vitepress"
import transformer from "./transformer"

export default createContentLoader("ortfodb/docs/ortfodb.md", {
  render: true,
  transform: transformer,
})
