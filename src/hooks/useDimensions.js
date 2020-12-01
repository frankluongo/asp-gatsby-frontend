import { useRef, useState, useEffect } from "react"

export function useDimensions() {
  const ref = useRef()
  const [dimensions, setDimensions] = useState({})

  useEffect(onRefChange, [ref.current])
  useEffect(observeResize, [ref.current])

  return { ref, dimensions }

  function onRefChange() {
    setElDimensions()
  }

  function observeResize() {
    if (!ref || !ref.current || !window.ResizeObserver) return () => false
    const observer = new ResizeObserver(setElDimensions)
    observer.observe(ref.current)
    return () => observer.unobserve(ref.current)
  }

  function setElDimensions() {
    if (!ref || !ref.current) return
    // const {
    //   scrollHeight,
    //   scrollTop,
    //   scrollLeft,
    //   clientHeight,
    //   clientWidth,
    // } = ref.current
    // const scrollBottom = scrollHeight - scrollTop - clientHeight
    const refDims = ref.current.getBoundingClientRect().toJSON()

    setDimensions({
      ...refDims,
    })
  }
}
