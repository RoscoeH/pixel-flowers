/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed } from "theme-ui"

import { useFlower, pickRandomFlower } from "../hooks/useFlower"
import Layout from "../components/layout"
import { FlowerSvg as Flower } from "../components/Flower"
import ButtonGroup from "../components/ButtonGroup"
import Button from "../components/Button"

function Buttons({ children }) {
  return (
    <div
      sx={{
        py: 3,
        "& > *:not(:last-child)": {
          mb: 3,
        },
      }}
    >
      {children}
    </div>
  )
}

export default function FlowerPage() {
  const { flower } = useFlower(pickRandomFlower())
  return (
    <Layout>
      {/* <Themed.h2>Save or Share</Themed.h2> */}
      <Flower {...flower} width="100%" height="100%" rounded />
      <Buttons>
        <ButtonGroup expand>
          <Button icon="download">Save SVG</Button>
          <Button icon="download">Save PNG</Button>
        </ButtonGroup>
        <ButtonGroup expand>
          <Button icon="facebook" color="social.facebook">
            Share to Facebook
          </Button>
        </ButtonGroup>
        <ButtonGroup expand>
          <Button icon="brush" secondary>
            Customise
          </Button>
        </ButtonGroup>
      </Buttons>
    </Layout>
  )
}
