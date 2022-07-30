import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import mainContext from '../context/mainContext'

const Character = ({char}) => {

    const nav = useNavigate()
    const { character, setCharacter, setGold, setPlayerHp, monster, setMonsterHp } = useContext(mainContext)

    function chooseCharacter() {
      if(character !== null) return
      setCharacter(char)
      setGold(char.gold)
      setPlayerHp(char.health)
      setMonsterHp(monster.health)
      nav('/mainMenu')
    }

  return (
    <div onClick={chooseCharacter} className='character'>
        <h2>{char.race}</h2>
        <img src={char.image} alt={char.race} />
        <h4>Damage: {char.damage}</h4>
        <h4>Health: {char.health}</h4>
        <h4>Starting gold: {char.gold}</h4>
    </div>
  )
}

export default Character