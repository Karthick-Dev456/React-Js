import React, { useEffect, useState } from 'react'

const LifeCycle = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Mounting Phase')

        return () => {
            console.log('Unmounting Phase')
        }
    }, [])

    useEffect(() => {
        console.log('Updating Phase')
    }, [count])
    
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default LifeCycle
