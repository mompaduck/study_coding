// import the separate reducers
import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import count from "./count"
import favoriteThings from "./favoriteThings"
import youTubeVideo from "./youTubeVideo"

// combine the reducers into a single state tree
const rootReducer = combineReducers({
  count,
  favoriteThings,
  youTubeVideo
})

// create the store
const store = configureStore({ reducer: rootReducer })
store.subscribe(() => {
  console.log(store.getState())
})

// export the store
export default store
