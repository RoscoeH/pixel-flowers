/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { useParams } from "react-router-dom"
import toImg from "react-svg-to-image"

import { useFlower, pickRandomFlower } from "../hooks/useFlower"
import Layout from "../components/layout"
import { FlowerSvg as Flower } from "../components/Flower"
import ButtonGroup from "../components/ButtonGroup"
import Button from "../components/Button"
import { stringToFlower, urlDecode } from "../core/utils"

function downloadImage(format = "png") {
  toImg("svg#download", "pixel-flower", {
    format,
    scale: 16,
    quality: 1,
    download: true,
  })
}

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

function Hidden({ children }) {
  return <div sx={{ height: 0 }}>{children}</div>
}

export default function FlowerPage() {
  const { id } = useParams()
  const initialFlower = id ? stringToFlower(urlDecode(id)) : pickRandomFlower()
  const { flower } = useFlower(initialFlower)

  const fbLink =
    "https://www.facebook.com/sharer/sharer.php?u=https%3A//pixelflowers.roscoe.dev/flower/1234"

  const copyLink = () =>
    window.isSecureContext
      ? navigator.clipboard.writeText(window.location.href)
      : console.error("Cannot copy to clipboard, insecure context")
  const savePng = () => downloadImage("png")

  return (
    <Layout>
      <Flower {...flower} width="100%" height="100%" rounded />
      <Themed.h3 sx={{ mb: 0, textAlign: "center" }}>Save or Share</Themed.h3>
      <Buttons>
        <ButtonGroup expand>
          <Button icon="link" onClick={copyLink}>
            Copy Link
          </Button>
          <Button icon="download" onClick={savePng}>
            Save PNG
          </Button>
        </ButtonGroup>
        <ButtonGroup expand>
          <Button icon="facebook" color="social.facebook" href={fbLink}>
            Share to Facebook
          </Button>
        </ButtonGroup>
        <ButtonGroup expand>
          <Button icon="brush" secondary>
            Customise
          </Button>
        </ButtonGroup>
      </Buttons>
      <Hidden>
        <Flower id="download" {...flower} width="32" height="32" />
      </Hidden>
    </Layout>
  )
}
