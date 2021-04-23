import React from "react"

const SHADOW_1 = "rgba(0,0,0,0.1)"
const SHADOW_2 = "rgba(0,0,0,0.2)"
const HIGHLIGHT_1 = "rgba(255,255,255,0.1)"
const HIGHLIGHT_2 = "rgba(255,255,255,0.2)"

const POTS = {
  a: [
    <>
      <path d="M3 6H8V7V8H7V9H4V8H3V7V6Z" />
      <path d="M8 6H7V8H6V9H7V8H8V6Z" fill={HIGHLIGHT_2} />
      <path d="M3 6H4V8H3V6ZM4 8V9H5V8H4Z" fill={SHADOW_2} />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 5 6)"
        fill={SHADOW_1}
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 7 6)"
        fill={HIGHLIGHT_1}
      />
    </>,
  ],
  b: [
    <>
      <rect x="3" y="6" width="5" height="2" fill="#0057FF" fillOpacity="0.6" />
      <rect x="4" y="8" width="3" height="1" fill="#0057FF" fillOpacity="0.6" />
      <rect x="3" y="5" width="1" height="3" fill={SHADOW_2} />
      <rect x="3" y="5" width="4" height="1" fill="white" fillOpacity="0.3" />
      <rect x="7" y="6" width="1" height="2" fill={HIGHLIGHT_2} />
      <rect x="6" y="8" width="1" height="1" fill={HIGHLIGHT_2} />
      <rect x="7" y="5" width="1" height="1" fill="white" fillOpacity="0.4" />
      <rect x="4" y="8" width="1" height="1" fill={SHADOW_2} />
    </>,
  ],
  c: [
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5H3V8H4V9H7V8H8H9V7H10V6H9V5H8H7H4ZM9 6V7H8V6H9Z"
      />
      <rect x="7" y="5" width="1" height="3" fill={HIGHLIGHT_2} />
      <path d="M4 5H3V8H4V5Z" fill={SHADOW_2} />
      <path d="M9 5H8V6H9V5Z" fill={SHADOW_2} />
      <path d="M10 6H9V7H10V6Z" fill={SHADOW_2} />
      <path d="M9 7H8V8H9V7Z" fill={SHADOW_2} />
      <path d="M5 5H4V9H5V5Z" fill={SHADOW_1} />
    </>,
  ],
  d: [
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4H2V6H3V7V8H4V9H7V8H8V7V6H9V4Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4H2V6H3V8H4V9H5V8H4V6H3V4Z"
        fill={SHADOW_2}
      />
      <rect x="3" y="4" width="1" height="2" fill={SHADOW_1} />
      <rect x="8" y="4" width="1" height="2" fill={HIGHLIGHT_2} />
      <rect x="4" y="6" width="1" height="2" fill={SHADOW_1} />
      <rect x="7" y="6" width="1" height="2" fill={HIGHLIGHT_2} />
      <rect x="6" y="6" width="1" height="2" fill={HIGHLIGHT_1} />
      <rect x="7" y="4" width="1" height="2" fill={HIGHLIGHT_1} />
      <rect x="6" y="8" width="1" height="1" fill={HIGHLIGHT_2} />
    </>,
  ],
  e: [
    <>
      <rect x="3" y="4" width="5" height="5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4H4V6V9H3V6V4Z"
        fill={SHADOW_2}
      />
      <rect x="4" y="4" width="1" height="5" fill={SHADOW_1} />
      <rect x="7" y="4" width="1" height="5" fill={HIGHLIGHT_2} />
      <rect x="6" y="4" width="1" height="5" fill={HIGHLIGHT_1} />
    </>,
  ],
  f: [
    <>
      <rect x="3" y="4" width="5" height="5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4H4V6V9H3V6V4Z"
        fill={SHADOW_2}
      />
      <rect x="4" y="4" width="1" height="5" fill={SHADOW_1} />
      <rect x="7" y="4" width="1" height="5" fill={HIGHLIGHT_2} />
      <rect x="6" y="4" width="1" height="5" fill={HIGHLIGHT_1} />
      <rect x="3" y="5" width="1" height="1" fill={SHADOW_2} />
      <rect x="4" y="5" width="1" height="1" fill={SHADOW_1} />
    </>,
    <rect x="3" y="5" width="5" height="1" />,
  ],
  g: [
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4H4V5H3V7V8H4V9H7V8H8V7V5H7V4Z"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 4 5)"
        fill={SHADOW_2}
      />
      <rect x="4" y="4" width="1" height="5" fill={SHADOW_1} />
      <rect x="6" y="4" width="1" height="5" fill={HIGHLIGHT_1} />
      <rect x="7" y="5" width="1" height="3" fill={HIGHLIGHT_2} />
    </>,
  ],
  h: [
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 6H3V8H4V9H7V8H8V6Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6H4V6.8V7.99998H3V6.8V6Z"
        fill={SHADOW_2}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8H5V8.39999V9H4V8.39999V8Z"
        fill={SHADOW_2}
      />
      <rect x="6" y="8" width="1" height="1" fill={HIGHLIGHT_2} />
      <rect x="7" y="7" width="1" height="1" fill={HIGHLIGHT_2} />
      <rect x="5" y="7" width="1" height="1" fill={HIGHLIGHT_2} />
      <rect x="6" y="6" width="1" height="1" fill={HIGHLIGHT_2} />
      <rect x="4" y="6" width="1" height="1" fill={HIGHLIGHT_2} />
    </>,
  ],
  i: [
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5H2V6H3V8H4V9H7V8H8V6H9V5H7V6H4V5Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6H4V6.8H3V6ZM3 6.80001H4V8.00001H3V6.80001Z"
        fill={SHADOW_2}
      />
      <rect x="4" y="6" width="1" height="3" fill={SHADOW_1} />
      <rect x="7" y="6" width="1" height="2" fill={HIGHLIGHT_2} />
      <rect x="6" y="6" width="1" height="3" fill={HIGHLIGHT_1} />
    </>,
  ],
  j: [
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4H3V5H4V6V7H5V8H4V9H5H6H7V8H6V7H7V6V5H8V4H7H6H5H4Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4H4V5H6V7H7V5H6V4Z"
        fill={HIGHLIGHT_1}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4H6V5H8V4ZM7 8H6V9H7V8Z"
        fill={HIGHLIGHT_2}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5H5V7H4V5ZM5 8H6V7H5V8ZM5 8V9H4V8H5Z"
        fill={SHADOW_2}
      />
    </>,
  ],
  k: [
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6H8V7V8H7V9H4V8H3V7V6Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6H7V8H6V9H7V8H8V6Z"
        fill={HIGHLIGHT_2}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6H4V8H3V6ZM4 8V9H5V8H4Z"
        fill={SHADOW_2}
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 5 6)"
        fill={SHADOW_1}
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 7 6)"
        fill={HIGHLIGHT_2}
      />
      <rect x="4" y="5" width="4" height="1" fill={HIGHLIGHT_1} />
    </>,
    <rect x="3" y="5" width="5" height="1" />,
  ],
  l: [
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4H2V6H3V7V8H4V9H7V8H8V7V6H9V4Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4H2V6H3V8H4V9H5V8H4V6H3V4Z"
        fill={SHADOW_2}
      />
      <rect x="3" y="4" width="1" height="2" fill={SHADOW_1} />
      <rect x="8" y="4" width="1" height="2" fill={HIGHLIGHT_2} />
      <rect x="4" y="6" width="1" height="2" fill={SHADOW_1} />
      <rect x="7" y="6" width="1" height="2" fill={HIGHLIGHT_2} />
      <rect x="6" y="6" width="1" height="2" fill={HIGHLIGHT_1} />
      <rect x="7" y="4" width="1" height="2" fill={HIGHLIGHT_1} />
      <rect x="6" y="8" width="1" height="1" fill={HIGHLIGHT_2} />
      <rect x="2" y="4" width="1" height="2" fill={SHADOW_2} />
      <rect x="3" y="4" width="1" height="2" fill={SHADOW_1} />
      <rect x="7" y="4" width="1" height="2" fill={HIGHLIGHT_1} />
      <rect x="8" y="4" width="1" height="2" fill={HIGHLIGHT_2} />
    </>,
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 4H3V5H2V4ZM4 5V6H3V5H4ZM5 5H4V4H5V5ZM6 5V6H5V5H6ZM7 5H6V4H7V5ZM8 5H7V6H8V5ZM8 5V4H9V5H8Z"
    />,
  ],
  m: [
    <>
      <rect x="8" y="4" width="1" height="1" fill="white" fillOpacity="0.4" />
      <rect x="3" y="3" width="5" height="1" fill="white" fillOpacity="0.4" />
      <rect x="2" y="4" width="6" height="1" fill="white" fillOpacity="0.3" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5H9V7H8V8H7V9H4V8H3V7H2V5Z"
        fill="#0057FF"
        fillOpacity="0.6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 5H9V7H8V5ZM7 8H8V7H7V8ZM7 8V9H6V8H7Z"
        fill={HIGHLIGHT_1}
      />
      <rect x="3" y="7" width="1" height="1" fill={SHADOW_2} />
      <rect x="2" y="5" width="1" height="2" fill={SHADOW_2} />
      <rect x="4" y="8" width="1" height="1" fill={SHADOW_2} />
      <rect x="6" y="6" width="1" height="1" fill="#FFA724" />
      <rect x="6" y="6" width="1" height="1" fill="#3894E5" fillOpacity="0.3" />
    </>,
  ],
  n: [
    <rect x="3" y="4" width="5" height="5" />,
    <>
      <path d="M3 4h5v2h-1v1h-1v-1h-1v-1h-1v1h-1" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4H4V6V9H3V6V4Z"
        fill={SHADOW_2}
      />
      <rect x="4" y="4" width="1" height="5" fill={SHADOW_1} />
      <rect x="7" y="4" width="1" height="5" fill={HIGHLIGHT_2} />
      <rect x="6" y="4" width="1" height="5" fill={HIGHLIGHT_1} />
    </>,
  ],
  o: [
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4H4V5H3V8H4V9H7V8H8V5H7V4ZM6 6H5V7H6V6Z"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 4 5)"
        fill={SHADOW_2}
      />
      <rect x="4" y="4" width="1" height="5" fill={SHADOW_1} />
      <rect x="6" y="4" width="1" height="5" fill={HIGHLIGHT_1} />
      <rect x="7" y="5" width="1" height="3" fill={HIGHLIGHT_2} />
    </>,
  ],
}

export const KINDS = Object.keys(POTS)
export default POTS
