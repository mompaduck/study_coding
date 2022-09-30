//import React, { Component } from "react"
import React from "react"
import { withToggler } from "./withToggler"

/** withTogger 사용하기전 코드 

class Favorite extends Component {
  state = {
    isFavorited: false,
  }

  toggleFavorite = () => {
    this.setState(prevState => {
      return {
        isFavorited: !prevState.isFavorited,
      }
    })
  }

  render() {
    return (
      <div>
        <h3>Click heart to favorite</h3>
        <h1>
          <span onClick={this.toggleFavorite}>
            {this.state.isFavorited ? "❤️" : "♡"}
          </span>
        </h1>
      </div>
    )
  }
}
*/

//withToggler 에서 component 사용하기 때문에 상속 받을 필요 없다.
function Favorite(props) {
  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={props.toggle}>{props.on ? "❤️" : "♡"}</span>
      </h1>
    </div>
  )
}
const SuperchargedFavoriteComponent = withToggler(Favorite, { defaultOnValue: false })
export default SuperchargedFavoriteComponent
