import React, { useState } from 'react'
import './RollDice.css'
import Die from './Die'

const RollDice = ({ sides = ['one', 'two', 'three', 'four', 'five', 'six'] }) => {
  // States
  const [die1, setDie1] = useState('one')
  const [die2, setDie2] = useState('one')
  const [rolling, setRolling] = useState(false)

  const roll = () => {
    // Changing state upon click
    setDie1(sides[Math.floor(Math.random() * sides.length)])
    setDie2(sides[Math.floor(Math.random() * sides.length)])
    setRolling(true)

    // Start timer of one sec when rolling starts
    setTimeout(() => {
      // Set rolling to false again when time is over
      setRolling(false)
    }, 1000)
  }

  const handleBtn = rolling ? 'RollDice-rolling' : ''

  return (
    <div className='RollDice'>
      <div className='RollDice-container'>
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>
      <button className={handleBtn} disabled={rolling} onClick={roll}>
        {rolling ? 'Rolling' : 'Roll Dice!'}
      </button>
    </div>
  )
}

export default RollDice
