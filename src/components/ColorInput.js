/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useMemo } from "react"
import { TinyColor } from "@ctrl/tinycolor"

export default function ColorInput({ color, onChange, disabled }) {
  const tinyColor = useMemo(() => new TinyColor(color))
  const isLight = useMemo(() => tinyColor.isLight(), [tinyColor])
  const hexColor = useMemo(() => tinyColor.toHexString().toUpperCase(), [
    tinyColor,
  ])

  const handleChange = ({ target }) => onChange && onChange(target.value)

  const lightOrDarkColor = isLight ? "dark" : "light"

  return (
    <input
      value={color}
      onChange={handleChange}
      disabled={disabled}
      size="7"
      sx={{
        outline: "none",
        bg: disabled ? "transparent" : hexColor,
        color: disabled ? "muted" : lightOrDarkColor,
        boxShadow: disabled
          ? ({ colors }) => `inset 0 0 0 1px ${colors.muted}`
          : "none",
        cursor: disabled ? "not-allowed" : "auto",
        border: "none",
        height: 6,
        fontFamily: "body",
        fontSize: 2,
        borderRadius: 2,
        textAlign: "center",
        px: 2,
        my: 2,

        "&:hover": {
          boxShadow: disabled
            ? "none"
            : ({ colors }) =>
                `inset 0 0 0 2px ${isLight ? colors.shadow : colors.highlight}`,
        },

        "&:focus": {
          boxShadow: disabled
            ? "none"
            : ({ colors }) =>
                `inset 0 0 0 2px ${
                  isLight ? colors.shadow2 : colors.highlight2
                }`,
        },
      }}
    />
  )
}
