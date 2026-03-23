import React from 'react'
import DcComics from './DcComics'
import MarvelComics from './MarvelComics'

const Comics = () => {
    return (
        <div>
            <h1>Comics</h1>
            <DcComics />
            <MarvelComics />
        </div>
    )
}

export default Comics