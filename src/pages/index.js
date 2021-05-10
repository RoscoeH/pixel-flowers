/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed, Link } from "theme-ui"
import { Link as GatsbyLink, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EvolvingFlower from "../components/EvolvingFlower"
import Button from "../components/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section sx={{ textAlign: "center", mb: 5 }}>
      <EvolvingFlower />
      <Themed.p>
        66 flower parts.
        <br />
        16 million colors.
        <br />
        <strong>Billions of combinations.</strong>
      </Themed.p>
      <Button onClick={() => navigate("/designer")}>Design Your Own</Button>
    </section>
    <section sx={{ textAlign: "center" }}>
      <Themed.p>
        Looking for inspiration?
        <br />
        Here's a selection of random flowers
      </Themed.p>
      <Themed.p>Selection of Flowers</Themed.p>
      <Themed.p>
        Want to see more? Check out the{" "}
        <Link to="/garden" as={GatsbyLink}>
          endless garden
        </Link>
        .
      </Themed.p>
    </section>
  </Layout>
)

export default IndexPage
