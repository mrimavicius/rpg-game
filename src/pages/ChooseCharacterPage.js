import React from 'react'
import Character from '../components/Character';
import gameData from '../assets/gameData';

const ChooseCharacterPage = () => {
  return (
    <div className='d-flex flex-wrap'>
        {gameData.characters.map((x, i) => (
            <Character char={x} key={i}/>
        ))}
    </div>
  )
}

export default ChooseCharacterPage