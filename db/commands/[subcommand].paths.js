import { readdirSync } from "node:fs"
import path from "node:path"

export default {
  paths: () =>
    readdirSync("ortfodb/docs").map((file) => ({
      params: { subcommand: path.basename(file, ".md") },
    })),
}
