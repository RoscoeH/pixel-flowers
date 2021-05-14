/** @jsxImportSource theme-ui */
import { useEffect } from "react"
import PropTypes from "prop-types"
import useDimensions from "react-use-dimensions"

import Stem from "./Stem"
import Petals from "./Petals"
import Pistil from "./Pistil"
import Pot from "./Pot"
import { useFlower } from "../hooks/useFlower"
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
  petalsEnabled = true,
  pot,
  potColor,
  potColor2,
  potEnabled = true,
}) => (
  <>
    {stem && (
      <Stem
        kind={stem}
        color={stemColor}
        color2={stemColor2}
        transform="translate(9,9)"
      />
    )}
    {petals && petalsEnabled && (
      <Petals
        kind={petals}
        color={petalsColor}
        color2={petalsColor2}
        transform="translate(6,1)"
      />
    )}
    {pistil && (
      <Pistil kind={pistil} color={pistilColor} transform="translate(10,5)" />
    )}
    {pot && potEnabled && (
      <Pot
        kind={pot}
        color={potColor}
        color2={potColor2}
        transform="translate(6,14)"
      />
    )}
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
  height,
  rounded,
  ...props
}) => {
  const [dimensionsRef, { width: svgWidth }] = useDimensions()
  return (
    <svg
      ref={dimensionsRef}
      sx={{
        verticalAlign: "top",
        backgroundColor,
        borderRadius: rounded ? 3 : 0,
        ...style,
      }}
      width={width}
      height={height || svgWidth}
      viewBox={`0 0 ${RES} ${RES}`}
      preserveAspectRatio="xMidYMid meet"
      shapeRendering="crispEdges"
      onClick={onClick}
    >
      <g transform="translate(4,4)">
        <Flower {...props} />
      </g>
    </svg>
  )
}

export { FlowerSvg }

export const RandomFlower = () => {
  const { flower, randomFlower } = useFlower()
  useEffect(() => {
    randomFlower()
  }, [randomFlower])
  return <FlowerSvg {...flower} />
}
