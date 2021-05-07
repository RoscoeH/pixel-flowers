import { useEffect } from "react"

export default function useTimedRerender(fn, milliseconds) {
  useEffect(() => {
    const interval = setInterval(fn, milliseconds)
    return () => clearInterval(interval)
  }, [milliseconds, fn])
}
