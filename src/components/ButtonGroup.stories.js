import React from "react"
import Button from "./Button"
import ButtonGroup from "./ButtonGroup"

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
}

const Template = ({ children, ...args }) => (
  <ButtonGroup {...args}>{children}</ButtonGroup>
)

export const Default = Template.bind({})
Default.args = {
  children: [
    <Button key="primary">Primary</Button>,
    <Button key="secondary" secondary>
      Secondary
    </Button>,
  ],
}

export const Expand = Template.bind({})
Expand.args = {
  expand: true,
  children: [
    <Button key="primary">Primary</Button>,
    <Button key="secondary" secondary>
      Secondary
    </Button>,
  ],
}
