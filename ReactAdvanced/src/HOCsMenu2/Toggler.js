import React, { Component } from "react"

class Toggler extends Component {
  state = {
    on: this.props.defaultOnValue
  }

  static defaultProps = {
    defaultOnValue: false
  }

  toggle = () => {
    this.setState(prevState => ({ on: !prevState.on }))
  }

  render() {
    //render() 함수안에 object를 넘기도록 함.
    return <div>{this.props.render({ on: this.state.on, toggle: this.toggle })}</div>
  }
}

export default Toggler
