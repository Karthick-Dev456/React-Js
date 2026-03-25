import React, { useRef, useState } from 'react'

const UseRefHook = () => {

    const inputRef = useRef(null)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {

        event.preventDefault()
        inputRef.current.focus()
        setName('')
        setPassword('')
    }
    return (
        <div>
            <h1>UseRefHook</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="">Username</label>
                <input autoFocus className='ring-1 mx-1' value={name} type="text" ref={inputRef} onChange={event => setName(event.target.value)} />

                <label htmlFor="">Password</label>
                <input className='ring-1 mx-1' value={password} type="text" onChange={event => setPassword(event.target.value)} />
                <button className='ring-1 mx-1 px-1' type="submit">Submit</button>

            </form>

            {name && <p>Name: {name}</p>}
            {password && <p>Password: {password}</p>}
        </div>
    )
}

export default UseRefHook