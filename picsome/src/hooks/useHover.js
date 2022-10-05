import { useState, useEffect, useRef } from "react"

function useHover() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  function enter() {
    setHovered(true)
  }

  function leave() {
    setHovered(false)
  }
  /**
   * Challenge:
   *
   * Using useEffect and useRef, make it so when this hook first loads,
   * it sets up the "mouseenter" and "mouseleave" event listeners on the ref.
   *
   * Remember: the ref.current will represent the DOM node, which is where you can
   * do imperative commands like `.addEventListener` and `removeEventListener`.
   */

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseenter", enter)
      ref.current.addEventListener("mouseleave", leave)
    }
    return () => {
      // 오류 Cannot read properties of null (reading 'removeEventListener')
      ref.current.removeEventListener("mouseenter", enter)
      ref.current.removeEventListener("mouseleave", leave)
    }
  }, [])

  return [hovered, ref]
}

export default useHover
