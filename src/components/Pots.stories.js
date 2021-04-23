import React from "react"

import { PotSvg as Pot } from "./Pot"
import { KINDS } from "../paths/pots"

export default {
  title: "Components/Pot",
  component: Pot,
  argTypes: {
    kind: { control: "select", options: KINDS },
    color: { control: "color", default: "blue" },
    color2: { control: "color" },
  },
}

const Template = args => <Pot {...args} />

export const A = Template.bind({})
A.args = { kind: "a" }

export const B = Template.bind({})
B.args = { kind: "b" }

export const C = Template.bind({})
C.args = { kind: "c" }

export const D = Template.bind({})
D.args = { kind: "d" }

export const E = Template.bind({})
E.args = { kind: "e" }

export const F = Template.bind({})
F.args = { kind: "f" }

export const G = Template.bind({})
G.args = { kind: "g" }

export const H = Template.bind({})
H.args = { kind: "h" }

export const I = Template.bind({})
I.args = { kind: "i" }

export const J = Template.bind({})
J.args = { kind: "j" }

export const K = Template.bind({})
K.args = { kind: "k" }

export const L = Template.bind({})
L.args = { kind: "l" }

export const M = Template.bind({})
M.args = { kind: "m" }

export const N = Template.bind({})
N.args = { kind: "n" }

export const O = Template.bind({})
O.args = { kind: "o" }
