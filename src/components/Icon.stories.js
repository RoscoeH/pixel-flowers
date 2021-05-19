import React from "react"
import Icon from "./Icon"

export default {
  title: "Components/Icon",
  component: Icon,
}

const Template = args => <Icon {...args} />
const Multiple = ({ sizes, ...args }) => (
  <>
    {sizes.map(size => (
      <Icon key={size} inline {...args} size={size} />
    ))}
  </>
)

export const Default = Template.bind({})
Default.args = { icon: "chevronLeft" }

export const ChevronLeft = Template.bind({})
ChevronLeft.args = { icon: "chevronLeft" }

export const ChevronRight = Template.bind({})
ChevronRight.args = { icon: "chevronRight" }

export const ChevronUp = Template.bind({})
ChevronUp.args = { icon: "chevronUp" }

export const Download = Template.bind({})
Download.args = { icon: "download" }

export const Brush = Template.bind({})
Brush.args = { icon: "brush" }

export const Facebook = Template.bind({})
Facebook.args = { icon: "facebook" }

export const Sizes = Multiple.bind({})
Sizes.args = { icon: "chevronRight", sizes: [8, 16, 24, 32, 40, 48] }
