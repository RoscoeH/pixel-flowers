/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import useDimensions from "react-use-dimensions"

import {
  FlowerProvider,
  useFlowerContext,
  useFlower,
  pickRandomFlower,
} from "../hooks/useFlower"
import { FlowerSvg as Flower } from "../components/Flower"
import Tabs, { Tab } from "../components/Tabs"
import ConfigList from "../components/ConfigList"

export function Designer() {
  const { flower } = useFlowerContext()
  const [dimensionsRef, { width }] = useDimensions()
  const { theme } = useThemeUI()
  const { space } = theme

  // Hack to enable nested scrolling without fixed height
  const tabButtonsHeight = space[6]
  const tabButtonsPadding = space[4]
  const tabButtonsBorder = space[3]
  const tabsHeight = `calc(100vh - ${
    width + tabButtonsHeight + tabButtonsPadding + tabButtonsBorder
  }px)`

  return (
    <div>
      <div ref={dimensionsRef}>
        <Flower {...flower} width={width} height={width} />
      </div>
      <div>
        <Tabs height={tabsHeight}>
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
      </div>
    </div>
  )
}

export default function DesignerWrapper() {
  const { flower } = useFlower(pickRandomFlower())
  return (
    <FlowerProvider flower={flower}>
      <Designer />
    </FlowerProvider>
  )
}
