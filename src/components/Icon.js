/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Icon as IconifyIcon, InlineIcon } from "@iconify/react"
import chevronLeft from "@iconify/icons-mdi/chevron-left"
import chevronRight from "@iconify/icons-mdi/chevron-right"

const ICONS = {
  chevronLeft,
  chevronRight,
}
const DEFAULT_ICON = "chevronLeft"

export default function Icon({ icon = DEFAULT_ICON, inline, size, ...props }) {
  const Component = inline ? InlineIcon : IconifyIcon
  return <Component icon={ICONS[icon]} width={size} height={size} {...props} />
}
