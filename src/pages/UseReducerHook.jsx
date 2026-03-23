import React, { useReducer } from 'react'

const initialState = { count: 0 }

function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)

    return (
        <section>
            <h1>useReducer Hook</h1>
            <p>
                Count: <strong>{state.count}</strong>
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button type="button" onClick={() => dispatch({ type: 'increment' })}>
                    Increment
                </button>
                <button type="button" onClick={() => dispatch({ type: 'decrement' })}>
                    Decrement
                </button>
                <button type="button" onClick={() => dispatch({ type: 'reset' })}>
                    Reset
                </button>
            </div>
        </section>
    )
}

export default UseReducerHook
