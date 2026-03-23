import React from 'react'

const EventHandling = () => {

    // Function without parameters
    const handleClick = () => {
        alert("Button clicked without parameters!")
    }

    // Function with parameters
    const handleClickWithParam = (name) => {
        alert(`Button clicked with parameter: ${name}`)
    }

    return (
        <div>
            <h2>Event Handling Component</h2>
            
            <div>
                <button onClick={handleClick}>
                    Click Me (No Params)
                </button>
            </div>

            <div>
                {/* To pass a parameter, we must use an arrow function in the onClick handler */}
                <button onClick={() => handleClickWithParam("React Developer")}>
                    Click Me (With Params)
                </button>
            </div>
            
        </div>
    )
}

export default EventHandling
