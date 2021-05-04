/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useRef } from "react"

import Button from "./Button"

const BUTTON_STYLE = {
  bg: "transparent",
  color: "dark",
  boxShadow: "none",
  "&:hover": {
    bg: "transparent",
    color: "primary",
    boxShadow: "none",
  },
}

export default function Switcher({ value, values = [], onChange }) {
  const selectRef = useRef()
  const handlePrev = () => {
    const currentIndex = values.indexOf(selectRef.current.value)
    const prevIndex =
      currentIndex === 0
        ? values.length - 1
        : (currentIndex - 1) % values.length
    onChange && onChange(prevIndex)
  }
  const handleNext = ({ target }) => {
    const currentIndex = values.indexOf(selectRef.current.value)
    const nextIndex = (currentIndex + 1) % values.length
    onChange && onChange(nextIndex)
  }
  const handleChange = ({ target }) => {
    const newIndex = values.indexOf(target.value)
    onChange && onChange(newIndex)
  }

  return (
    <div
      sx={{
        display: "flex",
        borderRadius: 3,
        boxShadow: ({ colors }) => `inset 0 0 0 1px ${colors.muted}`,
      }}
    >
      <Button
        icon="chevronLeft"
        onClick={handlePrev}
        sx={{
          ...BUTTON_STYLE,
          "&:active": {
            transform: ({ space }) => `translate(-${space[1]}px, 0)`,
          },
        }}
        secondary
      />
      {values.length > 0 ? (
        <select
          ref={selectRef}
          sx={{
            outline: "none",
            bg: "transparent",
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
          }}
          value={value}
          onChange={handleChange}
        >
          {values.map(v => (
            <option key={v} value={v}>
              {v}
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
          "&:active": {
            transform: ({ space }) => `translate(${space[1]}px, 0)`,
          },
        }}
        secondary
      />
    </div>
  )
}
