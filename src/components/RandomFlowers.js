/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

import { range } from "../core/utils"
import RandomFlower from "./RandomFlower"

export default function RandomFlowers({ count = 60, size = 64 }) {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))",
        gridGap: 2,
      }}
    >
      {range(count).map(i => (
        <RandomFlower key={i} size={size} />
      ))}
    </div>
  )
}
