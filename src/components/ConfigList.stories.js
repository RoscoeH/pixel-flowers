import React from "react"
import { FlowerProvider, pickRandomFlower } from "../hooks/useFlower"
import ConfigList from "./ConfigList"

export default {
  title: "Components/ConfigList",
  component: ConfigList,
  decorators: [
    Story => (
      <FlowerProvider flower={pickRandomFlower()}>{Story()}</FlowerProvider>
    ),
  ],
}

const Template = args => <ConfigList {...args} />

export const Stem = Template.bind({})
Stem.args = {
  part: "stem",
}

export const Pistil = Template.bind({})
Pistil.args = {
  part: "pistil",
}

export const Petals = Template.bind({})
Petals.args = {
  part: "petals",
}

export const Pot = Template.bind({})
Pot.args = {
  part: "pot",
}
