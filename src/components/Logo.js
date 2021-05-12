/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"

import Petals from "./Petals"
import Pistil from "./Pistil"

export default function Logo({ size = 32, ...props }) {
  const { theme } = useThemeUI()
  const { colors } = theme
  return (
    <svg width={size} height={size} viewBox={`0 0 12 12`} {...props}>
      <Petals kind="daffodil" color={colors.primary} color2={colors.muted} />
      <Pistil kind="zen" color={colors.secondary} transform="translate(4, 4)" />
    </svg>
  )
}
