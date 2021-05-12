/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect, useState } from "react"
import useDimensions from "react-use-dimensions"
import { use100vh } from "react-div-100vh"
import { Global } from "@emotion/react"

import useScrollTop from "../hooks/useScrollTop"

export function TabButton({ children, selected, onClick }) {
  return (
    <button
      sx={{
        border: "none",
        bg: selected ? "muted2" : "transparent",
        color: "dark",
        px: 4,
        height: 6,
        fontSize: 1,
        fontFamily: "body",
        fontWeight: 600,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        "&:hover": {
          color: selected ? "dark" : "primary",
        },
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export function Tab({ children }) {
  return <div>{children}</div>
}

export default function Tabs({ selected, onChange, children }) {
  const [dimensionsRef, { y }] = useDimensions()
  const [scrollRef, scrollTop] = useScrollTop()
  const firstKey = children && children[0].key
  const [_selectedKey, setSelectedKey] = useState(firstKey)
  const selectedKey = selected || _selectedKey
  const selectedTab = children.filter(({ key }) => key === selectedKey)

  const selectTab = key => () =>
    onChange ? onChange(key) : setSelectedKey(key)

  const viewportHeight = use100vh()

  const height = viewportHeight - y

  useEffect(() => {
    scrollTop()
  })

  return (
    <div sx={{ pt: 2, overflowX: "hidden" }}>
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
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          borderBottom: ({ space }) => `${space[3]}px solid`,
          borderColor: "muted2",
          "& > *:not(:last-child)": {
            mr: 2,
          },
        }}
      >
        {children.map(({ key, props }) => (
          <TabButton
            key={key}
            onClick={selectTab(key)}
            selected={key === selectedKey}
          >
            {props.label || key}
          </TabButton>
        ))}
      </div>
      <div ref={dimensionsRef}>
        <div
          ref={scrollRef}
          sx={{ height, overflowY: "auto", bg: "muted2", px: 3, pb: 3 }}
        >
          {selectedTab}
        </div>
      </div>
    </div>
  )
}
