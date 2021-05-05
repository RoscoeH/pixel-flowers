import React from "react"

import { FlowerProvider, pickRandomFlower } from "../hooks/useFlower"
import Tabs, { Tab } from "./Tabs"
import ConfigList from "./ConfigList"

export default {
  title: "Components/Tabs",
  component: Tabs,
  decorators: [
    Story => (
      <FlowerProvider flower={pickRandomFlower()}>{Story()}</FlowerProvider>
    ),
  ],
}

const Template = ({ children, ...args }) => <Tabs {...args}>{children}</Tabs>

export const Basic = Template.bind({})
Basic.args = {
  children: [
    <Tab key="one" label="Tab 1">
      One
    </Tab>,
    <Tab key="two" label="Tab 2">
      Two
    </Tab>,
    <Tab key="three" label="Tab 3">
      Three
    </Tab>,
    <Tab key="four" label="Tab 4">
      Four
    </Tab>,
    <Tab key="five" label="Tab 5">
      Five
    </Tab>,
  ],
}

export const NoLabels = Template.bind({})
NoLabels.args = {
  children: [
    <Tab key="one">One</Tab>,
    <Tab key="two">Two</Tab>,
    <Tab key="three">Three</Tab>,
    <Tab key="four">Four</Tab>,
    <Tab key="five">Five</Tab>,
  ],
}

export const FlowerConfig = Template.bind({})
FlowerConfig.args = {
  children: [
    <Tab key="pot" label="Pot">
      <ConfigList part="pot" />
    </Tab>,
    <Tab key="stem" label="Stem">
      <ConfigList part="stem" />
    </Tab>,
    <Tab key="pistil" label="Pistil">
      <ConfigList part="pistil" />
    </Tab>,
    <Tab key="petals" label="Petals">
      <ConfigList part="petals" />
    </Tab>,
  ],
}
