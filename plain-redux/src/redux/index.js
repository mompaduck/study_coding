// import the separate reducers
import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import countReducer from "./count"
import favoriteThingsReducer from "./favoriteThings"
import youTubeVideoReducer from "./youTubeVideo"
import userReducer from "./user"

// combine the reducers into a single state tree
const rootReducer = combineReducers({
  count: countReducer,
  favoriteThings: favoriteThingsReducer,
  youTubeVideo: youTubeVideoReducer,
  user: userReducer
})

// Reducer 이름이 같은 경우 생략 가능.
// const rootReducer = combineReducers({
//   count,
//   favoriteThings,
//   youTubeVideo
// })

// create the store
const store = configureStore({ reducer: rootReducer })

store.subscribe(() => {
  console.log(store.getState())
})

// export the store
export default store
