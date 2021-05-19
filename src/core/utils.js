import { escape, unescape } from "url-base64-node"

import { KINDS as STEMS } from "../paths/stems"
import { KINDS as PETALS } from "../paths/petals"
import { KINDS as PISTILS } from "../paths/pistils"
import { KINDS as POTS } from "../paths/pots"

export function encodeObject(object) {
  const jsonString = JSON.stringify(object)
  return Buffer.from(jsonString).toString("base64")
}

export function decodeObject(object) {
  const jsonString = Buffer.from(object, "base64")
  return JSON.parse(jsonString)
}

export function encode(str) {
  return Buffer.from(str).toString("base64")
}

export function decode(str) {
  return Buffer.from(str, "base64").toString()
}

export function urlEncode(object) {
  const base64 = encode(object)
  return escape(base64)
}

export function urlDecode(url) {
  const base64 = unescape(url)
  return decode(base64)
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function range(n) {
  return [...Array(n).keys()]
}

export function flowerToString({
  stem,
  pistil,
  petals,
  pot,
  petalsEnabled,
  potEnabled,
  backgroundColor,
  stemColor,
  stemColor2,
  pistilColor,
  petalsColor,
  petalsColor2,
  potColor,
  potColor2,
}) {
  const segments = []
  segments.push(STEMS.indexOf(stem))
  segments.push(PISTILS.indexOf(pistil))
  segments.push(PETALS.indexOf(petals))
  segments.push(POTS.indexOf(pot))
  segments.push(petalsEnabled ? 1 : 0)
  segments.push(potEnabled ? 1 : 0)
  segments.push(
    backgroundColor,
    stemColor,
    stemColor2,
    pistilColor,
    petalsColor,
    petalsColor2,
    potColor,
    potColor2
  )
  return segments.join("-")
}

export function stringToFlower(string) {
  const segments = string.split("-")

  return {
    stem: STEMS[segments.shift()],
    pistil: PISTILS[segments.shift()],
    petals: PETALS[segments.shift()],
    pot: POTS[segments.shift()],
    petalsEnabled: segments.shift() === "1",
    potEnabled: segments.shift() === "1",
    backgroundColor: segments.shift(),
    stemColor: segments.shift(),
    stemColor2: segments.shift(),
    pistilColor: segments.shift(),
    petalsColor: segments.shift(),
    petalsColor2: segments.shift(),
    potColor: segments.shift(),
    potColor2: segments.shift(),
  }
}
