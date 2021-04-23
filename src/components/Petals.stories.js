import React from "react"

import { PetalsSvg as Petals } from "./Petals"
import { KINDS } from "../paths/petals"

export default {
  title: "Components/Petals",
  component: Petals,
  argTypes: {
    kind: { control: "select", options: KINDS },
  },
}

const Template = args => <Petals {...args} />

export const Default = Template.bind({})
Default.args = { color: "pink", color2: "hotpink", kind: "daffodil" }
