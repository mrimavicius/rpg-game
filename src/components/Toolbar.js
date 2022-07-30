import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import mainContext from '../context/mainContext'

const Toolbar = () => {

  const { gold } = useContext(mainContext)

  return (
    <div className='toolbar d-flex space-btw'>
      <div className="d-flex">
        <Link to={'/mainMenu'}>Profile</Link>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/arena'}>Arena</Link>
      </div>
      <div className='gold'>Gold: {gold} </div>
    </div>
  )
}

export default Toolbar