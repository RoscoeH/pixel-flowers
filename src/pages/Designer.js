/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

import { FlowerProvider, useFlower, pickRandomFlower } from "../hooks/useFlower"
import { FlowerSvg as Flower } from "../components/Flower"
import Tabs, { Tab } from "../components/Tabs"
import ConfigList from "../components/ConfigList"

export default function Designer() {
  const { flower } = useFlower(pickRandomFlower())
  console.log(flower)
  return (
    <FlowerProvider flower={flower}>
      <Flower {...flower} width="100%" />
      <Tabs sx={{ pt: 3 }}>
        <Tab key="pot" label="Pot">
          <ConfigList part="pot" />
        </Tab>
        <Tab key="stem" label="Stem">
          <ConfigList part="stem" />
        </Tab>
        <Tab key="pistil" label="Pistil">
          <ConfigList part="pistil" />
        </Tab>
        <Tab key="petals" label="Petals">
          <ConfigList part="petals" />
        </Tab>
      </Tabs>
    </FlowerProvider>
  )
}
