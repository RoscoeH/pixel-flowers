/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { useState } from "react"
import useDimensions from "react-use-dimensions"

import Tabs, { Tab } from "../components/Tabs"
import ConfigList from "../components/ConfigList"
import Button from "../components/Button"
import ButtonGroup from "../components/ButtonGroup"
import { capitalize } from "../core/utils"

const PART_NAMES = ["petals", "pistil", "stem", "pot"]
const DEFAULT_TAB = PART_NAMES[0]

function Tabbed() {
  const [selectedTab, setSelectedTab] = useState(DEFAULT_TAB)
  const selectTab = tab => () => setSelectedTab(tab)

  return (
    <div>
      <Tabs selected={selectedTab} onChange={setSelectedTab}>
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
        ml: 3,
        maxWidth: 11,
        height,
        overflowY: "auto",
      }}
    >
      {PART_NAMES.map(partName => (
        <div
          key={partName}
          sx={{ bg: "muted2", p: 4, mb: 3, mr: 3, borderRadius: 5 }}
        >
          <Themed.h3 sx={{ mt: 0, mb: 3 }}>{capitalize(partName)}</Themed.h3>
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
