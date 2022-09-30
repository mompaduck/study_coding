import React, { Component } from "react"

class NewJSFeatures extends Component {
  state = {
    count: 0,
    greeting: "Hi",
    age: 42,
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  decrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1,
      }
    })
  }

  render() {
    const { count: number, greeting, age } = this.state
    return (
      <div>
        <h1>
          {number} {greeting} {age}
        </h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
  /** 
  constructor() {
    super()
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }


  increment() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      }
    })
  }

  decrement() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1,
      }
    })
  }



  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
   */
}

export default NewJSFeatures
