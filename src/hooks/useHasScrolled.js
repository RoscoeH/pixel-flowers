import { useState } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

export default function useHasScrolled() {
  const [hasScrolled, setHasScrolled] = useState()
  useScrollPosition(({ currPos }) => setHasScrolled(currPos.y < 0))
  return hasScrolled
}
