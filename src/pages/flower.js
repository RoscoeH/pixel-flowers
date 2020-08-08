/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import { TinyColor } from "@ctrl/tinycolor"
import { Global } from "@emotion/core"
import { ThemeProvider } from "theme-ui"
import { CaretLeft, CaretRight } from "react-bytesize-icons"

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

  const collapseMenu = () => {
    const collapsedMenu = menu
    Object.keys(menu).forEach(submenu => {
      collapsedMenu[submenu] = {
        ...menu[submenu],
        open: false,
      }
    })
    setMenu(collapsedMenu)
  }

  const toggleMenu = part => () => {
    const open = !menu[part].open
    collapseMenu()
    setMenu({
      ...menu,
      [part]: { ...menu[part], open },
    })
  }

  const setColor = (part, colorNumber) => ({ target }) => {
    setFlower({
      ...flower,
      [`${part}Color${colorNumber || ""}`]: target.value,
    })
  }

  return (
    <ThemeProvider
      theme={{
        colors: { background: flower.backgroundColor },
      }}
    >
      <Global
        styles={theme => ({
          body: {
            backgroundColor: theme.colors.background,
          },
        })}
      />
      <div sx={{ height: "100%" }}>
        <SEO title="Flower" />
        <FlowerSvg width="100%" height={320} {...flower} />-
        <button
          className="snipcart-add-item"
          data-item-id={"flower1"}
          data-item-price="30"
          data-item-url={`https://beta.pixelflowers.roscoehart.com`}
          data-item-description="High quality pixel flower art print"
          data-item-image="data:image/jpeg;base64,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"
          data-item-quantity="1"
          data-item-name="Pixel Flowers"
        >
          Add to cart
        </button>
        <PartMenu>
          {PARTS.map((part, i) => (
            <PartMenuItem
              key={i}
              name={part}
              kind={flower[part]}
              onClick={toggleMenu(part)}
              onSetColor={setColor(part)}
              onSetColor2={setColor(part, 2)}
              onPrev={() => prevKind(part)}
              onNext={() => nextKind(part)}
              color={flower[`${part}Color`]}
              color2={flower[`${part}Color2`]}
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
  open,
  name,
  kind,
  color,
  color2,
  onClick,
  onPrev,
  onNext,
  onSetColor,
  onSetColor2,
  ...props
}) => {
  return (
    <div
      sx={{
        bg: "muted",
        p: 2,
        "&:not(:last-child)": {
          mb: 2,
        },
        "& > *:not(:last-child)": {
          mb: 2,
        },
      }}
      {...props}
    >
      <div
        sx={{
          fontSize: 4,
          textTransform: "uppercase",
          color: "text",
        }}
        onClick={onClick}
      >
        {name}
      </div>
      {open && (
        <React.Fragment>
          <div
            sx={{
              display: "flex",
              "& > *:not(:last-child)": {
                mr: 2,
              },
            }}
          >
            <Button onClick={onPrev}>
              <CaretLeft width={24} height={24} sx={{ display: "block" }} />
            </Button>
            <span
              sx={{
                bg: "muted",
                flex: "1 1 auto",
                textAlign: "center",
                fontSize: 3,
                lineHeight: 2,
              }}
            >
              {kind}
            </span>
            <Button onClick={onNext}>
              <CaretRight width={24} height={24} sx={{ display: "block" }} />
            </Button>
          </div>

          <input
            sx={{
              bg: "muted",
              flex: "1 1 auto",
              textAlign: "center",
              fontSize: 3,
              lineHeight: 2,
              border: "none",
              bg: color,
              color: new TinyColor(color).isDark() ? "background" : "text",
              width: "100%",
            }}
            value={color}
            onChange={onSetColor}
          />
          {color2 && (
            <input
              sx={{
                bg: "muted",
                flex: "1 1 auto",
                textAlign: "center",
                fontSize: 3,
                lineHeight: 2,
                border: "none",
                bg: color2,
                color: new TinyColor(color).isDark() ? "background" : "text",
                width: "100%",
              }}
              value={color2}
              onChange={onSetColor2}
            />
          )}
        </React.Fragment>
      )}
    </div>
  )
}

const Button = ({ children, ...props }) => (
  <button
    sx={{
      border: "none",
      bg: "muted",
      px: 2,
      height: "auto",
      display: "inline-block",
      color: "text",
    }}
    {...props}
  >
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
