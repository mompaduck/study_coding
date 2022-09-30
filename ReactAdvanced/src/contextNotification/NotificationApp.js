import React from "react"

import Header from "./Header"
import UserContext from "./userContext"

// class NotificationApp extends React.Component {
//   static contextType = UserContext

//   render() {
//     const username = this.context
//     return (
//       <div>
//         <Header />
//         <main>
//           <p className="main">No new notifications, {username}! 🎉</p>
//         </main>
//       </div>
//     )
//   }
// }

// export default NotificationApp

/**
 * Challenge:
 *
 * 1. Convert App and Header back into functional components
 * 2. Use UserContext.Consumer to consume the username context in both places
 */

function NotificationApp() {
  return (
    <div>
      <Header />
      <main>
        <UserContext.Consumer>
          {username => <p className="main">No new notifications, {username}! 🎉</p>}
        </UserContext.Consumer>
      </main>
    </div>
  )
}

export default NotificationApp
