import React from "react"
import PropTypes from "prop-types"

const SIZE = 128
const RES = 20
const DEFAULT_COLOR = "pink"
const DEFAULT_COLOR_2 = "hotpink"
const SHADOW_1 = "rgba(0, 0, 0, 0.1)"

// const Tiny = () => <rect x={1} y={1} width={2} height={2} />
// const Plain = () => <path d="m1,0 h2 v1 h1 v2 h-1 v1 h-2 v-1 h-1 v-2 h1 z" />
const PETALS = {
  clover: ({ color, color2 }) => (
    <>
      <g fill={color}>
        <path d="m3,0 h2 v1 h1 v4 h-1 v1 h-1 v-1 h-2 v-1 h-1 v-2 h2 v-2 m4,6 h1 v1 h2 v1 h1 v2 h-2 v2 h-2 v-1 h-1 v-4 h1 z" />
        <rect x={1} y={9} width={1} height={1} />
        <rect x={10} y={2} width={1} height={1} />
      </g>
      <g fill={color2}>
        <path d="m6,4  h1 v-2 h1 v-1 h2 v2 h2 v2 h-1 v1 h-4 v-1 h-1 v-1 m-1,2 v1 h1 v1 h-1 v2 h-1 v1 h-2 v-2 h-2 v-2 h1 v-1 z" />
        <rect x={2} y={1} width={1} height={1} />
        <rect x={9} y={10} width={1} height={1} />
      </g>
    </>
  ),
}
export const KINDS = Object.keys(PETALS)

const Petals = ({
  color = DEFAULT_COLOR,
  color2 = DEFAULT_COLOR_2,
  kind = "clover",
}) => React.createElement(PETALS[kind] || PETALS[KINDS[0]], { color, color2 })

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
