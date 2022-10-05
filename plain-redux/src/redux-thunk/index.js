import { configureStore } from "@reduxjs/toolkit"
import thunkMiddleware from "redux-thunk"

// export function increment() {
//   return (dispatch, getState) => {
//     const currentCount = getState()
//     if (currentCount % 2 === 0) {
//       dispatch({ type: "INCREMENT" })
//     } else {
//       setTimeout(() => {
//         dispatch({ type: "INCREMENT" })
//       }, 1500)
//     }
//   }
// }
export function increment() {
  return (dispatch, getState) => {
    const number = getState()
    const baseUrl = "https://swapi.dev/api/people" //Starwars API
    fetch(`${baseUrl}/${number}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        dispatch({
          type: "INCREMENT",
          payload: res
        })
      })
  }
}

export function decrement() {
  return {
    type: "DECREMENT"
  }
}

function reducer(count = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return count + 1
    case "DECREMENT":
      return count - 1
    default:
      return count
  }
}
// https://github.com/reduxjs/redux-thunk#installation

const store = configureStore({ reducer: reducer }, thunkMiddleware)
store.subscribe(() => console.log(store.getState()))
export default store
