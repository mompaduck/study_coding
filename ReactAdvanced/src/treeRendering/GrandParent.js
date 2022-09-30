//import React, { Component } from "react"
import React, { PureComponent } from "react"
import Parent from "./Parent"

/**
 *  ShouldComponentUpdate()
 *  - Lifecycle method on class components
 *  - Allows you to determine if a component should update or not
 *  - Receives the upcoming props and state
 *    so you can compare them against current props and state
 *  - return true for "yes", false for "no"
 */
/**
 *  React.PureComponent
 *  - Alternative to React.Component
 *  - Automatically implements shouldComponentUpdate() for
 *    shallow props and state comparisons
 *  - Disallos using
 *      shouldComponentUpdate() manually
 */

class GrandParent extends PureComponent {
  /*  PureComponent 사용시 자동으로 값을 비교하여 re-render

  shouldComponentUpdate(nextProps, nextState) {
   //값을 비교해서 true인경우 re-render
    if (nextProps.count === this.props.count) {
      return false
    }
    return true
  }
  */

  render() {
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
      <div>
        <p>I'm a GrandParent Component</p>
        <Parent />
        <Parent />
      </div>
    )
  }
}

export default GrandParent
