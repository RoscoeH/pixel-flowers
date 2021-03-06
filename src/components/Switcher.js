/** @jsxImportSource theme-ui */
import { useRef } from "react"

import Button from "./Button"
import { capitalize } from "../core/utils"

const BUTTON_STYLE = {
  bg: "transparent",
  color: "dark",
  boxShadow: "none",
  "&:enabled:hover": {
    bg: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  "&:disabled": {
    bg: "transparent",
    color: "muted",
    boxShadow: "none",
  },
}

export default function Switcher({ value, values = [], onChange, disabled }) {
  const selectRef = useRef()
  const handlePrev = () => {
    const currentIndex = values.indexOf(selectRef.current.value)
    const newIndex =
      currentIndex === 0
        ? values.length - 1
        : (currentIndex - 1) % values.length
    const newValue = values[newIndex]
    onChange && onChange(newValue)
  }
  const handleNext = ({ target }) => {
    const currentIndex = values.indexOf(selectRef.current.value)
    const newIndex = (currentIndex + 1) % values.length
    const newValue = values[newIndex]
    onChange && onChange(newValue)
  }
  const handleChange = ({ target }) => {
    const newIndex = values.indexOf(target.value)
    const newValue = values[newIndex]
    onChange && onChange(newValue)
  }

  return (
    <div
      sx={{
        display: "flex",
        bg: disabled ? "transparent" : "background",
        borderRadius: 3,
        boxShadow: disabled
          ? "none"
          : ({ colors }) => `inset 0 0 0 1px ${colors.muted}`,
        "&:hover": {
          boxShadow: disabled
            ? "none"
            : ({ colors }) => `inset 0 0 0 1px ${colors.primary}`,
        },
      }}
    >
      <Button
        icon="chevronLeft"
        onClick={handlePrev}
        sx={{
          ...BUTTON_STYLE,
          "&:enabled:active": {
            transform: ({ space }) => `translate(-${space[1]}px, 0)`,
          },
        }}
        disabled={disabled}
        secondary
      />
      {values.length > 0 ? (
        <div sx={{ position: "relative", flex: "1 1 auto" }}>
          <select
            ref={selectRef}
            sx={{
              opacity: 0,
              fontFamily: "body",
              fontSize: 1,
              outline: "none",
              bg: "transparent",
              color: disabled ? "muted" : "text",
              height: 7,
              width: "100%",
              "&:disabled": {
                cursor: "not-allowed",
              },
            }}
            value={value}
            onChange={handleChange}
            disabled={disabled}
          >
            {values.map(v => (
              <option key={v} value={v}>
                {capitalize(v)}
              </option>
            ))}
          </select>
          <div
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              pointerEvents: "none",
            }}
          >
            <div>{capitalize(value)}</div>
          </div>
        </div>
      ) : (
        <div sx={{ flex: "1 1 auto" }} />
      )}
      <Button
        icon="chevronRight"
        onClick={handleNext}
        sx={{
          ...BUTTON_STYLE,
          "&:enabled:active": {
            transform: ({ space }) => `translate(${space[1]}px, 0)`,
          },
        }}
        disabled={disabled}
        secondary
      />
    </div>
  )
}
