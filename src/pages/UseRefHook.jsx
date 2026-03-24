import React, { useRef, useState } from 'react'

const UseRefHook = () => {

    const inputRef = useRef(null)
    const [name, setName] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault()
        setName(inputRef.current.value)

        inputRef.current.value = ''
        inputRef.current.focus()
    }
    return (
        <div>
            <h1>UseRefHook</h1>

            <form onSubmit={handleSubmit}>

                <input autoFocus className='ring-1 mx-1' type="text" ref={inputRef} />
                <button className='ring-1 mx-1 px-1' type="submit">Submit</button>

            </form>

            {name && <p>Name: {name}</p>}
        </div>
    )
}

export default UseRefHook