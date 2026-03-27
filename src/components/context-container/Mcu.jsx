import React from 'react'
import { useContext } from 'react'
import { movieContext } from '../../pages/UseContextHook'

const Mcu = () => {
    const movie = useContext(movieContext)
    
    return (
        <div>
            <h1>Mcu</h1>
            <p>Movie: {movie.title}</p>
            <p>Year: {movie.year}</p>
        </div>
    )
}

export default Mcu