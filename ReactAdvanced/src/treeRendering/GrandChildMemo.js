import React, { memo } from "react"

export default memo(function GrandChildMemo() {
  console.log("[ ]   [ ]   [ ]   [πΆπ»] rendered")
  return (
    <div>
      <p>I'm a GrandChild Component</p>
    </div>
  )
})
