import React from "react"
import Toggle from "./Toggle"

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    onToggle: { action: "toggled" },
  },
}

const Template = args => <Toggle {...args} />

export const True = Template.bind({})
True.args = { value: true, disabled: false }

export const False = Template.bind({})
False.args = { value: false, disabled: false }

export const DisabledTrue = Template.bind({})
DisabledTrue.args = { value: true, disabled: true }

export const DisabledFalse = Template.bind({})
DisabledFalse.args = { value: false, disabled: true }
