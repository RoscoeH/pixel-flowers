/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FlowerSvg } from "../components/flower"
import { urlDecode } from "../util/encode"

const Page = ({ id }) => {
  const flower = urlDecode(id)
  console.log(flower)
  return (
    <div sx={{ backgroundColor: flower.backgroundColor, height: "100%" }}>
      <SEO title="Flower" />
      <FlowerSvg width="100%" height={500} {...flower} />
    </div>
  )
}
const FlowerPage = () => (
  <React.Fragment>
    <Router>
      <Page path="/flower/:id" />
    </Router>
  </React.Fragment>
)

export default FlowerPage
