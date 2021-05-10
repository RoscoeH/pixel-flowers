/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

import { useFlower, pickRandomFlower } from "../hooks/useFlower"
import { FlowerSvg as Flower } from "./Flower"

export default function RandomFlower({ size }) {
  const { flower } = useFlower(pickRandomFlower())
  return <Flower {...flower} width={size} height={size} />
}
