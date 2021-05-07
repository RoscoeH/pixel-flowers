import React, { useState, useContext, createContext } from "react"
import random from "lodash/random"
import { random as randomColor } from "@ctrl/tinycolor"

import { KINDS as STEMS } from "../paths/stems"
import { KINDS as PETALS } from "../paths/petals"
import { KINDS as PISTILS } from "../paths/pistils"
import { KINDS as POTS } from "../paths/pots"

export const PARTS = {
  pistil: PISTILS,
  petals: PETALS,
  stem: STEMS,
  pot: POTS,
}

const MUTABLE_PARTS = [
  "pot",
  "potColor",
  "potEnabled",
  "stem",
  "stemColor",
  "stemColor2",
  "pistil",
  "pistilColor",
  "petals",
  "petalsColor",
  "petalsColor2",
  "petalsEnabled",
]

const PETALS_CHANCE = 0.95
const POT_CHANCE = 0.75

function pickRandomParts() {
  return {
    petals: PETALS[random(PETALS.length - 1)],
    stem: STEMS[random(STEMS.length - 1)],
    pistil: PISTILS[random(PISTILS.length - 1)],
    pot: POTS[random(POTS.length - 1)],
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

  const potColor = randomColor().desaturate(50).darken()
  const potColor2 = randomColor()

  return {
    backgroundColor: backgroundColor.toHexString(),
    pistilColor: pistilColor.toHexString(),
    petalsColor: petalsColor.toHexString(),
    petalsColor2: petalsColor2.toHexString(),
    stemColor: stemColor.toHexString(),
    stemColor2: stemColor2.toHexString(),
    potColor: potColor.toHexString(),
    potColor2: potColor2.toHexString(),
  }
}

export function pickRandomFlower() {
  return {
    ...pickRandomParts(),
    ...pickRandomColors(),
    petalsEnabled: Math.random() <= PETALS_CHANCE,
    potEnabled: Math.random() <= POT_CHANCE,
  }
}

export function useFlower(init) {
  const [flower, setFlower] = useState(init)

  function randomFlower() {
    setFlower(pickRandomFlower())
  }

  function mutateFlower() {
    const randomPart = MUTABLE_PARTS[random(MUTABLE_PARTS.length - 1)]

    let newValue
    if (/Color/.test(randomPart)) {
      newValue = randomColor().toHexString()
    } else if (/Enabled/.test(randomPart)) {
      newValue = Math.random() < 0.8
    } else {
      newValue = PARTS[randomPart][random(PARTS[randomPart].length - 1)]
    }

    setKind(randomPart, newValue)
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

  return {
    flower,
    setFlower,
    setKind,
    prevKind,
    nextKind,
    randomFlower,
    mutateFlower,
  }
}

const FlowerContext = createContext()

export function FlowerProvider({ flower, children }) {
  const value = useFlower(flower)
  return (
    <FlowerContext.Provider value={value}>{children}</FlowerContext.Provider>
  )
}

export function useFlowerContext() {
  return useContext(FlowerContext)
}

export function usePart(part) {
  const { flower, setKind } = useFlowerContext()

  const partRegex = new RegExp(`${part}*`)
  const partProperties = Object.keys(flower)
    .filter(property => partRegex.test(property))
    .reduce((obj, key) => ({ ...obj, [key]: flower[key] }), {})

  const colorSetters = {
    setColor: color => setKind(`${part}Color`, color),
    setColor2: flower[`${part}Color2`]
      ? color => setKind(`${part}Color2`, color)
      : null,
  }

  const partEnabled = `${part}Enabled`

  return {
    properties: partProperties,
    setKind: kind => setKind(part, kind),
    ...colorSetters,
    togglePart:
      typeof flower[partEnabled] !== "undefined"
        ? () => setKind(partEnabled, !flower[partEnabled])
        : undefined,
  }
}
