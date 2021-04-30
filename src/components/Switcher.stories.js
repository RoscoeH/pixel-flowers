import React from "react"
import Switcher from "./Switcher"

export default {
  title: "Components/Switcher",
  component: Switcher,
}

const Template = args => <Switcher {...args} />

export const Fruits = Template.bind({})
Fruits.args = {
  values: ["apples", "bananas", "oranges", "watermelon", "grapes"],
}

export const Empty = Template.bind({})
Empty.args = {}
