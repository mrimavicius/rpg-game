import React, { useContext } from 'react'
import mainContext from '../context/mainContext'
import SingleItem from './SingleItem'

const Inventory = ({ arena }) => {

  const { items } = useContext(mainContext)

  return (
    <div className='inv'>
      <h2>Inventory:</h2>
      {items.map((x, i) => (
        <SingleItem item={x} key={i} index={i} location={arena === true ? 'arena' : 'inventory'}/>
      ))}
    </div>
  )
}

export default Inventory