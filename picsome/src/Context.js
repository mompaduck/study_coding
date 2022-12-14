import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data))
  }, [])

  // console.log(allPhotos)

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map(photo => {
      if (photo.id === id) {
        //console.log(id)
        //console.log(!photo.isFavorite)
        return { ...photo, isFavorite: !photo.isFavorite }
      }
      return photo
    })
    setAllPhotos(updatedArr)
  }

  function addToCart(newItem) {
    setCartItems(prevItems => [...prevItems, newItem])
  }
  //console.log(cartItems)

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  function emptyCart() {
    setCartItems([])
  }

  // prettier-ignore
  return (
    <Context.Provider value={{
      allPhotos, 
      toggleFavorite, 
      cartItems, 
      addToCart, 
      removeFromCart, 
      emptyCart
    }}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
