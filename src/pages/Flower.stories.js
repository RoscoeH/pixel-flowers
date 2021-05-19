import React from "react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

import Flower from "./Flower"

export default {
  title: "Pages/Flower",
  component: Flower,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone5",
    },
  },
}

const Template = args => <Flower {...args} />

export const Mobile = Template.bind({})

export const Tablet = Template.bind({})
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
}
