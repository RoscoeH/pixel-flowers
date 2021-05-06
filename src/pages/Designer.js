/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed, useThemeUI } from "theme-ui"
import { useState } from "react"
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
import Button from "../components/Button"
import ButtonGroup from "../components/ButtonGroup"

const DEFAULT_TAB = "pot"

export function Designer() {
  const { flower } = useFlowerContext()
  const [selectedTab, setSelectedTab] = useState(DEFAULT_TAB)
  const [dimensionsRef, { width }] = useDimensions()
  const { theme } = useThemeUI()
  const { space, sizes } = theme

  // Hack to enable nested scrolling without fixed height
  const appBarHeight = sizes[8]
  const tabButtonsHeight = space[6]
  const tabButtonsPadding = space[4]
  const tabButtonsBorder = space[3]
  const tabsHeight = `calc(100vh - ${
    width +
    appBarHeight +
    tabButtonsHeight +
    tabButtonsPadding +
    tabButtonsBorder
  }px)`

  const selectTab = tab => () => setSelectedTab(tab)

  return (
    <div>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          height: 8,
        }}
      >
        <Themed.h1 sx={{ m: 0 }}>Customise</Themed.h1>
        <Button>Done</Button>
      </div>
      <div ref={dimensionsRef}>
        <Flower {...flower} width={width} height={width} />
      </div>
      <div>
        <Tabs
          height={tabsHeight}
          selected={selectedTab}
          onChange={setSelectedTab}
        >
          <Tab key="pot" label="Pot">
            <ConfigList part="pot" />
            <ButtonGroup expand>
              <Button onClick={selectTab("stem")} expand>
                Next
              </Button>
            </ButtonGroup>
          </Tab>
          <Tab key="stem" label="Stem">
            <ConfigList part="stem" />
            <ButtonGroup expand>
              <Button onClick={selectTab("pot")} secondary>
                Previous
              </Button>
              <Button onClick={selectTab("pistil")}>Next</Button>
            </ButtonGroup>
          </Tab>
          <Tab key="pistil" label="Pistil">
            <ConfigList part="pistil" />
            <ButtonGroup expand>
              <Button onClick={selectTab("stem")} secondary>
                Previous
              </Button>
              <Button onClick={selectTab("petals")}>Next</Button>
            </ButtonGroup>
          </Tab>
          <Tab key="petals" label="Petals">
            <ConfigList part="petals" />
            <ButtonGroup expand>
              <Button onClick={selectTab("pistil")} secondary>
                Previous
              </Button>
            </ButtonGroup>
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
