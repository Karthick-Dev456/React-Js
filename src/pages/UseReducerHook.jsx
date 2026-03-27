import React, { useReducer } from 'react'
import { submitButton } from '../utilities/Styles'

const initialState = 0

function counterReducer(state, action) {

    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1 
        case 'reset':
            return initialState
        default:
            return state
    }
}

const UseReducerHook = () => {
    const [count, dispatchCount] = useReducer(counterReducer, initialState)

    return (
        <section>
            <h1>useReducer Hook</h1>
            <p>
                Count: <strong>{count}</strong>
            </p>
            <div className='flex gap-2'>

                <button type="button" onClick={() => dispatchCount('increment')} className={submitButton}>
                    Increment
                </button>

                <button type="button" onClick={() => dispatchCount('decrement')} className={submitButton}>
                    Decrement
                </button>

                <button type="button" onClick={() => dispatchCount('reset')} className={submitButton}>
                    Reset
                </button>


            </div>
        </section>
    )
}

export default UseReducerHook
