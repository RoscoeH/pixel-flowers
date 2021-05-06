import React from "react"

import FlowerConfig from "./FlowerConfig"
import { FlowerProvider, pickRandomFlower } from "../hooks/useFlower"

export default {
  title: "Components/FlowerConfig.Tabbed",
  component: FlowerConfig.Tabbed,
  decorators: [
    Story => (
      <FlowerProvider flower={pickRandomFlower()}>{Story()}</FlowerProvider>
    ),
  ],
}

const Template = args => <FlowerConfig.Tabbed {...args} />

export const Default = Template.bind({})
