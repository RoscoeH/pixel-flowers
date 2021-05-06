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

export const ExpandMany = Template.bind({})
ExpandMany.args = {
  expand: true,
  children: [
    <Button key="1">One</Button>,
    <Button key="2" secondary>
      Two
    </Button>,
    <Button key="3">Three</Button>,
    <Button key="4" secondary>
      Four
    </Button>,
    <Button key="5">Five</Button>,
  ],
}
