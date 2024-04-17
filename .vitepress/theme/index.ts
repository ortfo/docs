import DefaultTheme from "vitepress/theme"
import "./fonts.css"
import "./custom.css"
import { Theme } from "vitepress"
import JSONSchema from "./JSONSchema.vue"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("JSONSchema", JSONSchema)
  },
} satisfies Theme
