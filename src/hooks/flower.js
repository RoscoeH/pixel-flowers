import { useState } from "react"
import random from "lodash/random"
import { random as randomColor } from "@ctrl/tinycolor"

import { KINDS as STEMS } from "src/paths/stems"
import { KINDS as PETALS } from "src/paths/petals"
import { KINDS as PISTILS } from "src/paths/pistils"

function pickRandomParts() {
  return {
    petals: PETALS[random(PETALS.length - 1)],
    stem: STEMS[random(STEMS.length - 1)],
    pistil: PISTILS[random(PISTILS.length - 1)],
  }
}

function pickRandomColors() {
  const backgroundColor = randomColor({ luminosity: "light" })
    .tint(85)
    .desaturate(30)
  const [pistilColor, petalsColor, petalsColor2] = randomColor({
    count: 4,
  })
  const stemColor = randomColor().darken()
  const stemColor2 = stemColor.isDark()
    ? stemColor.lighten()
    : stemColor.darken()

  return {
    backgroundColor: backgroundColor.toString("hex6"),
    pistilColor: pistilColor.toString("hex6"),
    petalsColor: petalsColor.toString("hex6"),
    petalsColor2: petalsColor2.toString("hex6"),
    stemColor: stemColor.toString("hex6"),
    stemColor2: stemColor2.toString("hex6"),
  }
}

export function pickRandomFlower() {
  return {
    ...pickRandomParts(),
    ...pickRandomColors(),
  }
}

export function useFlower() {
  const [flower, setFlower] = useState()

  function randomFlower() {
    setFlower(pickRandomFlower())
  }
  return { flower, setFlower, randomFlower }
}
