/**
 * Convert this ThemeContextProvider into a functional component that uses hooks
 * Tip: Use the browser dev tools if you run into a bug that isn't clear from the Scrimba console logs
 */

import React, { useState } from "react"
const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("dark")

  function toggleTheme() {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider, ThemeContext }

/** 
 import React, { Component } from "react"
 const ThemeContext = React.createContext()

class ThemeContextProvider extends Component {
  state = {
    theme: "dark"
  }

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === "light" ? "dark" : "light"
      }
    })
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export { ThemeContextProvider, ThemeContext }

*/
