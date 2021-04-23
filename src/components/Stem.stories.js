import React from "react"

import { StemSvg as Stem } from "./Stem"
import { KINDS } from "../paths/stems"

export default {
  title: "Components/Stem",
  component: Stem,
  argTypes: {
    kind: { control: "select", options: KINDS },
    color2: { control: "color" },
  },
}

const Template = args => <Stem {...args} />

export const Default = Template.bind({})
Default.args = { color: "green", color2: "lightgreen", kind: "a" }
