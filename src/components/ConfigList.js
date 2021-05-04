/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

export default function ConfigList({ children }) {
  return (
    <div
      sx={{
        bg: "muted2",
        px: 4,
        py: 2,
        "& > *": {
          my: 2,
        },
      }}
    >
      {children}
    </div>
  )
}
