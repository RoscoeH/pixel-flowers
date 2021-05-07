/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

import Icon from "./Icon"

const commonStyles = icon => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  px: icon ? 3 : 4,
  py: 2,
  borderRadius: 3,
  fontFamily: "heading",
  fontSize: 1,
  fontWeight: 600,
  "&:disabled": {
    cursor: "not-allowed",
  },
})
const STYLES = {
  primary: {
    bg: "primary",
    color: "light",
    border: "none",
  },
  secondary: {
    bg: "light",
    color: "primary",
    boxShadow: ({ colors }) => `inset 0 0 0 1px ${colors.muted}`,
  },
}
const HOVER_STYLES = {
  primary: {
    bg: "hover",
    color: "light",
    boxShadow: "none",
  },
  secondary: {
    bg: "light",
    color: "hover",
    boxShadow: ({ colors }) => `inset 0 0 0 1px ${colors.primary}`,
  },
}
const ACTIVE_STYLES = {
  primary: {
    bg: "dark",
    color: "light",
    boxShadow: "none",
  },
  secondary: {
    bg: "light",
    color: "dark",
    boxShadow: ({ colors }) => `inset 0 0 0 1px ${colors.dark}`,
  },
}
export const TYPES = Object.keys(STYLES).reduce(
  (prev, curr) => ({ ...prev, [curr]: curr }),
  {}
)

export default function Button({
  secondary,
  icon,
  expand,
  children,
  sx,
  ...props
}) {
  const type = secondary ? TYPES.secondary : TYPES.primary
  return (
    <button
      sx={{
        ...commonStyles(icon),
        ...STYLES[type],
        "&:hover": HOVER_STYLES[type],
        "&:active": ACTIVE_STYLES[type],
        ...sx,
      }}
      {...props}
    >
      {children}
      {icon && <Icon icon={icon} sx={children && { ml: 0, mr: -2 }} />}
    </button>
  )
}
