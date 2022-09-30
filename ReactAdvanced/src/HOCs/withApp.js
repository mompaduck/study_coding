import React from "react"
import { withPointlessHOC } from "./withPointlessHOC"
import { withExtraPropAdded } from "./withExtraPropAdded"

//Higher Order Compoonents
function WithApp(props) {
  console.log(props)
  return <div>Hello world!</div>
}

//const PointlessHOC = withPointlessHOC(WithApp)
//export default PointlessHOC

const ExtraPropComponent = withExtraPropAdded(WithApp)
export default ExtraPropComponent
