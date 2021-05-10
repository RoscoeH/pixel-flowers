import React from "react"
import RandomFlowers from "./RandomFlowers"

export default {
  title: "Components/RandomFlowers",
  component: RandomFlowers,
}

const Template = args => <RandomFlowers {...args} />

export const Default = Template.bind({})
