import React from "react"
import PropTypes from "prop-types"

const SIZE = 128
const RES = 20

const PETALS = {
  clover: [
    <>
      <path d="m3,0 h2 v1 h1 v4 h-1 v1 h-1 v-1 h-2 v-1 h-1 v-2 h2 v-2 m4,6 h1 v1 h2 v1 h1 v2 h-2 v2 h-2 v-1 h-1 v-4 h1 z" />
      <rect x={1} y={9} width={1} height={1} />
      <rect x={10} y={2} width={1} height={1} />
    </>,
    <>
      <path d="m6,4  h1 v-2 h1 v-1 h2 v2 h2 v2 h-1 v1 h-4 v-1 h-1 v-1 m-1,2 v1 h1 v1 h-1 v2 h-1 v1 h-2 v-2 h-2 v-2 h1 v-1 z" />
      <rect x={2} y={1} width={1} height={1} />
      <rect x={9} y={10} width={1} height={1} />
    </>,
  ],
  daisy: [
    <>
      <path d="m0,4 h1 v-2 h2 v1 h1 v1 h1 v2 h-2 v-1 h-3 z" />
      <path d="m6,3 h1 v-3 h1 v1 h2 v2 h-1 v1 h-1 v1 h-2 z" />
      <path d="m7,6 h2 v1 h3 v1 h-1 v2 h-2 v-1 h-1 v-1 h-1 z" />
      <path d="m4,7 h2 v2 h-1 v3 h-1 v-1 h-2 v-2 h1 v-1 h1 z" />
    </>,
    <>
      <path d="m4,0 h1 v1 h1 v4 h-1 v-1 h-1 v-2 h-1 v-1 h1 z" />
      <path d="m10,3 h1 v1 h1 v1 h-1 v1 h-4 v-1 h1 v-1 h2 z" />
      <path d="m6,7 h1 v1 h1 v2 h1 v1 h-1 v1 h-1 v-1 h-1 z" />
      <path d="m1,6 h4 v1 h-1 v1 h-2 v1 h-1 v-1 h-1 v-1 h1 z" />
    </>,
  ],
  daffodil: [
    <>
      <path d="m3,0 h2 v1 h1 v4 h-2 v-1 h-1 z" />
      <path d="m8,3 h4 v2 h-1 v1 h-4 v-2 h1 z" />
      <path d="m1,6 h4 v2 h-1 v1 h-4 v-2 h1 z" />
      <path d="m6,7 h2 v1 h1 v4 h-2 v-1 h-1 z" />
    </>,
    <>
      <path d="m6,1 h1 v-1 h2 v3 h-1 v1 h-1 v1 h-1 z" />
      <path d="m7,6 h4 v1 h1 v2 h-3 v-1 h-1 v-1 h-1 z" />
      <path d="m5,7 h1 v4 h-1 v1 h-2 v-3 h1 v-1 h1 z" />
      <path d="m0,3 h3 v1 h1 v1 h1 v1 h-4 v-1 h-1 z" />
    </>,
  ],
  tulip: [
    <>
      <path d="m5,1 h1 v1 h1 v2 h1 v2 h-1 v-1 h-2 v1 h-1 v-2 h1 z" />c
      <path d="m0,3 h2 v1 h1 v2 h1 v2 h1 v2 h-1 v-1 h-2 v-5 h-2 z" />
      <path d="m5,7 h1 v1 h1 v-1 h1 v-1 h1 v-2 h1 v-1 h2 v1 h-2 v5 h-2 v1 h-2 v1 h-1 v-1 h1 v-2 h-1 z" />
    </>,
    <>
      <path d="m1,4 h1 v5 h2 v1 h1 v1 h-1 v-1h-2 v-1 h-1 z" />
      <path d="m4,2 h1 v2 h-1 v2 h1 v2 h1 v2 h-1 v-2 h-1 v-2 h-1 v-2 h1 z" />
      <path d="m5,0 h1 v1 h1 v1 h1 v2 h1 v2 h-1 v1 h-1 v1 h-1 v-1 h1 v-1 h1 v-2 h-1 v-2 h-1 v-1 h-1 z" />
      <path d="m10,4 h1 v5 h-1 v1 h-2 v1 h-2 v-1 h2 v-1 h2 z" />
    </>,
  ],
  bubble: [
    <>
      <path d="m4,0 h4 v1 h2 v1 h1 v2 h1 v4 h-1 v2 h-1 v1 h-2 v-1 h2 v-2 h1 v-4 h-1 v-2 h-2 v-1 h-4 z" />
      <path d="m4,1 h-2 v1 h-1 v2 h-1 v4 h1 v2 h1 v1 h2 v1 h4 v-1 h-4 v-1 h-2 v-2 h-1 v-4 h1 v-2 h2 z" />
      <path d="m8,3 h1 v1 h1 v2 h-1 v-2 h-1 z" />
    </>,
  ],
}
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
