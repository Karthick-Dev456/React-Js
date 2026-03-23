import React from 'react'

const PropsTsValidation = ({ name = 'Kumar', age, isActive }) => {

    console.log(typeof name, typeof age, typeof isActive)

    if (typeof name !== 'string') {
        throw new Error('Name must be a string')
    }
    if (typeof age !== 'number') {
        throw new Error('Age must be a number')
    }
    if (typeof isActive !== 'boolean') {
        throw new Error('Is Active must be a boolean')
    }
    return (
        <div>
            <h1>PropsTsValidation</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Is Active: {isActive ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default PropsTsValidation