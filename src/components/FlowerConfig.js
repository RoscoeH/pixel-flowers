/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useState } from "react"
import useDimensions from "react-use-dimensions"

import Tabs, { Tab } from "../components/Tabs"
import ConfigList from "../components/ConfigList"
import Button from "../components/Button"
import ButtonGroup from "../components/ButtonGroup"

import { Global } from "@emotion/react"

const DEFAULT_TAB = "pot"

function Tabbed() {
  const [selectedTab, setSelectedTab] = useState(DEFAULT_TAB)
  const [dimensionsRef, { y }] = useDimensions()
  const { theme } = useThemeUI()
  const { space, sizes } = theme

  // Hack to enable nested scrolling without fixed height
  const appBarHeight = sizes[8]
  const tabButtonsHeight = space[6]
  const tabButtonsPadding = space[2]
  const tabButtonsBorder = space[3]
  const tabsHeight = `calc(100vh - ${
    y + tabButtonsHeight + tabButtonsPadding + tabButtonsBorder
  }px)`

  const selectTab = tab => () => setSelectedTab(tab)

  return (
    <div ref={dimensionsRef}>
      <Global
        styles={{
          html: {
            overflow: "hidden",
          },
          body: {
            overflow: "hidden",
          },
        }}
      />
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
  )
}

function Sidebar() {
  return <div>Sidebar FlowerCofig</div>
}

const FlowerConfig = {
  Tabbed,
  Sidebar,
}

export default FlowerConfig
