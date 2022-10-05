import React, { useContext } from "react"

import Image from "../components/Image"
import { Context } from "../Context"
import { getClass } from "../utils"

function Photos() {
  // Get the allPhotos array from context
  const { allPhotos } = useContext(Context)
  //console.log(allPhotos)

  // map over it, creating <Image /> elements of the component we just made
  // <Image key={???} img={<full image object here>} className={getClass(<ndex of image>)} />
  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ))

  return <main className="photos">{imageElements}</main>
}

export default Photos
