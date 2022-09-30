import React from "react"
import Card from "./Card"

function CardApp() {
  return (
    <div>
      <Card cardColor="red" height={200} width={400} />
      <Card cardColor="yellow" />
      <Card cardColor="" />
    </div>
  )
}

export default CardApp
