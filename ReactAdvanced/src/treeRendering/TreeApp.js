/**
 * - React recursively renders components down on branch
 * until there are no more to render
 *
 * - Changes to state or props in any component will
 *  recursively re-render down the remaining tree whether
 * those components have changed or not
 *
 * - ShouldComponentUpdate(),
 * React.PureComponet, and React.meom() are tools
 * to help fix this problem.
 *
 */

import React, { Component } from "react"
import GrandParent from "./GrandParent"
import GrandParentMemo from "./GrandParentMemo"

class TreeApp extends Component {
  state = { count: 0 }

  increment = () => this.setState(prevState => ({ count: prevState.count + 1 }))

  render() {
    console.log("[GP] [P] [C] [GC] APP just rendered")
    return (
      <div>
        <button onClick={this.increment}>+1</button>
        <h2>{this.state.count}</h2>
        <p>I'm the App component</p>
        {/* 상태값이 바뀔때 GrandParent 도 rendering 하고 싶을때는 상태값을 넘겨준다. */}
        {/* <GrandParent count={this.state.count} />
        <GrandParent /> */}
        <GrandParentMemo count={this.state.count} />
        <GrandParentMemo />
      </div>
    )
  }
}

export default TreeApp

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
/**
 *  React.memo()
 *  - Higer-order component built by React(released in v16.6)
 *  - Pretty much the same as PureComponent, but for functional components
 *  - It only compares prevProps and nextProps (no state checking)
 *  - You can optionally implement your own checking function determine
 *    if it should use the memoized result
 *
 *   -- This function is kind of like shouldComponentUpdate(),
 *      except it should return true if the props are equal and false if they aren't.
 *      This is effectively the opposite approach of should ComponentUpdate(),
 *      which returns treu if the component should re-render
 *      (i.e. props are different).
 *
 */
