import React from "react"
import ConfigItem from "./ConfigItem"

export default {
  title: "Components/ConfigItem.Boolean",
  component: ConfigItem.Boolean,
}

const Template = args => <ConfigItem.Boolean {...args} />

export const True = Template.bind({})
True.args = { label: "Boolean", value: true }

export const False = Template.bind({})
False.args = { label: "Boolean", value: false }

export const DisabledTrue = Template.bind({})
DisabledTrue.args = { label: "Disabled True", value: true, disabled: true }

export const DisabledFalse = Template.bind({})
DisabledFalse.args = { label: "Disabled False", value: false, disabled: true }
