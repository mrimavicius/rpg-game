import React, { useContext } from 'react'
import Character from '../components/Character'
import Inventory from '../components/Inventory'
import mainContext from '../context/mainContext'

const MainMenuPage = () => {

  const { character } = useContext(mainContext)

  return (
    <div className='d-flex'>
      <div className="d-flex grow1 just-center menu">
        <Character char={character}/>
      </div>
      <div className="grow1">
        <Inventory/>
      </div>
    </div>
  )
}

export default MainMenuPage