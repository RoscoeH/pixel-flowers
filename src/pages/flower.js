/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import { TinyColor } from "@ctrl/tinycolor"
import { ThemeProvider } from "theme-ui"

import SEO from "../components/seo"
import { FlowerSvg } from "../components/flower"
import { urlDecode } from "../util/encode"
import { useFlower } from "../hooks/flower"

const PARTS = ["pistil", "petals", "stem"]

const initMenu = () => ({
  pistil: {
    open: false,
  },
  petals: {
    open: false,
  },
  stem: {
    open: false,
  },
})

const Page = ({ id }) => {
  const { flower, setFlower, prevKind, nextKind } = useFlower(urlDecode(id))
  const [menu, setMenu] = useState(initMenu())

  const toggleMenu = part => () => {
    console.log("set menu " + part)
    setMenu({
      ...menu,
      [part]: { ...menu[part], open: !menu[part].open },
    })
  }

  return (
    <ThemeProvider
      theme={{
        colors: { background: flower ? flower.backgroundColor : "blue" },
      }}
    >
      <div sx={{ height: "100%", bg: "background" }}>
        <SEO title="Flower" />
        <FlowerSvg width="100%" height={320} {...flower} />
        <PartMenu>
          {PARTS.map((part, i) => (
            <PartMenuItem
              key={i}
              name={part}
              kind={flower[part]}
              onClick={toggleMenu(part)}
              onPrev={() => prevKind(part)}
              onNext={() => nextKind(part)}
              open={menu[part].open}
            />
          ))}
        </PartMenu>
      </div>
    </ThemeProvider>
  )
}

const PartMenu = ({ children }) => (
  <div sx={{ width: "100%", px: 3 }}>{children}</div>
)
const PartMenuItem = ({
  name,
  kind,
  open,
  onClick,
  onPrev,
  onNext,
  ...props
}) => {
  return (
    <div
      sx={{
        bg: "muted",
        "&:not(:last-child)": {
          mb: 2,
        },
      }}
      {...props}
    >
      <div sx={{ p: 3 }} onClick={onClick}>
        {name}
      </div>
      {open && (
        <div sx={{ px: 3, pb: 3, display: "flex" }}>
          <Button onClick={onPrev}>&lt;</Button>
          <span sx={{ px: 2, flex: "1 1 auto", textAlign: "center" }}>
            {kind}
          </span>
          <Button onClick={onNext}>&gt;</Button>
        </div>
      )}
    </div>
  )
}

const Button = ({ children, ...props }) => (
  <button sx={{ border: "none", bg: "muted", width: 50 }} {...props}>
    {children}
  </button>
)

const FlowerPage = () => (
  <React.Fragment>
    <Router>
      <Page path="/flower/:id" />
    </Router>
  </React.Fragment>
)

export default FlowerPage
