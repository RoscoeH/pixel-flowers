/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed, useThemeUI } from "theme-ui"

import Logo from "../components/Logo"

export default function Header() {
  const { theme } = useThemeUI()
  const { sizes } = theme
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
      <Logo size={sizes[6]} sx={{ mr: 3 }} />
      <Themed.h1 sx={{ m: 0 }}>Pixel Flowers</Themed.h1>
    </div>
  )
}
