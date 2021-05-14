import React from "react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

import Home from "./Home"

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone5",
    },
  },
}

const Template = args => <Home {...args} />

export const Mobile = Template.bind({})

export const Tablet = Template.bind({})
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
}
