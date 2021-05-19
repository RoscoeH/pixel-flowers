/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed, Link } from "theme-ui"
import { useHistory, Link as RouterLink } from "react-router-dom"

import Layout from "../components/layout"
import EvolvingFlower from "../components/EvolvingFlower"
import Explainer from "../components/Explainer"
import RandomFlowers from "../components/RandomFlowers"
import Button from "../components/Button"

function Section({ children }) {
  return <div sx={{ textAlign: "center", mb: 9 }}>{children}</div>
}

const Home = () => {
  const history = useHistory()
  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <Section>
        <EvolvingFlower />
        <Themed.p>
          66 flower parts 🌱
          <br />
          Millions of colors 🌈
          <br />
          <strong>Billions of combinations ✨</strong>
        </Themed.p>
        <Button onClick={() => history.push("/designer")}>
          Design Your Own
        </Button>
      </Section>
      <Section>
        <Themed.h2>How does it work?</Themed.h2>
        <Explainer />
      </Section>
      <Section>
        <Themed.h2>Looking for inspiration?</Themed.h2>
        <Themed.p>Here's a selection of random flowers 🎲</Themed.p>
        <RandomFlowers />
        <Themed.p>
          Want to see more? Check out the{" "}
          <Link href="/garden" to="/garden" as={RouterLink}>
            endless garden
          </Link>
          .
        </Themed.p>
      </Section>
    </Layout>
  )
}

export default Home
