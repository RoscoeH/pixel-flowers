import React from "react"
import PropTypes from "prop-types"

import STEMS, { KINDS } from "../paths/stems"

const SIZE = 128
const RES = 17

const Stem = ({
  color = "green",
  color2 = "lightgreen",
  kind = "a",
  ...props
}) => {
  const [stem, leaves] = STEMS[kind] || STEMS[KINDS[0]]
  return (
    <g {...props}>
      <g fill={color}>{stem}</g>
      {leaves && <g fill={color2}>{leaves}</g>}
    </g>
  )
}

Stem.propTypes = {
  /**
   * The kind of stem to display
   */
  kind: PropTypes.oneOf(KINDS),
  /**
   * The color of the stem
   */
  color: PropTypes.string,
  /**
   * The color of the leave
   */
  color2: PropTypes.string,
}

export default Stem

const StemSvg = props => (
  <svg
    width={SIZE}
    height={SIZE}
    viewBox={`0 0 ${RES} ${RES}`}
    style={{ border: `1px solid #ddd`, marginRight: "8px" }}
    shapeRendering="crispEdges"
  >
    <g transform={`translate(5, 2)`}>
      <Stem {...props} />
    </g>
  </svg>
)

export { StemSvg }
