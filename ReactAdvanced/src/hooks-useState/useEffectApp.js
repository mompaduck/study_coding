// componentDidMount
// componentDidUpdate
// componentWillUnmount

// Side effects?
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor" //npm i randomcolor https://www.npmjs.com/package/randomcolor

function UseEffectApp() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")

  // function increment() {
  //   setCount(prevCount => prevCount + 1)
  // }

  // function decrement() {
  //   setCount(prevCount => prevCount - 1)
  // }

  // useEffect(() => {
  //   setColor(randomcolor())
  // }, [count])

  //auto counting
  useEffect(() => {
    const intervalId = setInterval(() => {
      //setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setColor(randomcolor())
  }, [count])

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
    </div>
  )
}

export default UseEffectApp
