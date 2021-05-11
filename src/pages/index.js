/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed, Link } from "theme-ui"
import { Link as GatsbyLink, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EvolvingFlower from "../components/EvolvingFlower"
import RandomFlowers from "../components/RandomFlowers"
import Button from "../components/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section sx={{ textAlign: "center", mb: 6 }}>
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
    <section sx={{ textAlign: "center", mb: 6 }}>
      <Themed.p>
        Looking for inspiration?
        <br />
        Here's a selection of random flowers
      </Themed.p>
      <RandomFlowers />
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
