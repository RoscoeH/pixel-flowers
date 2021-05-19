/** @jsxImportSource theme-ui */
import { Helmet } from "react-helmet-async"
import { Themed, Link } from "theme-ui"

import { pickRandomFlower, useFlower } from "../hooks/useFlower"
import Layout from "../components/Layout"
import { FlowerSvg as Flower } from "../components/Flower"

const NotFoundPage = () => {
  const { flower } = useFlower(pickRandomFlower())
  return (
    <Layout>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <Themed.h2>Oops, page not found</Themed.h2>
      <Themed.p>
        The page you're looking for doesn't exist. Please check the URL for
        mistakes or head <Link href="/">to the home page</Link>.
      </Themed.p>
      <Themed.p>Here's a flower to cheer you up 💜</Themed.p>
      <div sx={{ maxWidth: 12, m: "0 auto" }}>
        <Flower
          {...flower}
          backgroundColor="transparent"
          width="100%"
          height="100%"
          rounded
        />
      </div>
    </Layout>
  )
}

export default NotFoundPage
