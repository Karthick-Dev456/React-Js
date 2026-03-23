import Modal from '../utilities/Modal'
import React, { useState } from 'react'
const PortalContainer = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <h1>PortalContainer</h1>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="PortalContainer">
                <p>PortalContainer</p>
            </Modal>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => setIsOpen(true)}>Open Modal</button>
        </div>
    )
}

export default PortalContainer