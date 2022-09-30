import React, { memo } from "react"
import GrandChildMemo from "./GrandChildMemo"

function ChildMemo() {
  console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
  return (
    <div>
      <p>I'm a Child Component</p>
      <GrandChildMemo />
      <GrandChildMemo />
    </div>
  )
}

export default ChildMemo
