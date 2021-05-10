import React from "react"
import RandomFlower from "./RandomFlower"

export default {
  title: "Components/RandomFlower",
  component: RandomFlower,
}

const Template = args => <RandomFlower {...args} />

export const Default = Template.bind({})

export const Small = Template.bind({})
Small.args = { size: 64 }

export const Large = Template.bind({})
Large.args = { size: 256 }
