import React, { useEffect } from "react"
import PropTypes from "prop-types"

import Stem from "./Stem"
import Petals from "./Petals"
import Pistil from "./Pistil"
import Pot from "./Pot"
import { useFlower } from "../hooks/flower"
import { KINDS as STEMS } from "../paths/stems"
import { KINDS as PETALS } from "../paths/petals"
import { KINDS as PISTILS } from "../paths/pistils"
import { KINDS as POTS } from "../paths/pots"

const SIZE = 128
const RES = 32

const Flower = ({
  stem,
  stemColor,
  stemColor2,
  pistil,
  pistilColor,
  petals,
  petalsColor,
  petalsColor2,
  pot,
  potColor,
  potColor2,
}) => (
  <>
    <Stem
      kind={stem}
      color={stemColor}
      color2={stemColor2}
      transform="translate(8,9)"
    />
    <Petals
      kind={petals}
      color={petalsColor}
      color2={petalsColor2}
      transform="translate(6,1)"
    />
    <Pistil kind={pistil} color={pistilColor} transform="translate(10,5)" />
    <Pot
      kind={pot}
      color={potColor}
      color2={potColor2}
      transform="translate(6,14)"
    />
  </>
)

Flower.propTypes = {
  stem: PropTypes.oneOf(STEMS),
  petals: PropTypes.oneOf(PETALS),
  pistil: PropTypes.oneOf(PISTILS),
  pots: PropTypes.oneOf(POTS),
}

export default Flower

const FlowerSvg = ({
  backgroundColor,
  onClick,
  style,
  width = SIZE,
  height = SIZE,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${RES} ${RES}`}
    style={{ verticalAlign: "top", backgroundColor, ...style }}
    preserveAspectRatio="xMidYMid meet"
    shapeRendering="crispEdges"
    onClick={onClick}
  >
    <g transform="translate(4,4)">
      <Flower {...props} />
    </g>
  </svg>
)

export { FlowerSvg }

export const RandomFlower = () => {
  const { flower, randomFlower } = useFlower()
  useEffect(() => {
    randomFlower()
  }, [randomFlower])
  return <FlowerSvg {...flower} />
}
