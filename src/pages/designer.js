/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { motion } from "framer-motion"
import useDimensions from "react-use-dimensions"
import { Global } from "@emotion/react"

import useIsClient from "../hooks/useIsClient"
import {
  FlowerProvider,
  useFlowerContext,
  useFlower,
  pickRandomFlower,
} from "../hooks/useFlower"
import { FlowerSvg as Flower } from "../components/Flower"

import Button from "../components/Button"
import FlowerConfig from "../components/FlowerConfig"

function HideOnDesktop({ children }) {
  return <div sx={{ display: [null, null, null, "none"] }}>{children}</div>
}

function HideOnMobile({ children }) {
  return <div sx={{ display: ["none", null, null, "block"] }}>{children}</div>
}

function Header({ children }) {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 3,
        maxWidth: [null, 12, null, 14],
        m: "0 auto",
      }}
    >
      <Global
        styles={{
          html: {
            overflow: "hidden",
          },
          body: {
            overflow: "hidden",
          },
        }}
      />
      {children}
    </div>
  )
}

function Content({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{
        display: [null, null, null, "flex"],
        flexDirection: ["column", null, null, "row"],
        maxWidth: [null, 12, null, 14],
        justifyContent: [null, null, null, "center"],
        alignItems: ["center", null, null, "flex-start"],
        m: "0 auto",
      }}
    >
      {children}
    </motion.div>
  )
}

export function Designer() {
  const { isClient, key } = useIsClient()
  const [dimensionsRef, { width }] = useDimensions()
  const { flower } = useFlowerContext()

  return (
    <div>
      <Header>
        <Themed.h1 sx={{ m: 0 }}>Design</Themed.h1>
        <Button>Done</Button>
      </Header>
      {isClient && (
        <Content key={key}>
          <div
            ref={dimensionsRef}
            sx={{
              flex: ["unset", null, null, "1 1 auto"],
              alignSelf: [null, null, null, "stretch"],
              bg: [null, null, null, flower.backgroundColor],
              borderTopLeftRadius: [null, null, null, 6],
              borderTopRightRadius: [null, null, null, 6],
              overflow: "hidden",
              px: [3, null, null, 0],
            }}
          >
            <Flower {...flower} width="100%" height={width * 0.9} rounded />
          </div>
          <HideOnDesktop>
            <FlowerConfig.Tabbed />
          </HideOnDesktop>
          <HideOnMobile>
            <FlowerConfig.Sidebar />
          </HideOnMobile>
        </Content>
      )}
    </div>
  )
}

export default function DesignerWrapper() {
  const { flower } = useFlower(pickRandomFlower())
  return (
    <FlowerProvider flower={flower}>
      <Designer />
    </FlowerProvider>
  )
}
