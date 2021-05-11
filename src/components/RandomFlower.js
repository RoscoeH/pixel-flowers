/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect } from "react"

import { useFlower, pickRandomFlower } from "../hooks/useFlower"
import { FlowerSvg as Flower } from "./Flower"

export default function RandomFlower({ size }) {
  const { flower, setFlower } = useFlower(pickRandomFlower())

  useEffect(() => {
    setFlower(pickRandomFlower())
  }, [])

  return <Flower {...flower} width={size} height={size} rounded />
}
