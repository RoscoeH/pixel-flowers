import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "../src/gatsby-plugin-theme-ui"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
]
