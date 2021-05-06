import { useRef, useCallback, useEffect } from "react"

export default function useScrollTop() {
  const ref = useRef()

  const scroll = useCallback(() => {
    console.log("scroll")
    ref.current.scrollTo(0, 0)
  }, [ref])

  return [ref, scroll]
}
