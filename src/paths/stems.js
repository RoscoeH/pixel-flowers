import React from "react"
export default {
  a: [
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0H2V4H3V13H4V4H3V0Z" />,
    <>
      <rect x="2" y="8" width="1" height="1" />
      <rect x="1" y="7" width="1" height="1" />
    </>,
  ],
  b: [
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 0H5V4H4V0ZM4 4V13H3V4H4Z"
    />,
    <>
      <rect width="1" height="1" transform="matrix(-1 0 0 1 5 9)" />
      <rect width="1" height="1" transform="matrix(-1 0 0 1 6 8)" />
      <rect x="2" y="5" width="1" height="1" />
      <rect x="1" y="4" width="1" height="1" />
    </>,
  ],
}
