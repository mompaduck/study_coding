import React from "react"
import { connect } from "react-redux"
import { increment, decrement } from "./redux2"

function App(props) {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>+</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state
  }
}

// const mapDispatchToProps = {
//   increment: increment,
//   decrement: decrement
// }

//간략하게...1
const mapDispatchToProps = {
  increment,
  decrement
}

//간략하게 표현하기..2  //// https://react-redux.js.org/api/connect#connect
export default connect(state => ({ count: state }), { increment, decrement })(App)

//export default connect(mapStateToProps, mapDispatchToProps)(App)

//export default connect(mapStateToProps, { increment, decrement })(App)

// Write the mapStateToProps function from scratch
// Takes the global state from Redux as a parameter
// return an object where the keys are the name of the prop your component wants,
// values are the actual parts of the global state your component wants

//export default connect(/* What parts of state do you want? */, /* What actions to dispatch? */)(App)

/**
 *
 * How does connect work?
 *
 * - Higher-order componet
 * - Pass 2 things :
 *   1. "What parts of the global state this component want access to?"
 *   2. "What actions do you want to be able to dispatch from this compponent?"
 *
 * - It then returns a function to which you pass the component you want to connect.
 *   When called, this function creates a new component wrapping yours
 *   which passes the global state and "dispatchable" actions to your components via props.
 */
