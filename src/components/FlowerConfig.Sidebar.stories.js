import React from "react"

import FlowerConfig from "./FlowerConfig"
import { FlowerProvider, pickRandomFlower } from "../hooks/useFlower"

export default {
  title: "Components/FlowerConfig.Sidebar",
  component: FlowerConfig.Sidebar,
  decorators: [
    Story => (
      <FlowerProvider flower={pickRandomFlower()}>{Story()}</FlowerProvider>
    ),
  ],
}

const Template = args => <FlowerConfig.Sidebar {...args} />

export const Default = Template.bind({})
