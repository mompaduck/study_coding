import React, { Component } from "react"

class GrandChild extends Component {
  render() {
    console.log("[ ]   [ ]   [ ]   [πΆπ»] rendered")
    return (
      <div>
        <p>I'm a GrandChild Component</p>
      </div>
    )
  }
}

export default GrandChild
