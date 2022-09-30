import React from "react"
import ReactDOM from "react-dom/client"
import CardApp from "./card/CardApp"
import RoundedImgApp from "./roundedimg/RoundedImgApp"
import CTAApp from "./CTA/CTAApp"
import ChildrenApp from "./children/ChildrenApp"
import WithApp from "./HOCs/withApp"
import FavoriteApp from "./HOCsFavorite/FavoriteApp"
import MenuApp from "./HOCsMenu/MenuApp"
import ExamplApp from "./renderProp/ExampleApp"
import MenuApp2 from "./HOCsMenu2/MenuApp2"
import DataApp from "./dataFetcher/DataApp"
import TreeApp from "./treeRendering/TreeApp"

//import ThemeContext from "./contextProvider/themeContext"
//import ContextApp from "./contextProvider/ContextApp"

import NotificationApp from "./contextNotification/NotificationApp"
import UserContext from "./contextNotification/userContext"

// import ThemeContext from "./contextConsumer/themeContext"
// import ConsumerApp from "./contextConsumer/ConsumerApp"

import { ThemeContextProvider } from "./contextOwn/themeContext"
import OwnApp from "./contextOwn/OwnApp"

const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<CardApp />) //React.Fragment
//root.render(<RoundedImgApp />)  //Default Props, Prop Types

//root.render(<CTAApp />) //React Children
//root.render(<ChildrenApp />)
//root.render(<WithApp />)  //Higher Order Component
//root.render(<FavoriteApp />)
//root.render(<FavoriteApp favoriteNumber={42} />)

//root.render(<MenuApp />)   //Higher Order Component
//root.render(<ExamplApp />)   //Render Props
//root.render(<MenuApp2 />)  //React.memo
//root.render(<DataApp />)
//root.render(<TreeApp />)  //React.PureComponent

// * Context Provider
//const ThemeContext = React.createContext()
// ThemeContext.Provider & ThemeContext.Consumer

// root.render(
//   <ThemeContext.Provider value={"dark"}>
//     <ContextApp />
//   </ThemeContext.Provider>
// )

/**
 * Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
 *
 * Use the static class property `contextType` on any components that need to consume context.
 *   https://reactjs.org/docs/context.html
 */

// root.render(
//   <UserContext.Provider value={"bobz123"}>
//     <NotificationApp />
//   </UserContext.Provider>
// )

// Consumer ...functional components
// root.render(
//   <UserContext.Provider value={"bob123"}>
//     <NotificationApp />
//   </UserContext.Provider>
// )

//Context.Consumer
// root.render(
//   <ThemeContext.Provider value={"dark"}>
//     <ConsumerApp />
//   </ThemeContext.Provider>
// )

// * Move Context Provider to its own component
root.render(
  <ThemeContextProvider>
    <OwnApp />
  </ThemeContextProvider>
)
