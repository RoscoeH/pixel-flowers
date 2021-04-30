/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useRef } from "react"

import Icon from "./Icon"

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
    <div sx={{ border: "default", borderColor: "primary", display: "flex" }}>
      <div sx={{ display: "inline-block" }} onClick={handlePrev}>
        <Icon icon="chevronLeft" />
      </div>
      <select
        ref={selectRef}
        sx={{
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
      <div sx={{ display: "inline-block" }} onClick={handleNext}>
        <Icon icon="chevronRight" />
      </div>
    </div>
  )
}
