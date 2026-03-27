import React, { useState } from 'react'
import PureComponent from '../components/PureComponent'
import { submitButton } from '../utilities/Styles'

const PureContainer = () => {

    const [count, setCount] = useState(0)
    const [framework, setFramework] = useState("Spring Boot")

    return (
        <div>

            <p>Count: {count}</p>
            <button className={submitButton} onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <h1>Pure Container</h1>

            <PureComponent  framework={framework} setFramework={setFramework} />

        </div>
    )
}

export default PureContainer