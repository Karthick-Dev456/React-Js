import React, { useState } from 'react'

const UseStateHook = () => {

    const [language, setLanguage] = useState("Python")
    const [count, setCount] = useState(0)


    return (
        <section        >
            <div>
                <p>
                    Current Language: <strong>{language}</strong>
                </p>
                <button onClick={() => setLanguage("JavaScript")}>Change Language</button>
            </div>

            <div>
                <p>Count: <strong>{count}</strong></p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </section>
    )
}

export default UseStateHook
