import React from 'react'
import { submitButton } from '../utilities/Styles'

const EventHandling = () => {

    const handleClick = () => {
        alert("Button clicked without parameters!")
    }

    const handleClickWithParam = (name) => {
        alert(`Button clicked with parameter: ${name}`)
    }

    return (
        <div>
            <h2>Event Handling Component</h2>
            
            <div>
                <button onClick={handleClick} className={submitButton}>
                    Click Me (No Params)
                </button>
            </div>

            <div>
                <button onClick={() => handleClickWithParam("React Developer")} className={submitButton}>
                    Click Me (With Params)
                </button>
            </div>
            
        </div>
    )
}

export default EventHandling
