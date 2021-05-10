import React from "react"
import EvolvingFlower from "./EvolvingFlower"

export default {
  title: "Components/EvolvingFlower",
  component: EvolvingFlower,
}

const Template = args => <EvolvingFlower {...args} />

export const Default = Template.bind({})

export const Morph = Template.bind({})
Morph.args = { morph: true }
