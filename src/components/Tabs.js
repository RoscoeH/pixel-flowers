/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"

export function TabButton({ children, selected, onClick }) {
  return (
    <button
      sx={{
        border: "none",
        bg: selected ? "muted2" : "transparent",
        color: "dark",
        px: 4,
        height: 6,
        fontSize: 2,
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

export default function Tabs({ height, selected, onChange, children }) {
  const firstKey = children && children[0].key
  const [_selectedKey, setSelectedKey] = useState(firstKey)
  const selectedKey = selected || _selectedKey
  const selectedTab = children.filter(({ key }) => key === selectedKey)

  const selectTab = key => () =>
    onChange ? onChange(key) : setSelectedKey(key)

  return (
    <div sx={{ pt: 4, overflowX: "hidden" }}>
      <div
        sx={{
          display: "flex",
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
      <div sx={{ height, overflowY: "auto", bg: "muted2", px: 3, pb: 3 }}>
        {selectedTab}
      </div>
    </div>
  )
}
