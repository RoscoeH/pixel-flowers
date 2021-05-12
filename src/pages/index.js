/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed, Link } from "theme-ui"
import { Link as GatsbyLink, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EvolvingFlower from "../components/EvolvingFlower"
import Explainer from "../components/Explainer"
import RandomFlowers from "../components/RandomFlowers"
import Button from "../components/Button"

function Section({ children }) {
  return <div sx={{ textAlign: "center", mb: 9 }}>{children}</div>
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
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
        <Themed.h2>How does it work?</Themed.h2>
        <Explainer />
      </Section>
      <Section>
        <Themed.h2>Looking for inspiration?</Themed.h2>
        <Themed.p>Here's a selection of random flowers 🎲</Themed.p>
        <RandomFlowers />
        <Themed.p>
          Want to see more? Check out the{" "}
          <Link to="/garden" as={GatsbyLink}>
            endless garden
          </Link>
          .
        </Themed.p>
      </Section>
    </main>
    <footer
      sx={{
        bg: "muted2",
        fontSize: 0,
        textAlign: "center",
        py: 1,
      }}
    >
      <Themed.p>
        Made with 💜 by <Link href="https://roscoe.dev">roscoe.dev</Link>
        <br />
        Check out my other{" "}
        <Link href="https://roscoe.dev/projects">web thingies</Link>
        <br />
        Want to support me?{" "}
        <Link href="https://www.buymeacoffee.com/roscoe.dev">
          buy me a coffee
        </Link>{" "}
        ☕<br />
        Copyright &copy; {new Date().getFullYear()}{" "}
        <Link href="https://roscoe.dev">roscoe.dev</Link>
      </Themed.p>
    </footer>
  </Layout>
)

export default IndexPage
