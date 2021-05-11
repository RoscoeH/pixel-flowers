/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

import { range } from "../core/utils"
import useIsClient from "../hooks/useIsClient"
import RandomFlower from "./RandomFlower"

export default function RandomFlowers({ count = 60, size = 96 }) {
  const { isClient, key } = useIsClient()

  return (
    <motion.div
      key={key}
      animate={{ opacity: isClient ? 1 : 0 }}
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${size}px, 1fr))`,
        gridGap: 2,
        maxWidth: "620px",
        margin: "0 auto",
      }}
    >
      {range(count).map(i => (
        <RandomFlower key={i} size={size} />
      ))}
    </motion.div>
  )
}
