import React from "react"
import Logo from "./Logo"

export default {
  title: "Components/Logo",
  component: Logo,
}

const Template = args => <Logo {...args} />

export const Default = Template.bind({})

export const Small = Template.bind({})
Small.args = { size: 12 }

export const Large = Template.bind({})
Large.args = { size: 64 }
