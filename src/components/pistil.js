import React from "react"
import PropTypes from "prop-types"

import PISTILS, { KINDS } from "../paths/pistils"

const DEFAULT_COLOR = "#ffeb00"
const SIZE = 128
const RES = 8

const Pistil = ({ color = DEFAULT_COLOR, kind = "tiny", ...props }) => (
  <g fill={color} {...props}>
    {React.createElement(PISTILS[kind] || PISTILS[KINDS[0]])}
  </g>
)
Pistil.propTypes = {
  /**
   * The color of the pistil
   */
  color: PropTypes.string,
  /**
   * The kind of pistil to display
   */
  kind: PropTypes.oneOf(KINDS),
}

export default Pistil

const PistilSvg = props => (
  <svg
    width={SIZE}
    height={SIZE}
    viewBox={`0 0 ${RES} ${RES}`}
    style={{ border: `1px solid #ddd`, marginRight: "8px" }}
    shapeRendering="crispEdges"
  >
    <g transform={`translate(${RES / 4}, ${RES / 4})`}>
      <Pistil {...props} />
    </g>
  </svg>
)

export { PistilSvg }
