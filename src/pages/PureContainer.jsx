import React, { useState } from 'react'
import PureComponent from '../components/PureComponent'

const PureContainer = () => {

    const [count, setCount] = useState(0)
    const [framework, setFramework] = useState("Spring Boot")

    return (
        <div>

            <p>Count: {count}</p>
            <button className='bg-blue-400 text-white p-2 rounded-2xl' onClick={() => setCount(count + 1)}>Increment</button>
            <h1>Pure Container</h1>

            <PureComponent  framework={framework} setFramework={setFramework} />

        </div>
    )
}

export default PureContainer