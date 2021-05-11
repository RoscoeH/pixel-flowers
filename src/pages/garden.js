/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed } from "theme-ui"

import useHasScrolled from "../hooks/useHasScrolled"
import Layout from "../components/layout"
import InfiniteFlowers from "../components/InfiniteFlowers"
import Button from "../components/Button"

export default function Garden() {
  const hasScrolled = useHasScrolled()
  return (
    <Layout>
      <Themed.p>Looking for inspiration?</Themed.p>
      <Themed.p>
        Scroll down through the endless garden of random pixel flowers. Click on
        one you like to share or customize.
      </Themed.p>
      <InfiniteFlowers />
      {hasScrolled && (
        <div sx={{ position: "fixed", bottom: 4, right: 4 }}>
          <Button icon="chevronUp" />
        </div>
      )}
    </Layout>
  )
}
