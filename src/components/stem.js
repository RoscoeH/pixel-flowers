import React from "react"
import PropTypes from "prop-types"

import STEMS from "../paths/stems"

const SIZE = 128
const RES = 20

export const KINDS = Object.keys(STEMS)

const Stem = ({ color = "darkgreen", color2 = "green", kind = "a" }) => {
  const [stem, leaves] = STEMS[kind] || STEMS[KINDS[0]]
  return (
    <>
      <g fill={color}>{stem}</g>
      {leaves && <g fill={color2}>{leaves}</g>}
    </>
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
    <g transform={`translate(4, 4)`}>
      <Stem {...props} />
    </g>
  </svg>
)

export { StemSvg }
