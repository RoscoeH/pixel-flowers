import { escape, unescape } from "url-base64-node"

export function encode(object) {
  const jsonString = JSON.stringify(object)
  return Buffer.from(jsonString).toString("base64")
}

export function decode(str) {
  const jsonString = Buffer.from(str, "base64")
  return JSON.parse(jsonString)
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
