//import React, { Component } from "react"
//import UserContext from "./userContext"

// class Header extends Component {
//   static contextType = UserContext
//   render() {
//     const username = this.context
//     return (
//       <header>
//         <p>Welcome, {username}!</p>
//       </header>
//     )
//   }
// }

// export default Header

/**
 * Challenge:
 *
 * 1. Convert App and Header back into functional components
 * 2. Use UserContext.Consumer to consume the username context in both places
 */

import React from "react"
import UserContext from "./userContext"

function Header() {
  return (
    <header>
      <UserContext.Consumer>
        {username => <p>Welcome, {username}!</p>}
      </UserContext.Consumer>
    </header>
  )
}

export default Header
