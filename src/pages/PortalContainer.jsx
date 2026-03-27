import Modal from '../utilities/Modal'
import React, { useState } from 'react'
import { submitButton } from '../utilities/Styles'

const PortalContainer = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>

            <h1>PortalContainer</h1>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="PortalContainer">
                <p>PortalContainer</p>
            </Modal>

            <button className={submitButton} onClick={() => setIsOpen(true)}>
                Open Modal
            </button>
            
        </div>
    )
}

export default PortalContainer