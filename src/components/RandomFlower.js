/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect } from "react"

import useIsClient from "../hooks/useIsClient"
import { useFlower, pickRandomFlower } from "../hooks/useFlower"
import { FlowerSvg as Flower } from "./Flower"

export default function RandomFlower({ size }) {
  const { isClient, key } = useIsClient()
  const { flower } = useFlower(pickRandomFlower())

  return isClient ? (
    <div key={key}>
      <Flower {...flower} width={size} height={size} rounded />
    </div>
  ) : (
    <div
      sx={{
        bg: flower.backgroundColor,
        width: size,
        height: size,
        borderRadius: 3,
      }}
    />
  )
}
