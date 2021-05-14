import React from "react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

import Index from "./index"

export default {
  title: "Pages/Index",
  component: Index,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone5",
    },
  },
}

const Template = args => <Index {...args} />

export const Mobile = Template.bind({})

export const Tablet = Template.bind({})
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
}
