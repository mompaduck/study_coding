import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function BoxApp() {
    const [squares, setSquares] = React.useState(boxes)
    
    // function toggle(id) {
    //     setSquares(prevSquares => {
    //         const newSquares = []
    //         for(let i = 0; i < prevSquares.length; i++) {
    //             const currentSquare = prevSquares[i]
    //             if(currentSquare.id === id) {
    //                 const updatedSquare = {
    //                     ...currentSquare,
    //                     on: !currentSquare.on
    //                 }
    //                 newSquares.push(updatedSquare)
    //             } else {
    //                 newSquares.push(currentSquare)
    //             }
    //         }
    //         return newSquares
    //     })
    // }
    // 간단하게 만들기
    function toggle(id) {
      setSquares(prevSquares => {
          return prevSquares.map((square) => {
              return square.id === id ? {...square, on: !square.on} : square
          })
      })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={() => toggle(square.id)}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
