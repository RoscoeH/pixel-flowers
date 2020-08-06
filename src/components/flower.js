import React, { useEffect } from "react"
import PropTypes from "prop-types"

import Stem from "./stem"
import Petals from "./petals"
import Pistil from "./pistil"
import { useFlower } from "../hooks/flower"
import { KINDS as STEMS } from "../paths/stems"
import { KINDS as PETALS } from "../paths/petals"
import { KINDS as PISTILS } from "../paths/pistils"

const SIZE = 128
const RES = 32

const Flower = ({
  pistil,
  petals,
  stem,
  pistilColor,
  stemColor,
  stemColor2,
  petalsColor,
  petalsColor2,
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
  </>
)

Flower.propTypes = {
  stem: PropTypes.oneOf(STEMS),
  petals: PropTypes.oneOf(PETALS),
  pistil: PropTypes.oneOf(PISTILS),
}

export default Flower

const FlowerSvg = ({ backgroundColor, onClick, style, ...props }) => (
  <svg
    width={SIZE}
    height={SIZE}
    viewBox={`0 0 ${RES} ${RES}`}
    style={{ verticalAlign: "top", backgroundColor, ...style }}
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
