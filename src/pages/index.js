/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed, Link } from "theme-ui"
import { Link as GatsbyLink, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EvolvingFlower from "../components/EvolvingFlower"
import RandomFlowers from "../components/RandomFlowers"
import Button from "../components/Button"

function Section({ children }) {
  return <div sx={{ textAlign: "center", mb: 6 }}>{children}</div>
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <EvolvingFlower />
      <Themed.p>
        66 flower parts 🌱
        <br />
        16 million colors 🌈
        <br />
        <strong>Billions of combinations ✨</strong>
      </Themed.p>
      <Button onClick={() => navigate("/designer")}>Design Your Own</Button>
    </Section>
    <Section>
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
    </Section>
  </Layout>
)

export default IndexPage
