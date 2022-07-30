import React from 'react'
import Inventory from '../components/Inventory'
import Shop from '../components/Shop'

const ShopPage = () => {
  return (
    <div className='d-flex'>
        <div className="grow1">
            <Shop/>
        </div>
        <div className="grow1">
            <Inventory/>
        </div>
    </div>
  )
}

export default ShopPage