/** @jsxImportSource theme-ui */
import React from "react"
import Icon from "./Icon"
import { lighten, darken } from "@theme-ui/color"
import { get } from "lodash"

export const TYPES = {
  primary: "primary",
  secondary: "secondary",
}
const commonStyles = icon => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  border: "none",
  px: icon ? 3 : 4,
  py: 2,
  borderRadius: 3,
  fontFamily: "heading",
  fontSize: 1,
  fontWeight: 600,
  cursor: "pointer",
  "&:disabled": {
    cursor: "not-allowed",
  },
})
const colorStyles = (type, color) =>
  type === TYPES.primary
    ? {
        bg: color || "primary",
        color: "light",
        border: "none",
      }
    : {
        bg: "light",
        color: color || "primary",
        boxShadow: t =>
          `inset 0 0 0 1px ${color ? lighten(color, 0.2)(t) : t.colors.muted}`,
      }

const hoverStyles = (type, color) =>
  type === TYPES.primary
    ? {
        bg: color ? darken(color, 0.2) : "hover",
        color: "light",
        boxShadow: "none",
      }
    : {
        bg: "light",
        color: color ? darken(color, 0.2) : "hover",
        boxShadow: ({ colors }) =>
          `inset 0 0 0 1px ${color ? get(colors, color) : colors.primary}`,
      }

const activeStyles = (type, color) =>
  type === TYPES.primary
    ? {
        bg: color ? darken(color, 0.4) : "dark",
        color: "light",
        boxShadow: "none",
      }
    : {
        bg: "light",
        color: color ? darken(color, 0.4) : "dark",
        boxShadow: t =>
          `inset 0 0 0 1px ${color ? darken(color, 0.4)(t) : t.colors.dark}`,
      }

export default function Button({
  secondary,
  icon,
  expand,
  color,
  children,
  sx,
  href,
  onClick,
  ...props
}) {
  const type = secondary ? TYPES.secondary : TYPES.primary
  const styles = {
    ...commonStyles(icon),
    ...colorStyles(type, color),
    "&:hover": hoverStyles(type, color),
    "&:active": activeStyles(type, color),
    ...sx,
  }
  const content = [
    icon && <Icon key="0" icon={icon} sx={children && { mr: 2, ml: -2 }} />,
    children,
  ]
  return href ? (
    <a sx={styles} href={href} {...props}>
      {content}
    </a>
  ) : (
    <button sx={styles} onClick={onClick} {...props}>
      {content}
    </button>
  )
}
