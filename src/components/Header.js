/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed } from "theme-ui"

export default function Header({ title }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 8,
      }}
    >
      <Themed.h1 sx={{ m: 0 }}>{title}</Themed.h1>
    </div>
  )
}
