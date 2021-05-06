/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

export default function ButtonGroup({ expand, children }) {
  return (
    <div
      sx={{
        display: expand ? "flex" : "block",
        "& > button": {
          flex: `1 1 ${Math.floor(100 / (children.length || 1))}%`,
        },
        "& > button:not(:last-child)": {
          mr: 2,
        },
      }}
    >
      {children}
    </div>
  )
}
