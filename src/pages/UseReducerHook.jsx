import React, { useReducer } from 'react'

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
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>

                <button type="button" onClick={() => dispatchCount('increment')}>
                    Increment
                </button>

                <button type="button" onClick={() => dispatchCount('decrement')}>
                    Decrement
                </button>

                <button type="button" onClick={() => dispatchCount('reset')}>
                    Reset
                </button>


            </div>
        </section>
    )
}

export default UseReducerHook
