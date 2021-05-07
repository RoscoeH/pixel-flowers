/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed, useThemeUI } from "theme-ui"
import { useState } from "react"
import useDimensions from "react-use-dimensions"

import Tabs, { Tab } from "../components/Tabs"
import ConfigList from "../components/ConfigList"
import Button from "../components/Button"
import ButtonGroup from "../components/ButtonGroup"

import { Global } from "@emotion/react"
import { capitalize } from "../core/utils"

const PART_NAMES = ["petals", "pistil", "stem", "pot"]
const DEFAULT_TAB = PART_NAMES[0]

function Tabbed() {
  const [selectedTab, setSelectedTab] = useState(DEFAULT_TAB)
  const [dimensionsRef, { y }] = useDimensions()
  const { theme } = useThemeUI()
  const { space, sizes } = theme

  // Hack to enable nested scrolling without fixed height
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
        {PART_NAMES.map((partName, index) => (
          <Tab key={partName} label={capitalize(partName)}>
            <div sx={{ m: "0 auto", px: [0, 6] }}>
              <ConfigList part={partName} />
              <div sx={{ mt: 3 }}>
                <ButtonGroup expand>
                  {index > 0 && (
                    <Button
                      onClick={selectTab(PART_NAMES[index - 1])}
                      secondary
                    >
                      Previous
                    </Button>
                  )}
                  {index < PART_NAMES.length - 1 && (
                    <Button onClick={selectTab(PART_NAMES[index + 1])}>
                      Next
                    </Button>
                  )}
                </ButtonGroup>
              </div>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  )
}

function Sidebar() {
  const [dimensionsDef, { y }] = useDimensions()
  const height = `calc(100vh - ${y}px)`

  return (
    <div
      ref={dimensionsDef}
      sx={{
        px: 3,
        bg: "muted2",
        maxWidth: 11,
        height,
        overflowY: "auto",
        borderLeft: "default",
        borderRight: "default",
        borderColor: "muted",
      }}
    >
      {PART_NAMES.map(partName => (
        <div key={partName}>
          <Themed.h3 sx={{ mt: 5, mb: 3 }}>{capitalize(partName)}</Themed.h3>
          <ConfigList part={partName} />
        </div>
      ))}
    </div>
  )
}

const FlowerConfig = {
  Tabbed,
  Sidebar,
}

export default FlowerConfig
