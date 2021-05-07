import { useRef, useCallback, useEffect } from "react"

export default function useScrollTop() {
  const ref = useRef()

  const scroll = useCallback(() => {
    ref.current.scrollTo(0, 0)
  }, [])

  return [ref, scroll]
}
