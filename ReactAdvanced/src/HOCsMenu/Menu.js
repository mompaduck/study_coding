//import React, { Component } from "react"
import React from "react"
import { withToggler } from "./withToggler"

/** withTogger 사용하기전 코드 //component 상속받아서 기능 구현함.
class Menu extends Component {
  state = {
    show: true,
  }

  toggleShow = () => {
    this.setState(prevState => {
      return {
        show: !prevState.show,
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>
          {this.state.show ? "Hide" : "Show"} Menu{" "}
        </button>
        <nav style={{ display: this.state.show ? "block" : "none" }}>
          <h6>Signed in as Coder123</h6>
          <a>Your Profile</a>
          <a>Your Repositories</a>
          <a>Your Stars</a>
          <a>Your Gists</a>
        </nav>
      </div>
    )
  }
}
*/

// withToggler 에서 공통기능 구현
function Menu(props) {
  return (
    <div>
      <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
      <nav style={{ display: props.on ? "block" : "none" }}>
        <h6>Signed in as Coder123</h6>
        <a>Your Profile</a>
        <a>Your Repositories</a>
        <a>Your Stars</a>
        <a>Your Gists</a>
      </nav>
    </div>
  )
}

export default withToggler(Menu, { defaultOnValue: true })
