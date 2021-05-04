import React from "react"
import ColorInput from "./ColorInput"

export default {
  title: "Components/ColorInput",
  component: ColorInput,
}

const Template = args => <ColorInput {...args} />

export const NamedColor = Template.bind({})
NamedColor.args = { color: "rebeccapurple" }

export const HexColor = Template.bind({})
HexColor.args = { color: "#deaded" }

export const FunctionColor = Template.bind({})
FunctionColor.args = { color: "rgb(123, 30, 30)" }

export const Disabled = Template.bind({})
Disabled.args = { color: "darkblue", disabled: true }

export const InvalidColor = Template.bind({})
InvalidColor.args = { color: "!@#$%^&*" }

export const Empty = Template.bind({})
