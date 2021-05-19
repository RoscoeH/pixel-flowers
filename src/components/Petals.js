/** @jsxImportSource theme-ui */
import PropTypes from "prop-types"

import PETALS from "../paths/petals"

const SIZE = 128
const RES = 20

export const KINDS = Object.keys(PETALS)

const Petals = ({
  color = "primary",
  color2 = "muted",
  kind = "daffodil",
  ...props
}) => {
  const [primaryPetals, secondaryPetals] = PETALS[kind] || PETALS[KINDS[0]]
  return (
    <g {...props}>
      <g sx={{ fill: color }}>{primaryPetals}</g>
      {secondaryPetals && <g sx={{ fill: color2 }}>{secondaryPetals}</g>}
    </g>
  )
}

Petals.propTypes = {
  /**
   * The kind of petals to display
   */
  kind: PropTypes.oneOf(KINDS),
  /**
   * The primary color of the petals
   */
  color: PropTypes.string,
  /**
   * The secondary color of the petals
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
