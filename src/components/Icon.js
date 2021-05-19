/** @jsxImportSource theme-ui */
import { useThemeUI } from "theme-ui"
import { Icon as IconifyIcon, InlineIcon } from "@iconify/react"
import chevronLeft from "@iconify/icons-mdi/chevron-left"
import chevronRight from "@iconify/icons-mdi/chevron-right"
import chevronUp from "@iconify/icons-mdi/chevron-up"
import download from "@iconify/icons-mdi/download"
import facebook from "@iconify/icons-mdi/facebook"

const ICONS = {
  chevronLeft,
  chevronRight,
  chevronUp,
  download,
  facebook,
}
const DEFAULT_ICON = "chevronLeft"

export default function Icon({ icon = DEFAULT_ICON, inline, size, ...props }) {
  const { theme } = useThemeUI()
  const computedSize = size || theme.sizes[5]
  const Component = inline ? InlineIcon : IconifyIcon
  return (
    <Component
      icon={ICONS[icon]}
      width={computedSize}
      height={computedSize}
      {...props}
    />
  )
}
