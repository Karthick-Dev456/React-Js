import React from 'react'
import Nested from '../components/Nested'

const Container = () => {
    return (
        <div>
            <h1>The Parent Component</h1>
            <Nested />
        </div>
    )
}

export default Container