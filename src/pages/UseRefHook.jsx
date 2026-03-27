import React, { useRef, useState } from 'react'
import { submitButton } from '../utilities/Styles'

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

                <label>Username</label>
                <input autoFocus className='ring-1 mx-1' value={name} type="text" ref={inputRef} onChange={event => setName(event.target.value)} />

                <label>Password</label>
                <input className='ring-1 mx-1' value={password} type="text" onChange={event => setPassword(event.target.value)} />
                <button className={submitButton} type="submit">Submit</button>

            </form>

            {name && <p>Name: {name}</p>}
            {password && <p>Password: {password}</p>}
        </div>
    )
}

export default UseRefHook