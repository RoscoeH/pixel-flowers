import React from "react"
import PropTypes from "prop-types"

import PETALS from "../paths/petals"

const SIZE = 128
const RES = 20

export const KINDS = Object.keys(PETALS)

const Petals = ({ color = "pink", color2 = "hotpink", kind = "clover" }) => {
  const [primaryPetals, secondaryPetals] = PETALS[kind] || PETALS[KINDS[0]]
  return (
    <>
      <g fill={color}>{primaryPetals}</g>
      {secondaryPetals && <g fill={color2}>{secondaryPetals}</g>}
    </>
  )
}

Petals.propTypes = {
  /**
   * The kind of pistil to display
   */
  kind: PropTypes.oneOf(KINDS),
  /**
   * The primary color of the pistil
   */
  color: PropTypes.string,
  /**
   * The secondary color of the pistil
   */
  color2: PropTypes.string,
}

export default Petals

const PetalsSvg = props => (
  <svg
    width={SIZE}
    height={SIZE}
    viewBox={`0 0 ${RES} ${RES}`}
    style={{ border: `1px solid #ddd`, marginRight: "8px" }}
    shapeRendering="crispEdges"
  >
    <g transform={`translate(4, 4)`}>
      <Petals {...props} />
    </g>
  </svg>
)

export { PetalsSvg }
