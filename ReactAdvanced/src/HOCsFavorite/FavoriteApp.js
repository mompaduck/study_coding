import React from "react"
import { withFavoriteNumber } from "./withFavoriteNumber"

function FavoriteApp(props) {
  return <div>{props.favoriteNumber}</div>
}
// index.js 에서 root.render(<FavoriteApp favoriteNumber={42} />) 값을 받아서 사용해도 같은 결과가 나옴.
//export default FavoriteApp
export default withFavoriteNumber(FavoriteApp)
