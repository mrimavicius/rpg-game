import React from 'react'
import Inventory from './Inventory'

export const Modal = ({ showModal, setShowModal }) => {

    const style = {
        display: showModal ? 'block' : 'none'
    }

  return (
    <div style={style} className='modal'>
        <div className="modal-content d-flex flex-col">
            <div onClick={() => setShowModal(false)} className='self-end close-button'>X</div>
            <Inventory arena={true} />
        </div>
    </div>
  )
}
