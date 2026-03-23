import React from 'react'
import { createContext } from 'react'
import Comics from '../components/context-container/Comics'

const movieContext = createContext()

const UseContextHook = () => {
    return (
        <movieContext.Provider value={{"title": "Avengers", "year": 2012}}>
            <div>
                <h1>UseContextHook</h1>
                <Comics />
            </div>
        </movieContext.Provider>
    )
}

export { movieContext }
export default UseContextHook