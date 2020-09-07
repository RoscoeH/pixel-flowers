import React from "react"

const POTS = {
  a: [
    <>
      <path d="M3 6H8V7V8H7V9H4V8H3V7V6Z" fill="#EBA859" />
      <path d="M8 6H7V8H6V9H7V8H8V6Z" fill="white" fill-opacity="0.2" />
      <path d="M3 6H4V8H3V6ZM4 8V9H5V8H4Z" fill="black" fill-opacity="0.2" />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 5 6)"
        fill="black"
        fill-opacity="0.1"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 7 6)"
        fill="white"
        fill-opacity="0.1"
      />
    </>,
  ],
}

export const KINDS = Object.keys(POTS)
export default POTS
