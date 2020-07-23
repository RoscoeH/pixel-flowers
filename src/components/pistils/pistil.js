import React from "react"
import PropTypes from "prop-types"

const SIZE = 128
const RES = 8
const DEFAULT_COLOR = "#ffeb00"
const SHADOW_1 = "rgba(0, 0, 0, 0.1)"

const Tiny = () => <rect x={1} y={1} width={2} height={2} />
const Plain = () => <path d="m1,0 h2 v1 h1 v2 h-1 v1 h-2 v-1 h-1 v-2 h1 z" />
const PISTILS = {
  tiny: Tiny,
  "tiny rounded": () => (
    <g>
      <Tiny />
      <rect x={1} y={2} width={2} height={1} fill={SHADOW_1} />
    </g>
  ),
  "tiny checkered": () => (
    <g>
      <Tiny />
      <path d="m2,2 v-1 h1 v1 h-2 v1 h1" fill={SHADOW_1} />
    </g>
  ),
  plain: Plain,
  rounded: () => (
    <g>
      <Plain />
      <path d="m0,2 h4 v1 h-1 v1 h-2 v-1 h-1 z" fill={SHADOW_1} />
    </g>
  ),
  checkered: () => (
    <g>
      <Plain />
      <path
        d="m1,3 h-1 v-1 h1 v-1 h1 v-1 h1 v1 h-1 v1 h-1 v1 h1 v-1 h1 v-1 h1 v1 h-1 v1 h-1 v1 h-1 z"
        fill={SHADOW_1}
      />
    </g>
  ),
  indented: () => (
    <g>
      <Plain />
      <rect x={1} y={1} width={2} height={2} fill={SHADOW_1} />
    </g>
  ),
  concave: () => (
    <g>
      <Plain />
      <rect x={0} y={1} width={4} height={2} fill={SHADOW_1} />
    </g>
  ),
  textured: () => (
    <g>
      <Plain />
      <path
        d="m2,1 v-1 h1 v1 h-3 v1 h2 v-1 m0,1 h2 v1 h-3 v1 h1 z"
        fill={SHADOW_1}
      />
    </g>
  ),
  zen: () => (
    <g>
      <Plain />
      <path d="m0,1 h1 v1 h2 v2 h-2 v-1 h-1 z" fill={SHADOW_1} />
    </g>
  ),
  sentient: () => (
    <g>
      <Plain />
      <path
        d="m1,1 h1 v1 h-1 v-1 m2,0 h1 v1 h-1 v-1 m-2,2 h2 v1 h-2 z"
        fill={SHADOW_1}
      />
    </g>
  ),
  hollow: () => (
    <g>
      <rect x={1} y={0} width={2} height={1} />
      <rect x={1} y={3} width={2} height={1} />
      <rect x={0} y={1} width={1} height={2} />
      <rect x={3} y={1} width={1} height={2} />
    </g>
  ),
  frilly: () => (
    <g>
      <rect x={0} y={0} width={1} height={1} />
      <rect x={3} y={0} width={1} height={1} />
      <rect x={0} y={3} width={1} height={1} />
      <rect x={3} y={3} width={1} height={1} />
      <rect x={1} y={1} width={2} height={2} />
      <rect x={1} y={1} width={2} height={2} fill={SHADOW_1} />
    </g>
  ),
}
export const KINDS = Object.keys(PISTILS)

const Pistil = ({ color = DEFAULT_COLOR, kind = "plain" }) => (
  <g fill={color}>{React.createElement(PISTILS[kind] || PISTILS[KINDS[0]])}</g>
)
Pistil.propTypes = {
  color: PropTypes.string,
  kind: PropTypes.oneOf(KINDS),
}

const PistilSvg = props => (
  <svg width={SIZE} height={SIZE} viewBox={`0 0 ${RES} ${RES}`}>
    <g transform={`translate(${RES / 4}, ${RES / 4})`}>
      <Pistil {...props} />
    </g>
  </svg>
)

export default Pistil

export { PistilSvg }

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   scale: PropTypes.oneOf(["small", "normal", "big"]),
// }
// Button.defaultProps = {
//   scale: "normal",
// }
