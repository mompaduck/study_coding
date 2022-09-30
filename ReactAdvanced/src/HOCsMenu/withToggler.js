import React, { Component } from "react"

// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities

// 공통으로 사용하는 코드 : 전달받은 component 에 Toggler 기능 추가함.
class Toggler extends Component {
  state = {
    on: this.props.defaultOnValue
  }

  toggle = () => {
    this.setState(prevState => {
      return {
        on: !prevState.on
      }
    })
  }

  render() {
    const { component: C, defaultOnValue, ...props } = this.props
    return <C on={this.state.on} toggle={this.toggle} {...props} />
  }
}

export function withToggler(component, optionsObj) {
  return function (props) {
    return (
      <Toggler
        component={component}
        defaultOnValue={optionsObj.defaultOnValue}
        {...props}
      />
    )
  }
}
