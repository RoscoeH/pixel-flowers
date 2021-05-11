/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"

import { range } from "../core/utils"
import { pickRandomFlower } from "../hooks/useFlower"
// import RandomFlower from "./RandomFlower"
import { FlowerSvg as Flower } from "./Flower"

export default function RandomFlowers({ count = 60, size = 96 }) {
  const [flowers] = useState(range(count).map(pickRandomFlower))
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${size}px, 1fr))`,
        gridGap: 2,
        maxWidth: "620px",
        margin: "0 auto",
      }}
    >
      {flowers.map((flower, i) => (
        <Flower key={i} {...flower} width={size} height={size} rounded />
      ))}
    </div>
  )
}
