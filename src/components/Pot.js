import React from "react"
import PropTypes from "prop-types"

import POTS, { KINDS } from "../paths/pots"

const SIZE = 128
const RES = 17

const Pot = ({
  color = "#aaaaaa",
  color2 = "#ebc0f0",
  kind = "a",
  ...props
}) => {
  const [base, trimming] = POTS[kind] || POTS[KINDS[0]]
  return (
    <g {...props}>
      <g fill={color}>{base}</g>
      {trimming && <g fill={color2}>{trimming}</g>}
    </g>
  )
}

Pot.propTypes = {
  /**
   * The kind of pot to display
   */
  kind: PropTypes.oneOf(KINDS),
  /**
   * The primary color of the pot
   */
  color: PropTypes.string,
  /**
   * The color of the trimming
   */
  color2: PropTypes.string,
}

export default Pot

const PotSvg = props => (
  <svg
    width={SIZE}
    height={SIZE}
    viewBox={`0 0 ${RES} ${RES}`}
    style={{ border: `1px solid #ddd`, marginRight: "8px" }}
    shapeRendering="crispEdges"
  >
    <g transform={`translate(5, 2)`}>
      <Pot {...props} />
    </g>
  </svg>
)

export { PotSvg }
