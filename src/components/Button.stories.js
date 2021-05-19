import React from "react"
import Button from "./Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    secondary: { control: { type: "bool" } },
  },
}

const Template = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
)

export const Primary = Template.bind({})
Primary.args = { children: "Button" }

export const Secondary = Template.bind({})
Secondary.args = { secondary: true, children: "Secondary" }

export const ColorPrimary = Template.bind({})
ColorPrimary.args = { children: "Color", color: "social.facebook" }

export const ColorSecondary = Template.bind({})
ColorSecondary.args = {
  secondary: true,
  children: "Color",
  color: "social.facebook",
}

export const Icon = Template.bind({})
Icon.args = { icon: "chevronRight" }

export const IconSecondary = Template.bind({})
IconSecondary.args = { secondary: true, icon: "chevronRight" }

export const Combined = Template.bind({})
Combined.args = { icon: "chevronRight", children: "Combined" }

export const CombinedSecondary = Template.bind({})
CombinedSecondary.args = {
  secondary: true,
  icon: "chevronRight",
  children: "Combined",
}
