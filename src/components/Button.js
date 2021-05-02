/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

import Icon from "./Icon"

export default function Button({ secondary, icon, children }) {
  return (
    <button
      sx={{
        display: "inline-flex",
        bg: secondary ? "light" : "primary",
        color: secondary ? "primary" : "light",
        boxShadow: secondary
          ? ({ colors }) => `inset 0 0 0 1px ${colors.muted}`
          : "none",
        border: "none",
        px: icon ? 3 : 4,
        py: 3,
        borderRadius: 3,
        fontFamily: "heading",
        fontSize: 3,
        fontWeight: 600,

        "&:hover": {
          bg: secondary ? "light" : "hover",
          color: secondary ? "hover" : "light",
          boxShadow: secondary
            ? ({ colors }) => `inset 0 0 0 1px ${colors.primary}`
            : "none",
        },
        "&:active": {
          bg: secondary ? "light" : "dark",
          color: secondary ? "dark" : "light",
          boxShadow: secondary
            ? ({ colors }) => `inset 0 0 0 1px ${colors.dark}`
            : "none",
        },
      }}
    >
      {icon && <Icon icon={icon} sx={children && { mr: 3 }} />}
      {children}
    </button>
  )
}
