import { getGemVersion, getRustVersion } from "./client-libraries-versions"

export default {
  watch: [
    "ortfodb/packages/ruby/lib/ortfodb/version.rb",
    "ortfodb/packages/rust/Cargo.toml",
  ],
  async load(watchedFiles) {
    return {
      versions: {
        gem: await getGemVersion(watchedFiles[0]),
        rust: await getRustVersion(watchedFiles[1]),
      },
    }
  },
}
