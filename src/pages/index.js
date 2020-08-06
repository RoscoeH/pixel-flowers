import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfiniteFlowers from "../components/infiniteFlowers"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>A pixelated art experiment.</p>
    <p>
      Scroll down to generate infinite random flowers. Click on any flower to
      customize, share or buy it as a print!
    </p>
    <InfiniteFlowers />
  </Layout>
)

export default IndexPage
