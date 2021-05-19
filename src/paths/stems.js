import React from "react"

const STEMS = {
  a: [
    <path d="M3 0H2V4H3V13H4V4H3V0Z" />,
    <>
      <rect x="2" y="8" width="1" height="1" />
      <rect x="1" y="7" width="1" height="1" />
    </>,
  ],
  b: [
    <path d="M4 0H5V4H4V0ZM4 4V13H3V4H4Z" />,
    <>
      <rect x="4" y="9" width="1" height="1" />
      <rect x="5" y="8" width="1" height="1" />
      <rect x="2" y="5" width="1" height="1" />
      <rect x="1" y="4" width="1" height="1" />
    </>,
  ],
  c: [
    <path d="M4 0H3V3H2V10H3V13H4V10H3V3H4V0Z" />,
    <>
      <rect x="1" y="6" width="1" height="1" />
      <rect y="5" width="1" height="1" />
    </>,
  ],
  d: [
    <path d="M4 0H3V3H4V10H3V13H4V10H5V3H4V0Z" />,
    <>
      <rect x="3" y="7" width="1" height="1" />
      <rect x="2" y="6" width="1" height="1" />
      <rect x="5" y="7" width="1" height="1" />
      <rect x="6" y="6" width="1" height="1" />
    </>,
  ],
  e: [
    <path d="M3 0H2V10H3V13H4V10H3V0Z" />,
    <>
      <rect x="3" y="8" width="1" height="1" />
      <rect x="4" y="7" width="1" height="1" />
      <rect x="1" y="7" width="1" height="1" />
      <rect y="6" width="1" height="1" />
    </>,
  ],
  f: [
    <path d="M4 0H5V10H4V0ZM4 10V13H3V10H4Z" />,
    <>
      <rect x="2" y="9" width="1" height="1" />
      <rect x="1" y="8" width="1" height="1" />
      <rect x="3" y="5" width="1" height="1" />
      <rect x="2" y="4" width="1" height="1" />
    </>,
  ],
  g: [
    <path d="M4 0H3V3H2V4H1V5V8V9H2V10H3V13H4V10H3V9H2V8V5V4H3V3H4V0Z" />,
    <rect x="2" y="5" width="1" height="1" />,
  ],
  h: [
    <path d="M3 0H4V3H3V0ZM5 4H4V3H5V4ZM5 9H6V4H5V9ZM4 10H5V9H4V10ZM4 10V13H3V10H4Z" />,
    <>
      <rect x="4" y="7" width="1" height="1" />
      <rect x="3" y="6" width="1" height="1" />
    </>,
  ],
  i: [
    <path d="M3 0H4V13H3V0Z" />,
    <path d="M3 4H2V5H3V4ZM5 12H4V11H5V12ZM4 8H5V9H4V8ZM3 10H2V11H3V10ZM2 7H3V8H2V7ZM5 5H4V6H5V5Z" />,
  ],
  j: [
    <path d="M4 0H3V1H2V2H3V3H4V4H3V5H2V6H3V7H4V8H3V9H2V10H3V11H4V12H3V13H4V12H5V11H4V10H3V9H4V8H5V7H4V6H3V5H4V4H5V3H4V2H3V1H4V0Z" />,
  ],
  k: [
    <rect x="3" width="1" height="13" />,
    <>
      <rect x="2" y="7" width="1" height="1" />
      <rect x="1" y="6" width="1" height="1" />
      <rect x="4" y="5" width="1" height="1" />
      <rect x="5" y="4" width="1" height="1" />
    </>,
  ],
  l: [
    <path d="M4 0H3V1V2H2V3H1V5H2V6H3V7H4V8H5V10H4V11H3V13H4V11H5V10H6V8H5V7H4V6H3V5H2V3H3V2H4V1V0Z" />,
    <>
      <rect x="5" y="6" width="1" height="1" />
      <rect x="6" y="5" width="1" height="1" />
    </>,
  ],
  m: [
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 0H3V3H2V4H1V6H2V7H3V8H5V10H4V11H3V13H4V11H5V10H6V8H5V7H6V6H5V5H3V6H2V4H3V3H4V0ZM3 6V7H5V6H3Z"
    />,
  ],
  n: [
    <path d="M4 0H3V2V3H2V4H3V5H5V6H2V7H1V8H2V9H4V10H3V13H4V10H5V9H4V8H2V7H5V6H6V5H5V4H3V3H4V2V0Z" />,
  ],
  o: [
    <path d="M4 0H3V4H2V5H1V7H2V8H3V13H4V8H5V7H6V5H5V4H4V0ZM4 4V5H5V7H4V8H3V7H2V5H3V4H4Z" />,
  ],
  p: [
    <path d="M4 0H3V3V8V13H4V8V3V0Z" />,
    <path d="M4 4H6V5H7V6H6H5V7H4V6V4ZM3 5H1V6H0V7H2V8H3V7V6V5Z" />,
  ],
}

export const KINDS = Object.keys(STEMS)
export default STEMS
