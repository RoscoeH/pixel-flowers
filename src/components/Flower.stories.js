import React from "react"

import { FlowerSvg as Flower } from "./Flower"
import { KINDS as STEMS } from "../paths/stems"
import { KINDS as PISTILS } from "../paths/pistils"
import { KINDS as PETALS } from "../paths/petals"

export default {
  title: "Components/Flower",
  component: Flower,
  argTypes: {
    stem: { control: "select", options: STEMS },
    pistil: { control: "select", options: PISTILS },
    petals: { control: "select", options: PETALS },
    stemColor2: { control: "color" },
    petalsColor2: { control: "color" },
  },
}

const Template = args => <Flower {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: "skyblue",
  pistil: "indented",
  petals: "daffodil",
  stem: "a",
  pistilColor: "yellow",
  stemColor: "green",
  stemColor2: "lightgreen",
  petalsColor: "pink",
  petalsColor2: "hotpink",
}
