import { useState } from "react"
import random from "lodash/random"
import { random as randomColor } from "@ctrl/tinycolor"

import { KINDS as STEMS } from "src/paths/stems"
import { KINDS as PETALS } from "src/paths/petals"
import { KINDS as PISTILS } from "src/paths/pistils"

const PARTS = {
  pistil: PISTILS,
  petals: PETALS,
  stem: STEMS,
}

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

export function useFlower(init) {
  const [flower, setFlower] = useState(init)

  function randomFlower() {
    setFlower(pickRandomFlower())
  }

  function setKind(part, kind) {
    setFlower({
      ...flower,
      [part]: kind,
    })
  }

  function prevKind(part) {
    const kinds = PARTS[part]
    const prevKindIndex = (kinds.indexOf(flower[part]) - 1) % kinds.length
    setKind(part, kinds[prevKindIndex])
  }

  function nextKind(part) {
    const kinds = PARTS[part]
    const nextKindIndex = (kinds.indexOf(flower[part]) + 1) % kinds.length
    setKind(part, kinds[nextKindIndex])
  }

  return { flower, setFlower, setKind, prevKind, nextKind, randomFlower }
}
