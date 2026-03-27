import React, { useState } from 'react'
import { submitButton } from '../utilities/Styles'

const UseStateHook = () => {

    const [language, setLanguage] = useState("Python")
    const [count, setCount] = useState(0)


    return (
        <section        >
            <div>
                <p>
                    Current Language: <strong>{language}</strong>
                </p>

                <button onClick={() => setLanguage("JavaScript")} className={submitButton}>
                    Change Language
                </button>

                <button onClick={() => setLanguage("Java")} className={submitButton}>
                    Change Language
                </button>

            </div>

            <div>
                <p>Count: <strong>{count}</strong></p>

                <button onClick={() => setCount(count + 1)} className={submitButton}>
                    Increment
                </button>

                <button onClick={() => setCount(count - 1)} className={submitButton}>
                    Decrement
                </button>
                
            </div>
        </section>
    )
}

export default UseStateHook
