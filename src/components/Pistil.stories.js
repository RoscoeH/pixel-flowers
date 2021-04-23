import React from "react"

import { PistilSvg as Pistil } from "./Pistil"
import { KINDS } from "../paths/pistils"

export default {
  title: "Components/Pistil",
  component: Pistil,
  argTypes: {
    kind: { control: "select", options: KINDS },
  },
}

const Template = args => <Pistil {...args} />

export const Default = Template.bind({})
Default.args = { color: "#ffeb00", kind: "indented" }
