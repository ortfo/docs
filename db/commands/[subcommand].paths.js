import { readdirSync } from "node:fs"
import path from "node:path"

export default {
  paths() {
    const files = readdirSync("ortfodb/docs")
      .map((entry) => path.basename(entry))
      .filter((name) => name.startsWith("ortfodb_") && name.endsWith(".md"))
      .map((name) =>
        path
          .basename(name, ".md")
          .replace(/^ortfodb_/, "")
          .replace(/_/g, "-")
      )

    return files.map((file) => ({ params: { subcommand: file } }))
  },
}
