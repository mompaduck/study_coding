import React from "react"
import ParentMemo from "./ParentMemo"

function GrandParentMemo(props) {
  console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
  return (
    <div>
      <p>I'm a GrandParent Component</p>
      <ParentMemo />
      <ParentMemo />
    </div>
  )
}

export default React.memo(GrandParentMemo)

// function areEqual(prevProps, nextProps) {
//   /*
//   return true if passing nextProps to render would return
//   the same result as passing prevProps to render,
//   otherwise return false
//   */
// }

//automatically checking the changed props.
//export default React.memo(GrandParentMemo, areEqual) //두번째 인자로 함수를 넘김.
