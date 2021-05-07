/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useRef } from "react"

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
        <select
          ref={selectRef}
          sx={{
            fontFamily: "body",
            fontSize: 1,
            outline: "none",
            bg: "transparent",
            color: disabled ? "muted" : "text",
            flex: "1 1 auto",
            height: 7,
            textAlign: "center",
            border: "none",
            appearance: "none",
            WebkitAppearance: "none",
            "&::-ms-expand": {
              display: "none",
            },
            textAlignLast: "center",
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
