import React from "react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

import Designer from "./designer"

export default {
  title: "Pages/Designer",
  component: Designer,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone5",
    },
  },
}

const Template = args => <Designer {...args} />

export const Mobile = Template.bind({})

export const Tablet = Template.bind({})
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
}
