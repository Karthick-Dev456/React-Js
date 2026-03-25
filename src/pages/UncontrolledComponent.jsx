import React, { useRef, useState } from 'react'

const UncontrolledComponent = () => {
    const nameRef = useRef(null)
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setName(nameRef.current.value)
        nameRef.current.value = ''
        nameRef.current.focus()
    }

    return (
        <div>
            <h1>Uncontrolled Component</h1>

            <form onSubmit={handleSubmit}>

                <input type="text" ref={nameRef} placeholder='Enter a name'  className='ring-1 mx-1' />
                <button type="submit" className='ring-1 mx-1'>Submit</button>

            </form>

            {name && <p>Submitted Name: {name}</p>}
        </div>
    )
}

export default UncontrolledComponent
