import React from "react"

import Header from "./Header"
import Button from "./Button"
import ThemeContext from "./themeContext"

function ConsumerApp() {
  return (
    <div>
      <Header />
      <ThemeContext.Consumer>{theme => <Button theme={theme} />}</ThemeContext.Consumer>

      <Button theme="light" />
    </div>
  )
}

export default ConsumerApp
