import React from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {
  /**
   * Challenge:
   * 1. Add new state called `tenzies`, default to false. It
   *    represents whether the user has won the game yet or not.
   * 2. Add an effect that runs every time the `dice` state array
   *    changes. For now, just console.log("Dice state changed").
   */

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  /**
   * Challenge: Check the dice array for these winning conditions:
   * 1. All dice are held, and
   * 2. all dice have the same value
   *
   * If both conditions are true, set `tenzies` to true and log
   * "You won!" to the console
   */
  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    //console.log(firstValue)
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      //console.log("You won!")
    }
  }, [dice])
  /**


  /**
 * Challenge: Tie off loose ends!
 * 1. If tenzies is true, Change the button text to "New Game"
 * 2. If tenzies is true, use the "react-confetti" package to
 *    render the <Confetti /> component 🎉
 * 
 *    Hint: don't worry about the `height` and `width` props
 *    it mentions in the documentation.
 */

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  /**
   * Challenge: Allow the user to play a new game when the
   * button is clicked and they've already won
   */

  function rollDice() {
    if (!tenzies) {
      setDice(oldDice =>
        oldDice.map(die => {
          return die.isHeld ? die : generateNewDie()
        })
      )
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  /**
   * Challenge: Update the `holdDice` function to flip
   * the `isHeld` property on the object in the array
   * that was clicked, based on the `id` prop passed
   * into the function.
   */

  function holdDice(id) {
    setDice(oldDice =>
      oldDice.map(die => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    )
  }

  const diceElements = dice.map(die => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ))

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  )
}
