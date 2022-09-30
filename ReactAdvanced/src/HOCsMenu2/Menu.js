import React from "react"
import Toggler from "./Toggler"

// bring in the Toggler component
// render the Toggler inside the Menu, and use the render prop to determine what will get displayed
// remember to bring in the "goodies" (state and methods) to that function so you can make this work

// render={(on, toggle) => (  // object로 만들어서 넘김

function Menu(props) {
  return (
    <Toggler
      defaultOnValue={true}
      render={({ on, toggle }) => (
        <div>
          <button onClick={toggle}>{on ? "Hide" : "Show"} Menu </button>
          <nav style={{ display: on ? "block" : "none" }}>
            <h6>Signed in as Coder123</h6>
            <p>
              <a>Your Profile</a>
            </p>
            <p>
              <a>Your Repositories</a>
            </p>
            <p>
              <a>Your Stars</a>
            </p>
            <p>
              <a>Your Gists</a>
            </p>
          </nav>
        </div>
      )}
    />
  )
}

export default Menu

/**
 * App에서 직접 불러서 사용해도 결과는 같다.
 * import Toggler from "./Toggler"

function App() {
    return (
        <div>  
            <Toggler defaultOnValue={true} render={({on, toggle}) => {
                return (
                    <Menu on={on} toggle={toggle}/>
                )
            }}/>
            <hr />
            <Favorite />
        </div>
    )
}

function Menu(props) {
    return (
        <div>
            <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
            <nav style={{display: props.on ? "block" : "none"}}>
                <h6>Signed in as Coder123</h6>
                <p><a>Your Profile</a></p>
                <p><a>Your Repositories</a></p>
                <p><a>Your Stars</a></p>
                <p><a>Your Gists</a></p>
            </nav>
        </div>
    ) 
}


 */
