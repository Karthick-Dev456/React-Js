import React, { useEffect, useState} from 'react'

const UseEffectHook = () => {

    const [positiveCount, setPositiveCount] = useState(0)
    const [negativeCount, setNegativeCount] = useState(0)

    useEffect(() => {
        console.log("Update Execution for its Dependancy")
    }, [positiveCount])

    useEffect(() => {
        console.log("One Time Execution")
    }, [])

    useEffect(() => {
        console.log("Always Execution")
    })



    return (
        <div>
            <p>Positive Count: {positiveCount}</p>
            <p>Negative Count: {negativeCount}</p>
            <button onClick={() => setPositiveCount(positiveCount + 1)}>Increment Positive</button>
            <button onClick={() => setNegativeCount(negativeCount - 1)}>Decrement Negative</button>
        </div>
    )
}

export default UseEffectHook
