/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import useDimensions from "react-use-dimensions"

import {
  FlowerProvider,
  useFlowerContext,
  useFlower,
  pickRandomFlower,
} from "../hooks/useFlower"
import { FlowerSvg as Flower } from "../components/Flower"

import Button from "../components/Button"
import FlowerConfig from "../components/FlowerConfig"

export function Designer() {
  const [dimensionsRef, { width }] = useDimensions()
  const { flower } = useFlowerContext()

  return (
    <div>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          height: 8,
        }}
      >
        <Themed.h1 sx={{ m: 0 }}>Customise</Themed.h1>
        <Button>Done</Button>
      </div>
      <div ref={dimensionsRef}>
        <Flower {...flower} width={width} height={width} />
      </div>
      <FlowerConfig.Tabbed />
    </div>
  )
}

export default function DesignerWrapper() {
  const { flower } = useFlower(pickRandomFlower())
  return (
    <FlowerProvider flower={flower}>
      <Designer />
    </FlowerProvider>
  )
}
