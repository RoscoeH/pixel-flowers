/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfiniteFlowers from "../components/infiniteFlowers"
import EvolvingFlower from "../components/EvolvingFlower"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section sx={{ textAlign: "center" }}>
      <EvolvingFlower />
      <p>
        66 flower parts.
        <br />
        16 million colors.
        <br />
        <strong>Billions of combinations.</strong>
      </p>
    </section>
    {/* <p>A pixelated art experiment.</p>
    <p>
      Scroll down to generate random flowers. Click any flower to customize,
      share or buy it as a print!
    </p> */}
    <InfiniteFlowers />
  </Layout>
)

export default IndexPage
