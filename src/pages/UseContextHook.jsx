import React from 'react'
import { createContext } from 'react'
import Comics from '../components/context-container/Comics'

export const movieContext = createContext()

const UseContextHook = () => {
    return (
        <div>
            <h1>UseContextHook</h1>
            
            <movieContext.Provider value={{title: "Avengers", year: 2012}}>
                <Comics />
            </movieContext.Provider>
        </div>
    )
}


export default UseContextHook