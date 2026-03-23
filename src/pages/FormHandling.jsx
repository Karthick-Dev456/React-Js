import React, { useState } from 'react'

const FormHandling = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const FormHandler = () => {
        console.log(username, password)
    }


    return (
        <div>
            <form>
                <label>Username: </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />

                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                <button type="button" disabled={!username || !password} onClick={FormHandler}>Login</button>
            </form>
        </div>
    )
}

export default FormHandling
