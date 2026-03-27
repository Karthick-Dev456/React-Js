import React, { useEffect, useMemo, useState } from 'react'
import { submitButton } from '../utilities/Styles'

function sumOneToN(count) {

    console.log("Calculating")
    let sum = 0
    for (let i = 1; i <= count; i += 1) {
        sum += i
    }
    return sum
}

const UseMemoHook = () => {
    const [count, setCount] = useState(1000000000)
    const [tick, setTick] = useState(0)

    const total = useMemo(() => sumOneToN(count), [count])

    useEffect(() => {
        console.log(tick)
    }, [tick])

    return (
        <section>
            <h1>useMemo Hook</h1>
            <p>
                Calculation Result: {total}
            </p>

            <div className='flex gap-2'>

                <button className={submitButton} type="button" onClick={() => setCount((c) => c + 500)}>
                    Increase count
                </button>

                <button className={submitButton} type="button" onClick={() => setTick((t) => t + 1)}>
                    Increase tick
                </button>

            </div>
        </section>
    )
}

export default UseMemoHook
