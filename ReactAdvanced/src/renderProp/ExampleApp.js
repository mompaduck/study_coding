import React from "react"
import Example from "./Example"

function ExamplApp() {
  return (
    <div>
      <Example
        render={function (bool, number) {
          return (
            <div>
              <h1>{number}</h1>
              <h1>{bool ? "true" : "false"}</h1>
            </div>
          )
        }}
      />
    </div>
  )
}

export default ExamplApp
