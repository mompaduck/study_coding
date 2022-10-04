import React from "react"
import ReactDOM from "react-dom/client"

//import "./style.css"

//import CardApp from "./card/CardApp"

//root.render(<CardApp />) //React.Fragment

//import RoundedImgApp from "./roundedimg/RoundedImgApp"
//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<RoundedImgApp />)  //Default Props, Prop Types

//import CTAApp from "./CTA/CTAApp"
//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<CTAApp />) //React Children

//import ChildrenApp from "./children/ChildrenApp"
//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<ChildrenApp />)

// import WithApp from "./HOCs/withApp"
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<WithApp />) //Higher Order Component

// import FavoriteApp from "./HOCsFavorite/FavoriteApp"
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<FavoriteApp />)

//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<FavoriteApp favoriteNumber={42} />)

// import MenuApp from "./HOCsMenu/MenuApp"
//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<MenuApp />)   //Higher Order Component

// import ExamplApp from "./renderProp/ExampleApp"
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<ExamplApp />) //Render Props

//import MenuApp2 from "./HOCsMenu2/MenuApp2"
//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<MenuApp2 />)  //React.memo

//import DataApp from "./dataFetcher/DataApp"
//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<DataApp />)

// import TreeApp from "./treeRendering/TreeApp"
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<TreeApp />) //React.PureComponent

// * Context Provider
//import ThemeContext from "./contextProvider/themeContext"
//import ContextApp from "./contextProvider/ContextApp"

//const ThemeContext = React.createContext()
// ThemeContext.Provider & ThemeContext.Consumer
// const root = ReactDOM.createRoot(document.getElementById("root"))

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
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <UserContext.Provider value={"bobz123"}>
//     <NotificationApp />
//   </UserContext.Provider>
// )

// *Consumer ...functional components
//import NotificationApp from "./contextNotification/NotificationApp"
//import UserContext from "./contextNotification/userContext"

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <UserContext.Provider value={"bob123"}>
//     <NotificationApp />
//   </UserContext.Provider>
// )

//* Context.Consumer
// import ThemeContext from "./contextConsumer/themeContext"
// import ConsumerApp from "./contextConsumer/ConsumerApp"

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <ThemeContext.Provider value={"dark"}>
//     <ConsumerApp />
//   </ThemeContext.Provider>
// )

// * Move Context Provider to its own component
//import { ThemeContextProvider } from "./contextOwn/themeContext"
//import OwnApp from "./contextOwn/OwnApp"

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <ThemeContextProvider>
//     <OwnApp />
//   </ThemeContextProvider>
// )

//* Changing Context
//import { ThemeContextProvider } from "./contextChange/themeContext"
//import ChangeApp from "./contextChange/ChangeApp"

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <ThemeContextProvider>
//     <ChangeApp />
//   </ThemeContextProvider>
// )

// import { UserContextProvider } from "./contextPractice/userContext"
// import UserApp from "./contextPractice/userApp"

// const root = ReactDOM.createRoot(document.getElementById("root"))
// //* Context Practice
// root.render(
//   <UserContextProvider>
//     <UserApp />
//   </UserContextProvider>
// )

// import UseStateContactApp from "./hooks-useState/useStateContactApp"

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<UseStateContactApp />)

// import UseEffectApp from "./hooks-useState/useEffectApp"

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<UseEffectApp />)

// import WordGameApp from "./hooks-useState/wordGameApp"
// import "./hooks-useState/wordgame.css"

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<WordGameApp />)

//useRef 사용해서 input Box에 Focus 가져오기
// import ToDoListApp from "./hooks-useState/todoListApp"
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<ToDoListApp />)

//**useContext()
// import ThemeAppp from "./hooks-useState/useContext/themeApp"
// import { ThemeContextProvider } from "./hooks-useState/useContext/themeContext"
// import "./style.css"
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <ThemeContextProvider>
//     <ThemeAppp />
//   </ThemeContextProvider>
// )

// import App from "./hooks-useState/customHookMenu/memuApp"
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App />)

//* Router  v5 방식이라서 작동하지 않음.  v6 로 고쳐야함.
import { BrowserRouter as Router } from "react-router-dom"
import App from "./reactRouter/ProductApp"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Router>
    <App />
  </Router>
)
