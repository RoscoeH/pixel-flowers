import React from "react"
import ConfigItem from "./ConfigItem"

export default {
  title: "Components/ConfigItem.Color",
  component: ConfigItem.Color,
}

const Template = args => <ConfigItem.Color {...args} />

export const Color = Template.bind({})
Color.args = { label: "Color", value: "#fc9dc3" }

export const Disabled = Template.bind({})
Disabled.args = { label: "Disabled", value: "#fc9dc3", disabled: true }
