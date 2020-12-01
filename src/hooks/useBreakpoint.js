import { useEffect, useState } from "react"

export function useBreakpoint({ type = "min-width", breakpoint }) {
  const [matches, setMatches] = useState(false)
  useEffect(onMount, [])

  return { matches }

  function onMount() {
    const mql = window.matchMedia(`(${type}: ${breakpoint})`)
    setMatches(mql.matches)
    mql.addEventListener("change", onMqlChange)
  }

  function onMqlChange(entry) {
    setMatches(entry.matches)
  }
}
