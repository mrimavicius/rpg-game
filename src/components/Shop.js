import { useState } from 'react'
import gameData from '../assets/gameData'
import SingleItem from './SingleItem'

const Shop = () => {

  const [show, setShow] = useState('weapons')

  return (
    <div>
      <div className='d-flex'>
        <button onClick={() => setShow('weapons')} className='grow1'>Weapons</button>
        <button onClick={() => setShow('potions')} className='grow1'>Potions</button>
      </div>
      {gameData.trader[show].map((x, i) => (
        <SingleItem item={x} key={i} location='shop' />
      ))}
    </div>
  )
}

export default Shop