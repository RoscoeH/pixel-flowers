import React from "react"
import PropTypes from "prop-types"

import Stem from "./stem"
import Petals from "./petals"
import Pistil from "./pistil"

const SIZE = 128
const RES = 32

const Flower = ({ stem = "a", petals = "daisy", pistil = "tiny" }) => (
  <>
    <Stem kind={stem} transform="translate(8,9)" />
    <Petals kind={petals} transform="translate(6,1)" />
    <Pistil kind={pistil} transform="translate(10,5)" />
  </>
)

export default Flower

const FlowerSvg = ({ onClick, ...props }) => (
  <svg
    width={SIZE}
    height={SIZE}
    viewBox={`0 0 ${RES} ${RES}`}
    style={{ border: `1px solid #ddd`, marginRight: "8px" }}
    shapeRendering="crispEdges"
    onClick={onClick}
  >
    <g transform="translate(4,4)">
      <Flower {...props} />
    </g>
  </svg>
)

export { FlowerSvg }
