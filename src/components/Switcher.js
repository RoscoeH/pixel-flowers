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

export default function Switcher({ values = [], onChange }) {
  const selectRef = useRef()
  const [index, setIndex] = useState(0)
  const handlePrev = () => {
    const currentIndex = values.indexOf(selectRef.current.value)
    const prevIndex =
      currentIndex === 0
        ? values.length - 1
        : (currentIndex - 1) % values.length
    setIndex(prevIndex)
    onChange && onChange(prevIndex)
  }
  const handleNext = () => {
    const currentIndex = values.indexOf(selectRef.current.value)
    const nextIndex = (currentIndex + 1) % values.length
    console.log(target, selectRef.current.value, currentIndex, nextIndex)
    setIndex(nextIndex)
    onChange && onChange(nextIndex)
  }
  const handleChange = ({ target }) => {
    const newIndex = values.indexOf(target.value)
    setIndex(newIndex)
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
        secondary
        sx={BUTTON_STYLE}
      />
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
        value={values[index]}
        onChange={handleChange}
      >
        {values.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <Button
        icon="chevronRight"
        onClick={handleNext}
        secondary
        sx={BUTTON_STYLE}
      />
    </div>
  )
}
