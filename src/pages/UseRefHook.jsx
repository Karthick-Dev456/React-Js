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
                <input type="text" ref={inputRef} />
                <button type="submit">Submit</button>
            </form>
            {name && <p>Name: {name}</p>}
        </div>
    )
}

export default UseRefHook