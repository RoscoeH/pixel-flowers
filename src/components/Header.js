/** @jsxImportSource theme-ui */
import { Themed, useThemeUI } from "theme-ui"
import { useHistory } from "react-router-dom"

import Logo from "../components/Logo"

export default function Header() {
  const history = useHistory()
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
        cursor: "pointer",
      }}
      onClick={() => history.push("/")}
    >
      <Logo size={sizes[6]} sx={{ mr: 3 }} />
      <Themed.h1 sx={{ m: 0 }}>Pixel Flowers</Themed.h1>
    </div>
  )
}
