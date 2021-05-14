/** @jsxImportSource theme-ui */
import { useFlower, pickRandomFlower } from "../hooks/useFlower"
import useInterval from "../hooks/useInterval"
import { FlowerSvg as Flower } from "./Flower"

export default function EvolvingFlower({ morph }) {
  const { flower, randomFlower, mutateFlower } = useFlower(pickRandomFlower())
  useInterval(morph ? mutateFlower : randomFlower, 500)
  return <Flower {...flower} backgroundColor="transparent" />
}
